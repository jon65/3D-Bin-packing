import { BinForm } from "./BinForm";
import { useParamContext } from "./ParameterManager";


export const BinList = () => {
    const { bins, updateBin } = useParamContext();

    return (
        <div>
            {bins.map((bin, index) => (
                <BinForm key={index} onChange={updateBin} name={bin.name} length={bin.length} width={bin.width} depth={bin.depth} noBins={bin.noBins} index={index} onDelete={ } />
            ))}
        </div>
    );
}

