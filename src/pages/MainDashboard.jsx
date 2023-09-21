import GroupsList from "../components/GroupsList.jsx";
import TaskList from "../components/TaskList.jsx";

const MainDashboard = () => {

    return (
        <main className="flex gap-6">
            <GroupsList/>
            <TaskList/>
        </main>
    )
}

export default MainDashboard