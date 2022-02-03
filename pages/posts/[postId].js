import { useRouter } from 'next/router'

function Post({post}) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>Single Post:</div>
      <h4> {post.title}</h4>
      <p>{post.body}</p>
    </>
  )
}

export default Post;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map(post => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  })

  return {
    // paths, - t generate all urls statically 
    paths: [ // generate only these static
      { params: { postId: '1' } },
      { params: { postId: '2' } }
    ],
    fallback: true // for the rest -> use fallback and display loading text
  }
}

export async function getStaticProps(context) { // only for pre-rendering - not for client side fetching!!! (so can inly be run on the page and NOT a COMPONENT)
  const {params} = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await response.json();

  if(!data.id) {
    return {
      notFound: true // will return Not Found page if the URL doesn't exist
    } 
  }

  console.log(data);
  return {  
    props: {
      post: data
    },
  };
}
