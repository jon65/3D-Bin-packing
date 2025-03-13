'use client'
import React, { createContext, useContext, useState } from 'react';
import { Bin, Container, ItemType } from './type';
import { useQuery } from '@tanstack/react-query';
import { mapDTO } from '../utils/mapper';
import { Box } from '../chart/type';
import { BoxDTO, ItemDTO, UploadParamDTO } from '../utils/uploadParamDTO';
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
  const submitParams = async () => {
    try {
   // Map bins and containers to UploadParamDTO
    const uploadParamDTOfromBinContainer: UploadParamDTO = mapDTO<any, UploadParamDTO>({
      from: {
        boxes: bins,  // Assuming bins are of type Box[]
        containers: containers,  // Assuming containers are of type Item[]
      }
    }).transform((from) => {
      // Map the `boxes` (bins) and `containers` (items) to the required UploadParamDTO format
      const box:BoxDTO[] = from.boxes.map((bin: Bin) => ({
        name: bin.name,
        WHD: [bin.width, bin.length, bin.depth] as [number, number, number],  // Ensure it maps to the correct tuple format
        weight: bin.maxWeight,
        coner: bin.corner,
        openTop: bin.put_type == true ? [0] : [1] ,
      }));

  const item: ItemDTO[] = from.containers.map((container: Container, index: number) => ({
    name: container.name,
    type: container.type == ItemType.CUBE ? 1 : 0,
    WHD: [container.width, container.length, container.depth] as [number, number, number], // Map to a tuple for width, height, depth
    weight: container.weight,
    count: container.noContainers,
    level: container.level,
    loadbear: container.loadbear,
    updown: container.updown,
    color: index,
  }));

      const res: UploadParamDTO = {
        box,
        item,
        binding: [], // assuming binding remains an empty array, adjust if needed
      };
      return res;
    });



  const response = await fetch("http://example.com/api1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Ensure you're sending JSON data
    },
    body: JSON.stringify(uploadParamDTOfromBinContainer), // Convert your request body to JSON
  });

      if (!response.ok) {
        throw new Error("First API failed");
      }

      // After the first API call succeeds, call the second API
      const secondResponse = await fetch("http://example.com/api2", { method: "POST" });

      if (!secondResponse.ok) {
        throw new Error("Second API failed");
      }

      // If both APIs succeed, update state
    } catch (error) {
    } 
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
