import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./styles/home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1 className="p-2 font-bold text-2xl">Home page</h1>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque
        eligendi, est repudiandae consequuntur minima adipisci, dignissimos
        ipsum provident deserunt esse dolore magnam quam atque libero officiis
        numquam fugiat cumque.
      </div>
    </>
  );
}

export const metadata = {
  title: 'Homepage',
};

