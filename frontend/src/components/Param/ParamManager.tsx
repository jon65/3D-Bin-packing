'use client'
import { FC, } from "react";
import { AddBin } from "./Bin/AddBin";
import { BinList } from "./Bin/BinList";
import AddContainer from "./Container/AddContainer";
import ContainerList from "./Container/ContainerList";
import { SubmitParam } from "./SubmitParam";
import { ParamProvider } from "../contexts/ParamContext";


// Define the type for the onSubmit prop, which will be passed down to SubmitParam
interface ParamManagerProps {
  onSubmit: (params: any) => void; // The callback function to be triggered on form submit
}

export const ParamManager: FC<ParamManagerProps> = ({ onSubmit}) => { 


    return (
        <ParamProvider>
            <BinList />
            <AddBin />
            <ContainerList />
            <div>
            <AddContainer />
            </div>
            <SubmitParam onSubmit={ onSubmit} />
        </ParamProvider>
    );
}