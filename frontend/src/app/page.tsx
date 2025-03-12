import Image from "next/image";
import { Dropdown } from "@/components/Dropdown";
// pages/index.tsx
import { ParameterInputForm } from "@/components/ParameterInputForm";
import { ParamManager } from "@/components/Param/ParamManager";
import { ChartLayout } from "@/components/chart/ChartLayout";

export default function Home() {



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
