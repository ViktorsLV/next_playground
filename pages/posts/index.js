import Link from "next/link";

function Posts(props) {
  console.log(props);

  return (
    <div>
      <h1>Posts List</h1>
      {props.posts.map((post) => {
        return <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h4>{post.id}) {post.title}</h4>
          </Link>
        </div>;
      })}
    </div>
  );
}

export default Posts;

export async function getStaticProps() { // only for pre-rendering - not for client side fetching!!! (so can inly be run on the page and NOT a COMPONENT)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log(data);
  return {  
    props: {
      posts: data,
    },
  };
}
