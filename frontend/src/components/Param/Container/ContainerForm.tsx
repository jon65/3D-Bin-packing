import { FC, useState } from "react";
import { Container, ItemType } from "../type";

interface ContainerProp {
  name: string;
  depth: number;
  width: number;
  length: number;
  weight: number;
  type: ItemType;
  noContainers: number;
  level: number;
  loadbear: number;
  updown: boolean;
  onChange: (index: number, updatedContainer: Container) => void;
  onDelete: (index: number) => void;
  index: number;
}
const ContainerForm: FC<ContainerProp> = ({ name, depth, width, length, weight, type, noContainers, level, index, loadbear, updown, onChange, onDelete}) => {
  
  const handleInputChange = (field: keyof Container, value: any) => {
    // Ensure all required fields are included in the updated container object
    const updatedContainer: Container = {
      ...{ name, depth, width, length, noContainers, type, level, weight, loadbear, updown },
      [field]: value,
    };

    // Call the onChange function with the updated container
    onChange(index, updatedContainer);
  };



  return (
    <div className="items-center min-h-screen">
        <div>
          <label htmlFor="bins" className="block text-gray-700 font-medium">
            Number of Containers
          </label>
          <input
            type="number"
            min="1"
            id="bins"
          name="bins"
          value={ noContainers}
            onChange={(e) => handleInputChange('noContainers', e.target.value)} // Attach onChange handler here
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of bins"
          />
        </div>
    </div>
  );
};

export default ContainerForm;
