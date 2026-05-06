import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [product, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchProduct = () => {
    setLoading(true)

    fetch("https://api.freeapi.app/api/v1/public/randomproducts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

    const productArray = data.data.data
    setProducts(productArray)

    const randomIndex = Math.floor(Math.random() * productArray.length)

    setCurrentProduct(productArray[randomIndex])

    setLoading(false)
 
    })
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div className="container">
  <h1>Product Details</h1>

  {loading ? (
    <p>Loading...</p>
  ) : (
    <div className="product-card">
      
      <div className="product-info">
        <h4>"{currentProduct?.title}"</h4>
        <h4>"{currentProduct?.description}"</h4>
        <h4>₹ {currentProduct?.price}</h4>
        <h4>{currentProduct?.brand}</h4>
        <h4>{currentProduct?.category}</h4>
      </div>

      <div className="product-image">
        <img src={currentProduct?.images?.[0]} alt="product" />
      </div>

    </div>
  )}

  <button onClick={fetchProduct} className="btn">Next</button>
</div>
  )
}

export default App
