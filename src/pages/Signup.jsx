import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import {Link} from "react-router-dom";

const Signup = () => {

    return (
        <form className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-[80%] max-w-[500px] bg-white shadow-md
        flex flex-col items-center justify-center gap-12 px-10 py-20 rounded-lg">
            <h1 className="text-xl font-semibold">Zarejestruj się</h1>
            <div className="w-[100%] flex flex-col gap-6">
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="email">Adres email</label>
                    <Input type="email" id="email" placeholder="nazwa@gmail.com"/>
                </div>
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="name">Nazwa</label>
                    <Input type="text" id="name" placeholder="nazwa użytkownika"/>
                </div>
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="password">Hasło</label>
                    <Input type="password" id="password" placeholder="**** ****"/>
                </div>
                <div className="flex flex-col w-[100%] gap-2.5 text-sm font-medium">
                    <label htmlFor="reapet-password">Powtórz hasło</label>
                    <Input type="password" id="reapet-password" placeholder="**** ****"/>
                </div>
            </div>
            <Button type="submit" className="w-[100%]">Akceptuj</Button>
            <p className="text-base font-semibold">Masz konto? <Link to="/login" className="text-blue-600">Zaloguj
                się</Link></p>
        </form>
    )
}

export default Signup