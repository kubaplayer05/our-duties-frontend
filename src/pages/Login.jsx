import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = e => {
        e.preventDefault()
        console.log(`email: ${email} \npassword: ${password}`)
    }

    return (
        <form onSubmit={submitHandler} className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-[80%] max-w-[500px] bg-white shadow-md
        flex flex-col items-center justify-center gap-12 px-10 py-20 rounded-lg">
            <h1 className="text-xl font-semibold">Zaloguj się</h1>
            <div className="w-[100%] flex flex-col gap-6">
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="email">Adres email</label>
                    <Input type="email" id="email" placeholder="nazwa@gmail.com"
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}/>
                </div>
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="password">Hasło</label>
                    <Input type="password" id="password" placeholder="**** ****"
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}/>
                </div>
            </div>
            <Button type="submit" className="w-[100%]">Akceptuj</Button>
            <p className="text-base font-semibold">Nie masz konta? <Link to="/signup" className="text-blue-600">Zarejestruj
                się</Link></p>
        </form>
    )
}

export default Login