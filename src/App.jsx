import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App () {
  return (
    <div className='container m-auto max-w-7xl'>
      <NavBar />
      <ItemListContainer greeting='Bienvenidos! 👋' />
    </div>
  )
}

export default App
