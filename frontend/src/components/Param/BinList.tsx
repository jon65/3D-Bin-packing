import { Bin } from "./Bin";
import { useParamContext } from "./ParameterManager";


export const BinList = () => {
    const { bins, updateBin } = useParamContext();

    return (
        <div>
            {bins.map((bin, index) => (
                <div key={ index}>
                    <Bin onChange={ updateBin} name={bin.name} length={0} width={6} depth={3} noBins={ 2} />
                </div>
            ))}
        </div>
    );
}

