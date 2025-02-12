import React, { use, useEffect } from 'react'


function App() {
  useEffect(() => {
    fetch("/products-api/api/products.json")
      .then(res => res.json())
      .then(res => console.log(res))
  }, [])

  useEffect(() => {
    fetch("/products-api/api/products/1.json")
      .then(res => res.json())
      .then(res => console.log(res))
  })
  return <div>rina</div>
}

export default App