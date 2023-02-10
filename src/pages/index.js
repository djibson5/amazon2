import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/react";
import Product from "../local_json/products.json";

export default function Home({products}) {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
     {/* <h1>Hey Son5 from Igip Group</h1> */}

     {/* Header Section */}
     <Header />

     <main className="max-w-screen-2xl mx-auto">
      {/* Banner */}
      <Banner />

      {/* ProductFeed */}
      <ProductFeed products={products} />
      
     </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // const products = await fetch("https://fakestoreapi.com/products")
  const products = await fetch("http://psoft.alwaysdata.net/amazone/products.json")
  .then(
    (res)=>res.json()
  );
  return {
    props: {
    products,
    session
           } ,
        };
}

// GET >>>> https://fakestoreapi.com/products
