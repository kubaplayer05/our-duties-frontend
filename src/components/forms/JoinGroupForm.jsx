import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import {useInput} from "../../hooks/useInput.jsx";
import {useFetch} from "../../hooks/useFetch.jsx";

const JoinGroupForm = () => {

    const {value: groupId, setValue: setGroupId} = useInput()
    const {value: password, setValue: setPassword} = useInput()
    const {isLoading, error, fetchData} = useFetch()

    const submitHandler = async e => {
        e.preventDefault()

        const response = await fetchData("/groups/join", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: groupId,
                password
            })
        })

        console.log(response)
    }

    return (
        <form className="w-[80%]" onSubmit={submitHandler}>
            <div className="flex flex-col gap-4 my-4">
                <label htmlFor="groupId" className="text-start">Klucz grupy</label>
                <Input id="groupId" type="text" value={groupId}
                       onChange={e => {
                           setGroupId(e.target.value)
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

export default JoinGroupForm