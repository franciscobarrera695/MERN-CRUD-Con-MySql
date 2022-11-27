import { useNavigate } from "react-router-dom"
import { useTasks } from "../context/TaskContext"

const TaskCard = ({ task }) => {
    const { deleteTask, toggleTaskDone } = useTasks()
    const navigate = useNavigate()
    const handleDone = async () => {
        await toggleTaskDone(task.id)
    }

    return (
        <div className="col-lg-4 col-md-6 col-12 ">
            <div className="card rounded mb-2 shadow animate__animated animate__fadeInUp">
                <div className="card-body ">
                    <h2 className="card-title">{task.title}</h2>
                    <p className="card-text">{task.description}</p>
                    <span>{task.done === 1 ? '✅' : '❌'}</span>
                    
                    <div className="d-flex flex-column mt-5">
                    <button className="btn btn-danger " onClick={() => deleteTask(task.id)}>Delete</button>
                    <button className="btn btn-secondary my-2" onClick={() => navigate(`/edit/${task.id}`)}>Update</button>
                    <button className="btn btn-success " onClick={() => handleDone(task.done)}>Toglet Task</button>
                
                    </div>
                    </div>
                    <div class="card-footer text-muted">
                    <span>{task.createAt}</span>
  </div>
            </div>
        </div>


    )
}

export default TaskCard