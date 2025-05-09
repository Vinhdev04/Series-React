
import './App.css'
import Customer from './components/state/Customer'

function App() {

  const info = {
    name: 'Phạm Công Vinh',
    email: 'vaniizIT@gmail.com'}
  return (
    <>
      <Customer info={info}/>
    </>
  )
}

export default App
