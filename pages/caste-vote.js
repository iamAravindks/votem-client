import Head from "next/head";
import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Vote from '../components/CasteVote/CasteVote'

function stringToHex(str) {
  let hex = "";

  for (let i = 0; i < str.length; i++) {
    hex += str.charCodeAt(i).toString(16);
  }

  return hex.slice(0, 32);
}

const CasteVote = () =>
{
  return (
    <>
      <Head>
        <title>Cast vote | VOTEM</title>
        <meta name="description" content="evoting system using blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <Vote/>
    </>
  );
}


export default CasteVote