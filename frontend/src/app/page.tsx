"use client"
import Image from "next/image";
import { Dropdown } from "@/components/Dropdown";
// pages/index.tsx
import { useState } from "react";  // Import useState from React
import { ParameterInputForm } from "@/components/ParameterInputForm";
import { Bin } from "@/components/Param/BinForm";
import { ParamManager } from "@/components/Param/ParamManager";



export default function Home() {

  const [dataOption, setDataOption] = useState<string>("Input parameters");
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataOption(e.target.value);
  };

  // Handle the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Collect the form data from the input states
    console.log("Form Data Submitted:", {
      bins: formData.bins,
      binHeight: formData.binHeight,
      binWidth: formData.binWidth,
      binDepth: formData.binDepth,
      binLength: formData.binLength,
    });

    // You can update state or perform other actions with the form data here
    setFormData({
      bins: formData.bins,
      binHeight: formData.binHeight,
      binWidth: formData.binWidth,
      binDepth: formData.binDepth,
      binLength: formData.binLength,
    });
  };
  
  return (
    <div className="p-6">
      <ParamManager />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Dropdown label="Upload Option" elements={["Input parameters", "Upload CSV parameter file"]} value={dataOption} onChange={handleChange} />
          {dataOption == "Input parameters" ? 
            <ParameterInputForm onSubmit={handleSubmit} />
            :
            <div>
              ds
            </div>
        }
        </div>
        <div>
          dsa
        </div>
      </div>
    </div>
  );
}
