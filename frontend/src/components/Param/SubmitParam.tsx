



interface SubmitParamProps {
  onSubmit: (params: any) => void; // Callback function passed from ParamManager
}

export const SubmitParam : React.FC<SubmitParamProps> = ({ onSubmit })=> { 
    return (
      <>
      
        <button
        onClick={onSubmit}
        className="mb-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit Parameters
      </button>
      </>
    );
}

// // Handle form submission (bins and containers data)
//   const submitParams = async () => {
//     try {
//    // Map bins and containers to UploadParamDTO
//     const uploadParamDTOfromBinContainer: UploadParamDTO = mapDTO<any, UploadParamDTO>({
//       from: {
//         boxes: bins,  // Assuming bins are of type Box[]
//         containers: containers,  // Assuming containers are of type Item[]
//       }
//     }).transform((from) => {
//       // Map the `boxes` (bins) and `containers` (items) to the required UploadParamDTO format
//       const box:BoxDTO[] = from.boxes.map((bin: Bin) => ({
//         name: bin.name,
//         WHD: [bin.width, bin.length, bin.depth] as [number, number, number],  // Ensure it maps to the correct tuple format
//         weight: bin.maxWeight,
//         coner: bin.corner,
//         openTop: bin.put_type == true ? [0] : [1] ,
//       }));

//   const item: ItemDTO[] = from.containers.map((container: Container, index: number) => ({
//     name: container.name,
//     type: container.type == ItemType.CUBE ? 1 : 0,
//     WHD: [container.width, container.length, container.depth] as [number, number, number], // Map to a tuple for width, height, depth
//     weight: container.weight,
//     count: container.noContainers,
//     level: container.level,
//     loadbear: container.loadbear,
//     updown: container.updown,
//     color: index,
//   }));

//       const res: UploadParamDTO = {
//         box,
//         item,
//         binding: [], // assuming binding remains an empty array, adjust if needed
//       };
//       return res;
//     });



//   const response = await fetch("http://192.168.0.103:3001", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json", // Ensure you're sending JSON data
//     },
//     body: JSON.stringify(uploadParamDTOfromBinContainer), // Convert your request body to JSON
//   });

//       if (!response.ok) {
//         throw new Error("First API failed");
//       }

//       const data:Response  = await response.json();
//       //map data back to types


//       // If both APIs succeed, update state
//     } catch (error) {
//     } 
//   };
