import {useFetch} from "../hooks/useFetch.jsx";
import Button from "./ui/Button.jsx";
import Modal from "./ui/Modal.jsx";
import {useState, useEffect} from "react";
import {createPortal} from "react-dom";
import Backdrop from "./ui/Backdrop.jsx";
import CreateGroupModal from "./CreateGroupModal.jsx";

const GroupsList = () => {

    const [groups, setGroups] = useState([])
    const [showModal, setShowModal] = useState(false)
    const {isLoading, error, fetchData} = useFetch()

    const createGroup = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
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
                console.log(groups)
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
            {showModal && createPortal(<CreateGroupModal
                closeModal={closeModal}/>, document.querySelector("#modal-root"))}
            {showModal && createPortal(<Backdrop/>, document.querySelector("#modal-root"))}
        </div>
    )
}

export default GroupsList