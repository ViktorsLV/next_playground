function NewsByCategory({ category, articles }) {
  return (
    <>
      <div>News for category: {category}</div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h4> {article.title}</h4>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default NewsByCategory;

export async function getServerSideProps(context) {
  // only for pre-rendering - not for client side fetching!!! (so can inly be run on the page and NOT a COMPONENT)
  const { params } = context;
  const { category } = params;

  const response = await fetch(
    `http://localhost:3004/news?category=${category}`
  );
  const data = await response.json();

  console.log(data);
  return {
    props: {
      articles: data,
      category,
    },
  };
}
