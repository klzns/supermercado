import Lists from "./Lists";
import { verifyIdToken } from 'next-firebase-auth'
import { cookies, headers } from 'next/headers';

export default async function ListsPage() {
  const result = await verifyAuth()

  return (<div>a{JSON.stringify(result, null, 2)}b<Lists />{process.env.NODE_ENV}</div>)
}


type CookieValue = (
  { idToken: string; refreshToken: string } |
  { idToken?: never; refreshToken?: never }
)

async function verifyAuth() {
  const authCookie = cookies().get('supermercado.AuthUser')?.value

  const { idToken, refreshToken } = (authCookie ? JSON.parse(authCookie) : {}) as CookieValue
  
  let AuthUser;

  if (idToken) {
    // @ts-expect-error types are wrong
    return verifyIdToken(idToken, refreshToken)
  }
  
  return
}   