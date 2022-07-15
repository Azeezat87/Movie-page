import { useState } from 'react'
import './App.css'
import Card from './components/card/card';
import Popular from './components/popular';

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      <Card />
      <Popular />
    </section>
  )
}

export default App
