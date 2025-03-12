import { useState } from "react";
import { useParamContext } from "../ParameterManager";

const ContainerList = () => {
  // State to hold the containers
  const { containers } = useParamContext();


  return (

      <div className="mt-4">
        {/* Render the list of containers */}
        {containers.map((container, index) => (
          <div
            key={index}
            className="border p-4 mb-2 rounded-md bg-gray-100"
          >
            {container.depth}
          </div>
        ))}
      </div>
  );
};

export default ContainerList;
