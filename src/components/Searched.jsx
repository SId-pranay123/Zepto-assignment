import React from 'react'

const Searched = ({search}) => {
    console.log(search);
  return (
    <div>
        {search.map((result) => {
        const name = result.first_name + " " + result.last_name;
        return <div key={result.id}> {name}</div>
      })}
    </div>
    
  )
}

export default Searched