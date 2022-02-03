function Users(props) {
  console.log(props);

  return (
    <div>
      <h1>Users List</h1>
      {props.users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default Users;

export async function getStaticProps() { // only for pre-rendering - not for client side fetching!!! (so can inly be run on the page and NOT a COMPONENT)
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data);
  return {  
    props: {
      users: data,
    },
  };
}
