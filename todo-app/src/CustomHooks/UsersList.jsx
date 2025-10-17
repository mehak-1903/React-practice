import useFetch from "./useFetch.jsx";

export default function UsersList(){
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error...</p>;

    return(
        <>
        <h2>Users List</h2>
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </>
    )
}