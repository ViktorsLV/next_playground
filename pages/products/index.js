import Link from "next/link";

function products({productId = 4}) {
  return <div>
    <Link href="/">
      <a >Home</a>
    </Link>
    <div><Link href="/products/1">
      <a >Product 1</a>
    </Link></div>
    <div><Link href="/products/2">
      <a >Product 2</a>
    </Link></div>
    <div><Link href="/products/3" replace>
      <a >Product 3</a>
    </Link></div>
    <div><Link href={`/products/${productId}`}>
      <a >Product {productId} </a>
    </Link></div>
  </div>;
}

export default products;
