import { RouterProvider, createBrowserRouter } from 'react-router'
import './App.css'
import { ROUTES } from './routes/Routes'

const route = createBrowserRouter(ROUTES)

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
