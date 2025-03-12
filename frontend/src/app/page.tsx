"use client"
import Image from "next/image";
import { Dropdown } from "@/components/Dropdown";
// pages/index.tsx
import { useState } from "react";  // Import useState from React
import { ParameterInputForm } from "@/components/ParameterInputForm";
import { Bin } from "@/components/Param/Bin/BinForm";
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

  };
  
  return (
    <div className="p-6">
      <ParamManager />
        <div>
          dsa
        </div>
      </div>
  );
}
