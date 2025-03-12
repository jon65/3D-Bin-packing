import React, { createContext, useContext, useState } from 'react';
import { Bin, Container, ItemType } from './type';

// Define types for bin and container data

// Define the type for the context's value
interface ParamContext {
  bins: Bin[];
  containers: Container[];
  addBin: () => void;
  addContainer: () => void;
  updateBin: (index: number, updatedBin: Bin) => void;
  updateContainer: (index: number, updatedContainer: Container) => void;
  submitParams: () => void;
  deleteBin: (index: number) => void;
}
interface Props {
  children: React.ReactNode;
}

// Create the context with default values
const ParamContext = createContext<ParamContext | undefined>(undefined);

// ParamProvider component, which now automatically handles `children` through `React.FC`
export const ParamProvider: React.FC<Props>  = ({ children }) => {
  const [bins, setBins] = useState<Bin[]>([]);
  const [containers, setContainers] = useState<Container[]>([]);

  // Add a new bin
  const addBin = () => {
    setBins([...bins, { name: '', depth: 0, width: 0, length: 0, noBins: 0, maxWeight: 0, corner: 0, put_type: false}]);
  };

  // Update a bin at a specific index
  const updateBin = (index: number, updatedBin: Bin) => {
    const newBins = [...bins];
    newBins[index] = updatedBin;
    setBins(newBins);
  };

  const deleteBin = (index: number) => { 
    const updatedBins = bins.filter((_, binIndex) => (binIndex !== index));
    setBins(updatedBins);
  }

  // Add a new container
  const addContainer = () => {
    setContainers([...containers, {
      name: '', weight: 0,
      type: ItemType.CUBE,
      depth: 0,
      width: 0,
      length: 0,
      noContainers: 0,
      level: 0,
      loadbear: 0,
      updown: false
    }]);
  };

  // Update a container at a specific index
  const updateContainer = (index: number, updatedContainer: Container) => {
    const newContainers = [...containers];
    newContainers[index] = updatedContainer;
    setContainers(newContainers);
  };

  // Handle form submission (bins and containers data)
  const submitParams = () => {
    console.log('Submitting params:', { bins, containers });
    // Send data to an API or handle form submission here
  };

  return (
    <ParamContext.Provider
      value={{
        bins,
        containers,
        addBin,
        addContainer,
        updateBin,
        updateContainer,
        submitParams,
        deleteBin
      }}
    >
      {children} {/* Render children */}
    </ParamContext.Provider>
  );
};

// Custom hook to access the context
export const useParamContext = () => {
  const context = useContext(ParamContext);
  if (!context) {
    throw new Error('useParamContext must be used within a ParamProvider');
  }
  return context;
};
