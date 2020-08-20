import React from 'react'
import './product-collection.component.styles.scss'


const ProductCollection = ({id, title, items}) => (
    <div className='productCollection'>
        <h1>Products</h1>    
        <h2 key={id}>{title}</h2> 
        {items
            .filter((items, index) => index<4)
            .map(({name, id}) => ( 
                    <h3 key={id}>{name}</h3>
                )    
            )}    
    </div>
)

export default ProductCollection

