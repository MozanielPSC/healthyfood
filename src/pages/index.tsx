import Head from "next/head";
import { FifthBlock } from "../components/FifthBlock";
import { FirstBlock } from "../components/FirstBlock";
import { FourthBlock } from "../components/FourthBlock";
import { SecondBlock } from "../components/SecondBlock";
import { ThirdBlock } from "../components/ThirdBlock";
export default function Home() {
  return (
    <>
      <Head>
        <title>Healthy Food</title>
      </Head>
      <FirstBlock></FirstBlock>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
      <FifthBlock/>
    </>
  )
}
