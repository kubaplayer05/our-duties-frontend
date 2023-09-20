import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useInput} from "../hooks/useInput.jsx";
import {validateEmail, validatePassword} from "../utils/verify.jsx";
import {useFetch} from "../hooks/useFetch.jsx";
import {useAuth} from "../hooks/useAuth.jsx";

const Signup = () => {

    const checkPasswords = () => {
        if (password === repeatPassword) {
            return null
        }

        return "Podane hasła nie są takie same"
    }

    const {error, isLoading, fetchData} = useFetch()
    const {dispatch} = useAuth()
    const navigate = useNavigate()

    const {
        value: email,
        setValue: setEmail,
        error: emailError,
        touched: emailTouched,
        setTouched: setEmailTouched
    } = useInput(validateEmail)

    const {
        value: name,
        setValue: setName,
        error: nameError,
        touched: nameTouched,
        setTouched: setNameTouched
    } = useInput()

    const {
        value: password,
        setValue: setPassword,
        error: passwordError,
        touched: passwordTouched,
        setTouched: setPasswordTouched
    } = useInput(validatePassword)

    const {
        value: repeatPassword,
        setValue: setRepeatPassword,
        error: repeatPasswordError,
        touched: repeatPasswordTouched,
        setTouched: setRepeatPasswordTouched
    } = useInput(checkPasswords)

    const submitHandler = async e => {
        e.preventDefault()

        setEmail("")
        setName("")
        setPassword("")
        setRepeatPassword("")
        setEmailTouched(false)
        setNameTouched(false)
        setPasswordTouched(false)
        setRepeatPasswordTouched(false)

        const userData = await fetchData("/user/signup", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                name,
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
            <h1 className="text-xl font-semibold">Zarejestruj się</h1>
            <div className="w-[100%] flex flex-col gap-6">
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="email">Adres email</label>
                    <Input value={email} type="email" id="email" placeholder="nazwa@gmail.com"
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}
                           onFocus={() => {
                               setEmailTouched(true)
                           }}
                    />
                    {emailError && emailTouched && <p className="text-red-600">{emailError}</p>}
                </div>
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="name">Nazwa</label>
                    <Input value={name} type="text" id="name" placeholder="nazwa użytkownika"
                           onChange={(e) => {
                               setName(e.target.value)
                           }}
                           onFocus={() => {
                               setNameTouched(true)
                           }}
                    />
                    {nameError && nameTouched && <p className="text-red-600">{nameError}</p>}
                </div>
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="password">Hasło</label>
                    <Input value={password} type="password" id="password" placeholder="**** ****"
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}
                           onFocus={() => {
                               setPasswordTouched(true)
                           }}
                    />
                    {passwordError && passwordTouched && <p className="text-red-600">{passwordError}</p>}
                </div>
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="reapet-password">Powtórz hasło</label>
                    <Input value={repeatPassword} type="password" id="reapet-password" placeholder="**** ****"
                           onChange={(e) => {
                               setRepeatPassword(e.target.value)
                           }}
                           onFocus={() => {
                               setRepeatPasswordTouched(true)
                           }}
                    />
                    {repeatPasswordError && repeatPasswordTouched &&
                        <p className="text-red-600">{repeatPasswordError}</p>}
                </div>
            </div>
            {error && <div className="p-2 border-2-red-500 bg-red-200 rounded-md">
                <p className="text-red-600 font-bold">{error}</p>
            </div>}
            <Button type="submit" className="w-[100%]">{isLoading ? "..." : "Akceptuj"}</Button>
            <p className="text-base font-semibold">Masz konto? <Link to="/login" className="text-blue-600">Zaloguj
                się</Link></p>
        </form>
    )
}

export default Signup