const TaskPriority = ({priority}) => {

    let firstDivClass = ""
    let secondDivClass = ""
    let thirdDivClass = ""

    switch (priority) {
        case "LOW":
            firstDivClass = "bg-blue-500"
            break
        case "MEDIUM":
            firstDivClass = "bg-yellow-600"
            secondDivClass = "bg-yellow-600"
            break
        case "HIGH":
            firstDivClass = "bg-red-600"
            secondDivClass = "bg-red-600"
            thirdDivClass = "bg-red-600"
            break
        default:
            firstDivClass = "bg-yellow-600"
            secondDivClass = "bg-yellow-600"
    }

    return (
        <div className="flex gap-2 justify-start items-center my-3">
            <div className={`w-[30px] h-[15px] bg-gray-400 ${firstDivClass}`}></div>
            <div className={`w-[30px] h-[15px] bg-gray-400 ${secondDivClass}`}></div>
            <div className={`w-[30px] h-[15px] bg-gray-400 ${thirdDivClass}`}></div>
        </div>
    )
}

export default TaskPriority