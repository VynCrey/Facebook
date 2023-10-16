
import Item from '../../components/Item/Item';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';





function DetailPage() {
  let {id} = useParams()  
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      
  }, [id]);

  return (
    <div className='tarject-Detail'>
    
      {user.id && <Item user={user}/>}
    </div>
  );
}




export default DetailPage