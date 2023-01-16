import { Row} from 'react-bootstrap';

import Item from '../Item/Item';


export default function ItemList ({show}) {


  return(
        <>
       <div>
       <Row>
          {show.map((productos) => {
            
            return (
              <Item key={productos.id} productos={productos}/>
            )
          })}
        </Row>
 </div>
     
      
        </>
    )
}