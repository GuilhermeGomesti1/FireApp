import { BrowserRouter } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import RoutesApp from './routes'
export default function App(){
  return(
    <BrowserRouter>
      <ToastContainer autoClose={3000}/>
       <RoutesApp/>
    </BrowserRouter>
      
    
  )
}