import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
   return (
      <div className="flex min-h-screen flex-col  bg-slate-500 p-20 text-white">
         <Head>
            <title>Tyrone Cloma</title>
            <meta name="description" content="Tyrone Cloma portfolio website" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>
            <div className="">
               <h1> Hero </h1>
            </div>

            <div>
               <h1>Nav sticky on scroll</h1>
            </div>
            <div>
               <h1>
                  Projects with scroll snapping and page changing on scroll
               </h1>
            </div>
         </main>

         <footer></footer>
      </div>
   );
};

export default Home;
