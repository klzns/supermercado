import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  NextOrObserver,
  User,
  signOut,
} from "firebase/auth";

import { auth } from '../firebase'

export function signup(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

export type AuthStateCallback = NextOrObserver<User>

export function listenAuthStateChange(callback: AuthStateCallback) {
  return onAuthStateChanged(auth, callback)
}

export function logout() {
  return signOut(auth)
}