import { useState } from 'react'
import SearchBar from './componentes/SearchBar'
import ImageList from './componentes/ImageList'
import ImageShow from './componentes/ImageShow'
import './App.css'
import searchImage from './api'

function App() {
const [images, setImages]= useState([])
const handleSubmit = async(term) => {
  console.log('uste esta buscando con:', term)
  const result = await searchImage(term)

  
 setImages(result)

}
  return (
  
      <div>
       <SearchBar onSubmit= {handleSubmit} />
       <ImageList images={images} />
      </div>
      
  )
}

export default App
