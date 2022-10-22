import { FC } from "react";

interface IProps {
   item: string;
}

const TechChip: FC<IProps> = ({ item }) => {
   return (
      <div className="rounded-md border-2 py-1 px-2">
         <h1> {item} </h1>
      </div>
   );
};

export default TechChip;
