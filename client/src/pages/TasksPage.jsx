import { useEffect } from 'react'
import TaskCard from '../components/TaskCard'
import { useTasks } from '../context/TaskContext'


const TasksPage = () => {

    const { tasks, loadTasks } = useTasks()

    useEffect(() => {
        loadTasks()
    }, [])



    const renderMain = () => {

        if (tasks.length === 0) return <h1>no tasks yet</h1>

        return tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
        ))
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Tasks</h1>
            <div className="row">
            {renderMain()}
            </div>
            
        </div>
    )
}

export default TasksPage