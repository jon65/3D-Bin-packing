"use client"
import Image from "next/image";
import { Dropdown } from "@/components/Dropdown";
// pages/index.tsx
import { useState } from "react";  // Import useState from React
import { ParameterInputForm } from "@/components/ParameterInputForm";
import { ParamManager } from "@/components/Param/ParamManager";
import { ChartLayout } from "@/components/chart/ChartLayout";



export default function Home() {

  const [dataOption, setDataOption] = useState<string>("Input parameters");
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataOption(e.target.value);
  };

  // Handle the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };
  // Example boxes


  return (
<div className="p-6 grid grid-cols-5 gap-6">
  <div className="col-span-2">
    <ParamManager />
  </div>
  <div className="col-span-3">
        <ChartLayout />
  </div>
</div>


  );
}
