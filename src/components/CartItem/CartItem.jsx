import { Row} from 'react-bootstrap';

import Item from '../Item/Item';


export default function CartItem ({producto}) {


  return(
        <>
       <div>
       <Row>
          {producto.map((productos) => {
            
            return (
              <Item key={productos.id} productos={productos}/>
            )
          })}
        </Row>
 </div>
     
      
        </>
    )
}