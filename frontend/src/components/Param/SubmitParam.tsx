
import { useState } from 'react';
import { useParamContext } from './ParameterManager';



export const SubmitParam = () => { 
  const {  submitParams } = useParamContext();

    return (
      <>
      
        <button
        onClick={submitParams}
        className="mb-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit Parameters
      </button>
      </>
    );
}

