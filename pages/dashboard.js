import useSWR from 'swr'

function Dashboard() {
  const fetcher = async () => {
    const response = await fetch(
      `http://localhost:3004/dashboard`
    );
    const data = await response.json();
    return data
  }

  const { data, error } = useSWR('dashboard', fetcher)

  if (error) return <div>failed to load, not running the server perhaps</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <div>Items: {data.length}</div>
      <div>
        {data.map(x => {
          return (
            <div key={x.id}>
              <h1>Item: {x.title}</h1>
              <p>{x.description}</p>
              <hr />
            </div>
            )
        })}
      </div>
    </>
    )

  
}

export default Dashboard;
