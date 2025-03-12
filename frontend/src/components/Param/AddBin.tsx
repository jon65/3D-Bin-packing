
import { useParamContext } from './ParameterManager'; // Adjust the path
import { useState } from 'react';



export const AddBin = () => { 
  const { bins, addBin, updateBin } = useParamContext();

    return (
      <>
      
        <button
        onClick={addBin}
        className="mb-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Bin
      </button>
      </>
    );
}

