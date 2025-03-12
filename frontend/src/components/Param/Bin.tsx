import { FC } from "react";

export const Bin: FC<{
  name: string;
  depth: number;
  width: number;
  length: number;
  noBins: number;
  onChange:  (e: React.ChangeEvent<HTMLInputElement>) => void; 
}> = ({ name, depth, width, length, noBins, onChange}) => { 
    //need to store state for number of bin / width of bin
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
            value={noBins}
            onChange={ onChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of bins"
          />
        </div>
    </div>
    );
}