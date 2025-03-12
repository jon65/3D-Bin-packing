import { FC } from "react";
import { Bin } from "./type";
// Define Bin type interface (for reference)


interface BinProps {
  name: string;
  depth: number;
  width: number;
  length: number;
  noBins: number;
  onChange: (index: number, updatedBin: Bin) => void;
  onDelete: (index: number) => void;
  index: number;
}

export const BinForm: FC<BinProps> = ({ name, depth, width, length, noBins, onChange, index }) => {
  // Handle input changes for each field
  const handleInputChange = (field: keyof Bin, value: string) => {
    // Convert value to the appropriate type (e.g., number for depth, width, length, and noBins)
    const updatedValue = field === 'name' ? value : parseFloat(value);
    const updatedBin = { name, depth, width, length, noBins, [field]: updatedValue };

    // Call the onChange function passed via props to update the parent state
    onChange(index, updatedBin);
  };

  return (
    <div className="items-center min-h-screen mb-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium">
          Bin Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter bin name"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="depth" className="block text-gray-700 font-medium">
          Depth
        </label>
        <input
          type="number"
          id="depth"
          min="0"
          value={depth}
          onChange={(e) => handleInputChange('depth', e.target.value)}
          className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter bin depth"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="width" className="block text-gray-700 font-medium">
          Width
        </label>
        <input
          type="number"
          id="width"
          min="0"
          value={width}
          onChange={(e) => handleInputChange('width', e.target.value)}
          className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter bin width"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="length" className="block text-gray-700 font-medium">
          Length
        </label>
        <input
          type="number"
          id="length"
          min="0"
          value={length}
          onChange={(e) => handleInputChange('length', e.target.value)}
          className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter bin length"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="noBins" className="block text-gray-700 font-medium">
          Number of Bins
        </label>
        <input
          type="number"
          id="noBins"
          min="1"
          value={noBins}
          onChange={(e) => handleInputChange('noBins', e.target.value)}
          className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter number of bins"
        />
      </div>
    </div>
  );
};
