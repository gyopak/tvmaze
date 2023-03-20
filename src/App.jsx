import { useState } from 'react'
import './App.css'
import { useShowsByCategory } from './features/showsByCategory'

function App() {
  const { shows } = useShowsByCategory()
  console.log(shows)
  return (
    <div className="App">
    </div>
  )
}

export default App
