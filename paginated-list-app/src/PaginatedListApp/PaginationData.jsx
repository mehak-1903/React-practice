import { useEffect, useState } from "react"
import usePaginated from "./usePaginated";

export default function PaginationData(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {setData(data);
            setLoading(false);
        }
    ).catch((err) => console.log("Error:", err))
    }, [])

    const {next, prev, currentPage, currentData, maxPage} = usePaginated(data, 3);

    if(loading) return <h2>Loading...</h2>

    return(
        <>
        <h2>Paginated List.</h2>
        <ul style={{listStyle: "none"}}>
            {currentData().map((item) => (
                <li key={item.id} style={{background: "#f4f4f4",color: "#333", padding: "10px", margin: "10px", width: '200px', borderRadius: '8px'}}>
                    {item.name}
                </li>
            ))}
        </ul>

        <div>
            <button onClick={prev} disabled={currentPage === 1}>Prev</button>
            <span style={{margin: "0 15px"}}>
                Page {currentPage} of {maxPage}
            </span>
            <button onClick={next} disabled={currentPage === maxPage}>Next</button>
        </div>
        </>
    )
}