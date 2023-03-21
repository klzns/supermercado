"use client";

import { logout } from "modules/client/auth"
import { useAuthenticated } from "../useAuthenticated";

export default function Lists() {
  // useAuthenticated()

  return (
    <div>
      <h1>Lists</h1>
      <button onClick={logout}>Logout</button>
      
    </div>
  )
}