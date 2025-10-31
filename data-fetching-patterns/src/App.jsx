import './App.css'
import {useQuery, QueryClient, QueryClientProvider} from '@tanstack/react-query';
/* 
  useQuery -> hook for fetching data
  QueryClient -> yeh ek manager hai jo data fetch, cache, and refresh handle karta hai
  QueryClientProvider -> this is the context provider jo React query ko app mei use karne deta hai
  which means react query tbhi work krega jb hum apni app ko QueryClientProvider mei wrap krenge.
*/

const queryClient = new QueryClient();  // React Query Manager bnare hai

function Users(){
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["users"],  // unique name(cache key) for every API
    queryFn: async () => {    // isme actual api call likhi hoti hai. yeh data fetch krta hai
      console.log("Fetching fresh data...");

        // this function fetching data from API call
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      return res.json();
    },
    staleTime: 5000, // After 5 seconds data becomes stale(old) : this tells data kitni der k liye referesh manajayega.
  });

  if( isLoading ) return <p>Loading...</p>

  return(
    <div>
      <h2>Users List.</h2>
      {isFetching && <p>Refreshing Data...</p>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  )
}

export default App
