import { FC, } from "react";
import { AddBin } from "./AddBin";
import { ParamProvider } from "./ParameterManager";
import { useParamContext } from './ParameterManager'; // Adjust the path
import { BinList } from "./BinList";


export const ParamManager = () => { 


    return (
        <ParamProvider>
            <AddBin />
            <BinList/>
        </ParamProvider>
    );
}