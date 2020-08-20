import React from 'react'
import plant_data from './shop.data.js'
import ProductCollection from '../../components/product-collection/product-collection.component'

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
               {x.map(({id, title, items, routeName}) => (
                    <ProductCollection key={id} id={id} title={title} items={items} route={routeName}/>
                ))
               }     
            </div>
        )
        
    }
}
export default Shop


