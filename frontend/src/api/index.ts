import { Box } from "@/components/types/PackingType";
import { Bin, Container } from "@/components/types/ParamType";


// Define the return types for three separate values
interface UploadParamResponse {
  box?: Bin;
  fitItems: Container[];
  unFitItems?: Container[];
}

export const uploadParam = async (): Promise<UploadParamResponse> => {
  try {
    const response = await fetch("http://example.com/api"); // Replace with your API endpoint
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Map the response data into fitItems and unFitItems
    const fitItems: Container[] = data.data.fitItem.map((item: any) => ({
      name: item.name,
      partNumber: item.partNumber,
      weight: item.weight,
      color: item.color,
      position: item.position,
      type: item.type,
      rotationType: item.rotationType,
      WHD: item.WHD,
    }));

    const unFitItems: Container[] = data.data.unfitItem.map((item: any) => ({
      name: item.name,
      partNumber: item.partNumber,
      weight: item.weight,
      color: item.color,
      position: item.position,
      type: item.type,
      rotationType: item.rotationType,
      WHD: item.WHD,
    }));

    return {
      fitItems,
      unFitItems,
    };

  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error in fetching data");
  }
};
