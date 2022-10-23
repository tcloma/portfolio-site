import { FC, useState } from "react";
import Image from "next/future/image";
import TechChip from "./TechChip";
import projectPreview from "/public/fish.png";
import demoPreview from "/public/placeholder.png";
import { IProjData } from "../public/projectData";

interface IProps {
   projectData: IProjData;
}

const ProjectShowcase: FC<IProps> = ({ projectData }) => {
   const { title, stack, description, previewLink, demoLink } = projectData;
   const [showDemo, setShowDemo] = useState(false);

   return (
      <article className="slide min-h-max p-10">
         <div className="flex w-1/3 flex-col gap-2">
            <div className="flex flex-row justify-evenly border-t-2 p-2">
               <button onClick={() => setShowDemo(false)}> Preview </button>
               <button onClick={() => setShowDemo(true)}> Demo </button>
            </div>
            {showDemo ? (
               <Image
                  src={demoPreview}
                  alt="project demo"
                  width={400}
                  height={600}
               />
            ) : (
               <Image
                  src={projectPreview}
                  alt="project preview"
                  width={400}
                  height={600}
               />
            )}
         </div>
         <div className="flex w-2/3 flex-col gap-2">
            <h1 className="text-4xl text-red-400">{title}</h1>
            <div className="flex flex-row gap-2">
               {stack.map((item, index) => {
                  return <TechChip key={index} item={item} />;
               })}
            </div>
            <p>{description}</p>
         </div>
      </article>
   );
};

export default ProjectShowcase;
