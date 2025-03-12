import { useState } from "react";

const Container = () => {
  

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
            value={bins}
            onChange={handleBinsChange} // Attach onChange handler here
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of bins"
          />
        </div>
    </div>
  );
};

export default Container;
