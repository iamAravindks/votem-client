import Head from "next/head"
import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Signin from "../components/Signin/Signin"

const SignIn = () => {
  return (
        <>
      <Head>
        <title>Sign In | VOTEM</title>
        <meta name="description" content="evoting system using blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Signin/>
      </>
  )
}

export default SignIn