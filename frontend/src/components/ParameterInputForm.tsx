import { FC, useState } from "react";
import AddContainer from "./AddContainer";

export const ParameterInputForm: FC<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ onSubmit }) => {
  // Create state for each input field
  const [bins, setBins] = useState<number | string>(""); // For Number of Bins
  const [binHeight, setBinHeight] = useState<number | string>(""); // For Height of Bin
  const [binWidth, setBinWidth] = useState<number | string>(""); // For Width of Bin
  const [binDepth, setBinDepth] = useState<number | string>(""); // For Depth of Bin
  const [binLength, setBinLength] = useState<number | string>(""); // For Length of Bin

  // Handle onChange for number of bins
  const handleBinsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBins(e.target.value);
  };

  // Handle onChange for bin height
  const handleBinHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBinHeight(e.target.value);
  };

  // Handle onChange for bin width
  const handleBinWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBinWidth(e.target.value);
  };

  // Handle onChange for bin depth
  const handleBinDepthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBinDepth(e.target.value);
  };

  // Handle onChange for bin length
  const handleBinLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBinLength(e.target.value);
  };

    
  return (
    <div className="items-center min-h-screen">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="bins" className="block text-gray-700 font-medium">
            Number of Bins
          </label>
          <input
            type="number"
            min="1"
            id="bins"
            name="bins"
            value={bins}
            onChange={handleBinsChange} // Attach onChange handler here
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of bins"
          />
        </div>

        <div>
          <label htmlFor="bin-height" className="block text-gray-700 font-medium">
            Height of bin
          </label>
          <input
            type="number"
            min="1"
            id="bin-height"
            name="bin-height"
            value={binHeight}
            onChange={handleBinHeightChange} // Attach onChange handler here
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>

        <div>
          <label htmlFor="bin-width" className="block text-gray-700 font-medium">
            Width of bin
          </label>
          <input
            type="number"
            min="1"
            id="bin-width"
            name="bin-width"
            value={binWidth}
            onChange={handleBinWidthChange} // Attach onChange handler here
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>

        <div>
          <label htmlFor="bin-depth" className="block text-gray-700 font-medium">
            Depth of bin
          </label>
          <input
            type="number"
            min="1"
            id="bin-depth"
            name="bin-depth"
            value={binDepth}
            onChange={handleBinDepthChange} // Attach onChange handler here
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>

        <div>
          <label htmlFor="bin-length" className="block text-gray-700 font-medium">
            Length of bin
          </label>
          <input
            type="number"
            min="1"
            id="bin-length"
            name="bin-length"
            value={binLength}
            onChange={handleBinLengthChange} // Attach onChange handler here
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>
        <AddContainer />
        <button type="submit" className="mt-4 p-3 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
