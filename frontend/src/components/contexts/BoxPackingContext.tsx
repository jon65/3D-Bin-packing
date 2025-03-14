import React, { createContext, useContext, useState, ReactNode } from "react";


// Define the types for your context state
interface BoxPackingContextType {
  formData: any; // Change `any` to the type for your form data
  setFormData: (data: any) => void;
}

