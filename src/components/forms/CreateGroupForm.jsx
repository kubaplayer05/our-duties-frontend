import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import {useFetch} from "../../hooks/useFetch.jsx";
import {useInput} from "../../hooks/useInput.jsx";

const CreateGroupForm = () => {

    const {value: name, setValue: setName} = useInput()
    const {value: password, setValue: setPassword} = useInput()
    const {isLoading, error, fetchData} = useFetch()

    const submitHandler = async e => {
        e.preventDefault()

        const response = await fetchData("/groups/create", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                password
            })
        })

        console.log(response)
    }

    return (
        <form className="w-[80%]" onSubmit={submitHandler}>
            <div className="flex flex-col gap-4 my-4">
                <label htmlFor="name" className="text-start">Nazwa grupy</label>
                <Input id="name" type="text" value={name}
                       onChange={e => {
                           setName(e.target.value)
                       }}/>
            </div>
            <div className="flex flex-col gap-4 my-4">
                <label htmlFor="password" className="text-start">Hasło grupy</label>
                <Input id="password" type="password" value={password}
                       onChange={e => {
                           setPassword(e.target.value)
                       }}/>
            </div>
            <Button type="submit" className="my-4 w-[100%]">Akceptuj</Button>
        </form>
    )
}

export default CreateGroupForm