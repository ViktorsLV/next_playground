import Link from "next/link";

function News(props) {
  console.log(props);

  return (
    <div>
      <h1>News List</h1>
      {props.article.map((x) => {
        return <div key={x.id}>
          <Link href={`/news/${x.id}`} passHref>
            <h4>{x.id}) {x.title} | {x.category} </h4>
          </Link>
        </div>;
      })}
    </div>
  );
}

export default News;

export async function getServerSideProps() { // only for pre-rendering - not for client side fetching!!! (so can inly be run on the page and NOT a COMPONENT)
  const response = await fetch("http://localhost:3004/news");
  const data = await response.json();

  console.log(data);
  return {  
    props: {
      article: data,
    },
  };
}
