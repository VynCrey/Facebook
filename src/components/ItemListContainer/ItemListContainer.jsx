import './ItemListContainer.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';




function ItemListContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      
  }, []);

  return (
    <div className='tarject'>
    
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/detail/${user.id}`}><Item user={user} /></Link>
          </div>
          
        )
      })}
    </div>
  );
}




export default ItemListContainer