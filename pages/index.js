import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/products') // programmatic routing
  }
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/products">
        <a>Products</a>
      </Link>
      <br />
      <Link href="/users">
        <a>Users</a>
      </Link>
      <br />
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <br />
      <button onClick={handleClick}> Place Order</button>
    </div>
  );
}
