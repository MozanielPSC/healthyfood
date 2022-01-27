import Head from "next/head";
import { FirstBlock } from "../components/FirstBlock";
import { SecondBlock } from "../components/SecondBlock";
export default function Home() {
  return (
    <>
      <Head>
        <title>Healthy Food</title>
      </Head>
      <FirstBlock></FirstBlock>
      <SecondBlock/>
    </>
  )
}
