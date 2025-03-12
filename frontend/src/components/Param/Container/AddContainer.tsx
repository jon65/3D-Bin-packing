import { useState } from "react";
import { useParamContext } from "../ParameterManager";

const AddContainer = () => {
  // State to hold the containers
  const { containers, addContainer } = useParamContext();

  return (
    <>
      <button
        onClick={addContainer}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        Add Container
      </button>
    </>
  );
};

export default AddContainer;
