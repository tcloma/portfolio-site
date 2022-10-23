import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import headshot from "/public/fish.png";
import ProjectShowcase from "../components/ProjectShowcase";
import { projectData } from "../public/projectData";
import { useState } from "react";

const Home: NextPage = () => {
   // Colorizing nav bar
   const [section, setSection] = useState("about");

   return (
      <main className="page">
         <Head>
            <title>Portfolio Website</title>
            <meta name="author" content="Tyrone Cloma" />
            <meta name="description" content="Personal Portfolio Website" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <section className="slide">
            <div>
               <h1 className="text-7xl"> Tyrone Cloma </h1>
               <h3 className="text-2xl text-yellow-300"> Software Engineer </h3>
            </div>
            <Image src={headshot} alt="headshot" width={250} height={250} />
         </section>

         <nav className="sticky top-0 flex w-full justify-start gap-2 border-b-2 bg-gray-700 p-4">
            <a href="#about"> About </a>
            <a href="#projects"> Projects </a>
            <a href="#socials"> Socials </a>
         </nav>

         <section id="about" className="slide h-96">
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Cupiditate accusantium ut in odit corrupti explicabo quidem sit
               voluptate, esse ducimus. Dolorum rem ut optio ea doloremque est
               laborum totam sit.
            </p>
         </section>

         <section id="projects" className="flex min-w-full flex-col">
            {projectData.map((project, index) => {
               return <ProjectShowcase key={index} projectData={project} />;
            })}
         </section>

         <section id="socials">
            <div>
               <button> Github </button>
               <button> Twitter </button>
            </div>
            <div>
               <button> LinkedIn </button>
               <button> Resume </button>
            </div>
         </section>
      </main>
   );
};

export default Home;
