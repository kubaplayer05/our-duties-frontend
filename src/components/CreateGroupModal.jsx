import Modal from "./ui/Modal.jsx";
import Button from "./ui/Button.jsx";
import {useState} from "react";
import CreateGroupForm from "./forms/CreateGroupForm.jsx";
import JoinGroupForm from "./forms/JoinGroupForm.jsx";

const CreateGroupModal = ({closeModal}) => {

    const [content, setContent] = useState(<>
        <div
            onClick={showJoinGroupForm}
            className="w-[80%] cursor-pointer bg-gray-200 py-6 px-2 border-2 border-gray-300 hover:border-blue-500 transition">
            <h4>Dołącz do grupy</h4>
        </div>
        <div
            onClick={showCreateGroupForm}
            className="w-[80%] cursor-pointer bg-gray-200 py-6 px-2 border-2 border-gray-300 hover:border-blue-500 transition">
            <h4>Utwórz grupę</h4>
        </div>
    </>)

    function showCreateGroupForm() {
        setContent(<CreateGroupForm/>)
    }

    function showJoinGroupForm() {
        setContent(<JoinGroupForm/>)
    }


    return (
        <Modal className="flex flex-col gap-6 items-center">
            {content}
            <Button onClick={closeModal} className="w-[80%] bg-red-600 hover:bg-red-700">Zamknij</Button>
        </Modal>
    )
}

export default CreateGroupModal