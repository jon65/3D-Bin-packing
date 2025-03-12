import { FC, } from "react";
import { AddBin } from "./Bin/AddBin";
import { ParamProvider } from "./ParameterManager";
import { useParamContext } from './ParameterManager'; // Adjust the path
import { BinList } from "./Bin/BinList";
import AddContainer from "./Container/AddContainer";
import ContainerList from "./Container/ContainerList";


export const ParamManager = () => { 


    return (
        <ParamProvider>
            <AddBin />
            <BinList />
            <AddContainer />
            <ContainerList />
        </ParamProvider>
    );
}