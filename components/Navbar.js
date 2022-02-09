import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
  const router = useRouter()
  const { data: session, status } = useSession()

  console.log(status);

  const pages = [ 
    {name: 'Home', path: '/'},
    {name: 'Blog', path: '/blog'},
    {name: 'Products', path: 'products'},
    {name: 'Users', path: '/users'},
    {name: 'Posts', path: '/posts'},
    {name: 'News', path: '/news'},
    {name: 'Protected', path: '/protected', protected: true},
    // {name: 'Log In', path: '/login'},
    // {name: 'Register', path: '/register'},
  ]

  const handleClick = () => {
    router.push('/products') // programmatic routing
  }
  
  return (
    <>
      <div className="bg-gray-300 flex flex-row p-4 drop-shadow-lg justify-between">
        <div className="font-bold text-lg">NextAPP</div>
        <div>
          {pages.map((page) => {
            return ( 
              <Link href={page.path} key={page.name}>
                {/*  hiding protected pages */}
                {page.protected && status !== 'authenticated' ? '' : <a className="pr-3">{(page.name).toUpperCase()}</a>}
              </Link>
            )
          })}
        </div>
        <div className="font-bold flex flex-row">
            {status === 'authenticated' && <div className="font-bold text-lg mr-4">{session.user.name}</div>}
            {session ? <button onClick={() => signOut()}>Sign out</button> : <button onClick={() => signIn()}>Sign in</button>}
        </div>
      </div>
    </>
  )
}