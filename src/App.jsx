import { useState } from 'react'
import SearchBar from './componentes/searchbar'
import ImageList from './componentes/imagelist'
import ImageShow from './componentes/imageshow'
import './App.css'

function App() {
const [images, setImages]= useState([])
const handleSubmit = async(term) => {
  console.log('uste esta buscando con:', term)
}
  return (
  
      <div>
       <SearchBar onSubmit= {handleSubmit} />
      </div>
      
  )
}

export default App
