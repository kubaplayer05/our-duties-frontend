import {useFetch} from "../hooks/useFetch.jsx";
import Button from "./ui/Button.jsx";
import {useState, useEffect} from "react";

const GroupsList = () => {

    const [groups, setGroups] = useState([])
    const {isLoading, error, fetchData} = useFetch()

    const createGroup = () => {

    }

    useEffect(() => {

        const getGroups = async () => {

            const {groups} = await fetchData("/groups", {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (groups && !groups.error) {
                setGroups([...groups])
            }
        }

        getGroups()
    }, []);

    return (
        <div className="px-4 py-6 max-w-[400px] min-w-[300px] w-[20%] border-r-2 border-r-gray-200 h-full">
            <div className="flex justify-between items-center">
                <p>Twoje grupy</p>
                <Button onClick={createGroup}>Dodaj +</Button>
            </div>
            <div className="mt-6">
                {isLoading && <span>Ładowanie</span>}
                {error && <span className="text-red-600">{error}</span>}
                <ul>
                    {groups.map((group) => {
                        return <li key={group.id}>{group.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default GroupsList