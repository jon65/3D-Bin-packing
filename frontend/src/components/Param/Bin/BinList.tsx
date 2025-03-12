import { BinForm } from "./BinForm";
import { useParamContext } from "../ParameterManager";


export const BinList = () => {
    const { bins, updateBin, deleteBin } = useParamContext();

    return (
        <div>
            {bins.map((bin, index) => (
                <BinForm key={index} maxWeight={bin.maxWeight} corner={bin.corner} onChange={updateBin} name={bin.name} length={bin.length} width={bin.width} depth={bin.depth} noBins={bin.noBins} index={index} onDelete={deleteBin} put_type={bin.put_type} />
            ))}
        </div>
    );
}

