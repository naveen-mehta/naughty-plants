import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.component.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {       
      sections:[
          {
            title: 'Indoor Plants',
            imageUrl: 'https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 1
          },
          {
            title: 'Outdoor Plants',
            imageUrl: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 2
          },
          {
            title: 'Seeds',
            imageUrl: 'https://c0.wallpaperflare.com/preview/366/493/151/plant-sow-grow-growing-trays.jpg',
            id: 3
          },
          {
            title: 'Planters',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/11/17/19/28/planters-as-3821816_1280.jpg',
            size: 'large',
            id: 4          
          },
          {
            title: 'Garden accessories',
            imageUrl: 'https://images.pexels.com/photos/1345627/pexels-photo-1345627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            size: 'large',
            id: 5
          }
        ]
  };
}    

render() {
  return ( 
      <div className='directory-menu'> 
          {this.state.sections.map(({ title, id, imageUrl, size }) => (
              <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>
          ))}       
      </div>
  );
} 
} 

export default Directory;




