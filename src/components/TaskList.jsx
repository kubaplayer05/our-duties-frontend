import {useEffect, useState} from "react";
import {useFetch} from "../hooks/useFetch.jsx";
import TaskPriority from "./ui/TaskPriority.jsx";

const TaskList = () => {

    const [tasks, setTasks] = useState([])
    const {isLoading, error, fetchData} = useFetch()

    useEffect(() => {

        const getTasks = async () => {
            let {duties} = await fetchData("/duties", {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (duties && !duties.error) {

                duties = duties.map(duty => {
                    const finishDate = new Date(duty.finishDate).toLocaleDateString()
                    const createdAt = new Date(duty.createdAt).toLocaleDateString()

                    return {
                        ...duty,
                        finishDate,
                        createdAt
                    }
                })

                console.log(duties)

                setTasks([...duties])
            }
        }

        getTasks()

    }, []);

    return (
        <div className="p-6 w-full">
            {error && <p>{error}</p>}
            <ul className="flex flex-col items-center gap-6">
                {tasks.length === 0 && <p className="text-base font-semibold">Brak Zadań</p>}
                {tasks.map(task => {
                    return <li key={task.id} className="max-w-[1000px] w-[80%] bg-white px-6 py-5 shadow-md relative">
                        <h3 className="text-lg font-medium uppercase">{task.name}</h3>
                        <TaskPriority priority={task.priority}/>
                        <span className="absolute top-4 right-4 text-gray-500">utworzono: {task.createdAt}</span>
                        <p>Do: {task.finishDate}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default TaskList