import { AuthStateCallback, listenAuthStateChange, logout } from "modules/client/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function useAuthenticated() {
  const { push } = useRouter()

  useEffect(() => {
    const callback: AuthStateCallback = (user) => {

      if (!user) {
        push("/login")
      }
    }

    const unlisten = listenAuthStateChange(callback)

    return () => {
      unlisten()
    }
  }, [])
}