import React from 'react'
import plant_data from './shop.data.js'
import ProductCollection from '../../components/product-collection/product-collection.component'
import './shop.component.styles.scss'

class Shop extends React.Component {

    constructor() {
        super();

        this.state = {
            collections: plant_data 
        };
    }
    render () {
        const x = this.state.collections; 
        return(
            <div className='shop-page'>
                
                {x.map(({id, ...otherCollectionProps}) => (
                    <ProductCollection key={id} {...otherCollectionProps}/>
                ))
               }     
            </div>
        )  
    }
}
export default Shop;


