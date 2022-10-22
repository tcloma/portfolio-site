import { FC } from "react";
import Image from "next/future/image";
import TechChip from "./TechChip";
import projectPreview from "/public/fish.png";

interface IProps {}

const ProjectShowcase: FC<IProps> = () => {
   const exTechArr = ["React", "TypeScript", "TailwindCSS"];

   return (
      <article className="slide min-h-max p-10">
         <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-evenly border-t-2 p-2">
               <button> Preview </button>
               <button> Demo </button>
            </div>
            <Image
               src={projectPreview}
               alt="project preview"
               width={400}
               height={600}
            />
         </div>
         <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-red-400"> Project title</h1>
            <div className="flex flex-row gap-2">
               {exTechArr.map((item, index) => {
                  return <TechChip key={index} item={item} />;
               })}
            </div>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               <br />
               Cupiditate accusantium ut in odit corrupti explicabo quidem
               <br />
               sit voluptate, esse ducimus. Dolorum rem ut optio ea
               <br />
               doloremque est laborum totam sit.
            </p>
         </div>
      </article>
   );
};

export default ProjectShowcase;
