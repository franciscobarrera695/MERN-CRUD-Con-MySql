import { Form, Formik } from 'formik'
import { useTasks } from '../context/TaskContext'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const TasksForm = () => {
    const { createTask, getTask, updateTask } = useTasks()
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await getTask(params.id)
                setTask({
                    title: task.title,
                    description: task.description,
                })
            }
        }
        loadTask()
    }, [])


    return (
        <div className='p-4'>

            <h1 className='text-center mt-3'>{params.id ? 'Edit Task' : 'New Task'}</h1>


            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values) => {
                    console.log(values)
                    if (params.id) {
                        await updateTask(params.id, values)
                        navigate('/')
                    } else {
                        await createTask(values)
                        navigate('/')
                    }
                    setTask({
                        title: '',
                        description: ''
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                   <div className='row  justify-content-center align-items-center'>
                    <div className='col-md-4 my-4 animate__animated animate__fadeInLeft'>
                    <Form className='card  card-body rounded shadow ' onSubmit={handleSubmit}>
                        <label>title</label>
                        <input className="form-control rounded my-3" type="text" name="title" placeholder='write a title' onChange={handleChange} value={values.title} />
                        <label>description</label>
                        <textarea className='form-control rounded my-3' name="description" rows="3" placeholder='write a description' onChange={handleChange} value={values.description}></textarea>
                        <button className='btn btn-primary rounded mb-3 animate__animated animate__pulse' type='submit' disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Save'}
                        </button>
                    </Form>
                    </div>
                   </div>
                )}

            </Formik>
        </div>
    )
}

export default TasksForm