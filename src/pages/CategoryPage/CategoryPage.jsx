import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "../../components/Item/Item"

function Category() {
  const [users, setUsers] = useState([]);
  let {categoryId} = useParams();

  let filterCharacters = users.filter((user) => {
    return user.species === categoryId;
  })
  
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      
  }, []);

  return (
    <div>
      {filterCharacters.map((user) => {
        return (<div key={user.id}><Item user={user}/></div>)
      })}
        
      </div>
  )
}

export default Category