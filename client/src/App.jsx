import { Route, Routes } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TasksForm from './pages/TasksForm'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'
import { TaskContextProvider } from './context/TaskContext'

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <TaskContextProvider>

          <Routes>
            <Route path='/' element={<TasksPage />} />
            <Route path='/new' element={<TasksForm />} />
            <Route path='/edit/:id' element={<TasksForm />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>



        </TaskContextProvider>
      </div>
    </>
  )
}
export default App
