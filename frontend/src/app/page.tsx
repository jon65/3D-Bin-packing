import { FC } from "react";
import { ParamManager } from "@/components/Param/ParamManager";
import { ChartLayout } from "@/components/chart/ChartLayout";
import { ParamProvider } from "@/components/contexts/ParamContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

export default function Home() {
  // Function to handle the submit action
  const handleFormSubmit = (params: any) => {
    console.log("Form Submitted with params:", params);

    // Send the params directly to the ChartLayout without using state
    // This will pass the data to the chart visualization component
    renderChart(params);
  };

  // Function to render the chart with submitted data
  const renderChart = (data: any) => {
    // Here you can use the data to update the visualization
    console.log("Rendering chart with data:", data);
  };

  return (
    <div className="p-6 grid grid-cols-5 gap-6">
      <QueryClientProvider client={ queryClient}>
      <ParamProvider>
        <div className="col-span-2">
          {/* Pass the handleFormSubmit function to ParamManager */}
          <ParamManager onSubmit={handleFormSubmit} />
        </div>

        <div className="col-span-3">
          {/* ChartLayout will now directly receive the data through renderChart */}
          <ChartLayout />
        </div>
      </ParamProvider>
      </QueryClientProvider>
    </div>
  );
}
