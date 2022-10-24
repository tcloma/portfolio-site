import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import headshot from "/public/placeholder_light.png";
import ProjectShowcase from "../components/ProjectShowcase";
import { projectData } from "../public/projectData";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Home: NextPage = () => {
   // Colorizing nav bar
   const [section, setSection] = useState("about");
   const nav = ["About", "Project", "Socials"];

   return (
      <main className="page">
         <Head>
            <title>Portfolio Website</title>
            <meta name="author" content="Tyrone Cloma" />
            <meta name="description" content="Personal Portfolio Website" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <section className="slide mt-10">
            <div>
               <h1 className="text-7xl font-semibold"> Tyrone Cloma </h1>
               <h3 className="text-2xl text-dYellow"> Software Engineer </h3>
            </div>
            <Image src={headshot} alt="headshot" width={600} height={800} />
         </section>

         <nav className="min-h-10 sticky top-0 flex min-w-full items-center justify-start border-b-2 bg-dBg">
            <a href="#about" className="navBtn">
               About
            </a>
            <a href="#projects" className="navBtn">
               Projects
            </a>
            <a href="#socials" className="navBtn">
               Socials
            </a>
         </nav>

         <section id="about" className="slide h-96">
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Cupiditate accusantium ut in odit corrupti explicabo quidem sit
               voluptate, esse ducimus. Dolorum rem ut optio ea doloremque est
               laborum totam sit. Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Reiciendis, quo maxime molestiae magnam magni
               tempora doloribus quas eaque nam sint labore minima unde omnis a
               reprehenderit natus doloremque dicta illo. Lorem ipsum, dolor sit
               amet consectetur adipisicing elit. Ratione aliquam veritatis a.
               Cum, rem laudantium laborum molestias et consequatur dolores eius
               iure ea delectus sunt ex officia perferendis suscipit quaerat.
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
