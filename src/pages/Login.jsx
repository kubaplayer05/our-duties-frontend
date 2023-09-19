import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import {Link, useNavigate,} from "react-router-dom";
import {useInput} from "../hooks/useInput.jsx";
import {validateEmail, validatePassword} from "../utils/verify.jsx";
import {useFetch} from "../hooks/useFetch.jsx";
import {useAuth} from "../hooks/useAuth.jsx";

const Login = () => {

    const navigate = useNavigate()
    const {dispatch} = useAuth()
    const {fetchData, isLoading, error} = useFetch()

    const {
        value: email,
        setValue: setEmail,
        error: emailError,
        touched: emailTouched,
        setTouched: setEmailTouched
    } = useInput(validateEmail)

    const {
        value: password,
        setValue: setPassword,
        error: passwordError,
        touched: passwordTouched,
        setTouched: setPasswordTouched
    } = useInput(validatePassword)

    const submitHandler = async e => {
        e.preventDefault()

        setEmail("")
        setPassword("")
        setEmailTouched(false)
        setPasswordTouched(false)

        const userData = await fetchData("/user/login", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        if (userData && !userData.error) {
            dispatch({type: "LOGIN", payload: userData})
            navigate("/")
        }
    }

    return (
        <form onSubmit={submitHandler} className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-[80%] max-w-[500px] bg-white shadow-md
        flex flex-col items-center justify-center gap-12 px-10 py-20 rounded-lg">
            <h1 className="text-xl font-semibold">Zaloguj się</h1>
            <div className="w-[100%] flex flex-col gap-6">
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="email">Adres email</label>
                    <Input onFocus={() => {
                        setEmailTouched(true)
                    }} type="email" id="email" placeholder="nazwa@gmail.com"
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}
                           value={email}
                    />
                    {emailError && emailTouched && <p className="text-red-600">{emailError}</p>}
                </div>
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="password">Hasło</label>
                    <Input type="password" id="password" placeholder="**** ****"
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}
                           onFocus={() => {
                               setPasswordTouched(true)
                           }}
                           value={password}
                    />
                    {passwordError && passwordTouched && <p className="text-red-600">{passwordError}</p>}
                </div>
            </div>
            {error && <div className="p-2 border-2-red-500 bg-red-200 rounded-md">
                <p className="text-red-600 font-bold">{error}</p>
            </div>}
            <Button type="submit" className="w-[100%]" disabled={isLoading}>{isLoading ? "..." : "Akceptuj"}</Button>
            <p className="text-base font-semibold">Nie masz konta? <Link to="/signup" className="text-blue-600">Zarejestruj
                się</Link></p>
        </form>
    )
}

export default Login