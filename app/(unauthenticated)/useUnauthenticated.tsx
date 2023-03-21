import { AuthStateCallback, listenAuthStateChange, logout } from "modules/client/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function useUnauthenticated() {
  const { push } = useRouter()

  useEffect(() => {
    const callback: AuthStateCallback = (user) => {

      if (user) {
        push("/lists")
      }
    }

    const unlisten = listenAuthStateChange(callback)

    return () => {
      unlisten()
    }
  }, [])
}