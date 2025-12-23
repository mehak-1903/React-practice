import React from 'react'
import useFetch from '../custom-hooks/useFetch'

function Users() {
    const {data, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/users');

    if(isLoading) return <p>Loading!!!</p>
    if(error) return <p>{error}</p>
  return (
    <ul>
        {data.map((users) => (
            <li key={users.id}>{users.name}</li>
        ))}
    </ul>
  )
}

export default Users