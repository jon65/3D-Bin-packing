import { useParamContext } from "@/components/contexts/ParamContext";




export const AddBin = () => { 
  const { bins, addBin } = useParamContext();

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

