import React from 'react'
import './product-collection.component.styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'

const ProductCollection = ({title, items}) => (
    <div className='product-menu'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>    
            {items
            .filter((items, index) => index<4)
            .map(({name, id, title, imageUrl, price}) => ( 
                    <CollectionItem key={id} title={title} name={name} imageUrl={imageUrl} price={price}/>
            ))}    
        </div>
    </div>
)

export default ProductCollection

