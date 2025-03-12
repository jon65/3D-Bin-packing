import { useState } from "react";

const AddContainer = () => {
  // State to hold the containers
  const [containers, setContainers] = useState<string[]>([]);

  // Handle adding a new container
  const addContainer = () => {
    setContainers((prevContainers) => [
      ...prevContainers, // Copy the existing containers
      `Container ${prevContainers.length + 1}`, // Add a new container
    ]);
  };

  return (
    <div>

      <div className="mt-4">
        {/* Render the list of containers */}
        {containers.map((container, index) => (
          <div
            key={index}
            className="border p-4 mb-2 rounded-md bg-gray-100"
          >
            {container}
          </div>
        ))}
      </div>
      <button
        onClick={addContainer}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        Add Container
      </button>
    </div>
  );
};

export default AddContainer;
