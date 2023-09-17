"use client"


import { signIn } from 'next-auth/react'

const SignInTextBtn = () => {
  return (
  <button
    onClick={() => signIn()}
    className="inline text-green-700 hover:text-green-600"
  >
    Sign In
  </button>

  )
}

export default SignInTextBtn