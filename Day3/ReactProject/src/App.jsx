import { useState } from 'react'
import './App.css'
import { Header } from './Header.jsx'


function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "pen",
      price: "15"
    },
    {
      id: 2,
      title: "pencil",
      price: "10"
    },
    {
      id: 3,
      title: "sharpner",
      price: "15"
    }
  ])

  const[product,setProduct]=useState()

  const add = (e)=>{
    e.preventDefault()
    setProducts([...products,product])
    alert("Added")
  }
  
  const update = (e) =>{
    setProduct(product =>({
      ...product,[e.target.name]:[e.target.value]
    }))
  }
  return (
    <>
      <h1>React Workshop</h1>

      <Header />
      <form >
        <input name="title" type = "text" placeholder="Title"  required onChange={update} ></input>
        <input name="price" type = "number" placeholder="number" required onChange={update} ></input>
        <input  type = "submit" value="Add" onClick={add}></input>
      </form>
      
      {
      products.map((product) => <div>{product.title}-{product.price}</div>)
      }
    </>
  )
}

export default App