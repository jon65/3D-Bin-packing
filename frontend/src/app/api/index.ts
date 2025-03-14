import { Box } from "@/components/types/PackingType";
import { Bin, Container } from "@/components/types/ParamType";
import { UploadParamDTO } from "@/components/utils/uploadParamDTO";

interface UploadParamResponse {
  box?: Bin;
  fitItems: Container[];
  unFitItems?: Container[];
}

// Altered uploadParam to send data (POST request)
export const uploadParam = async (params: UploadParamDTO): Promise<UploadParamResponse> => {
  try {
    const response = await fetch("http://example.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure you're sending JSON data
      },
      body: JSON.stringify(params), // Pass the parameters you want to upload in the request body
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to upload data");
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
    throw new Error("Error in uploading data");
  }
};
