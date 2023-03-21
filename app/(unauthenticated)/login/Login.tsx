"use client";

import { login } from '@/modules/client/auth'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useUnauthenticated } from '../useUnauthenticated';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState<any>()

  useUnauthenticated()
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { email, password } = event.currentTarget

    try {
      await login(email.value, password.value)
      router.push('/lists')
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" />

        {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}