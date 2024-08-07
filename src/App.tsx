
import './App.css'
import Input from './components/Input'
import Lists from './components/Lists'
import { useContextList } from './store/ContextProvider';

function App() {
  


  return (
  <main>
   
    <h1 className=' text-center text-white font-bold text-2xl mb-3'>To-Do List</h1>
    <Input />
    <Lists />
  </main>
  )
}

export default App
