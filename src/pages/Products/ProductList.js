import React, {memo} from 'react'

const ProductList = (props) =>{
  console.log(props)
  return props.data.map(product => {
    return (
      <div key={`${product.naziv}_${product.cena}`}>
        <h1>{product.naziv}</h1>
        <h2>{product.cena}</h2>
      </div>
    )
  })
 
}

export default memo(ProductList)