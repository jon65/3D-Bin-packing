import { mapDTO } from "./mapper";

export interface BoxDTO {
  name: string;
  WHD: [number, number, number];  // Tuple for width, height, depth
  weight: number;
  coner: number;
  openTop: number[];  // Array of openTop values (you can adjust if there's a specific range of values)
}

export interface ItemDTO {
  name: string;
  type: number;  // Assuming the type is an integer (e.g., 1 corresponds to a certain type)
  WHD: [number, number, number];  // Tuple for width, height, depth
  weight: number;
  count: number;
  level: number;
  loadbear: number;
  updown: boolean;  // Correcting 'True' to boolean (JavaScript uses `true/false`)
  color: number;  // Assuming color is represented by an integer (e.g., 1-5, etc.)
}

export interface UploadParamDTO {
  box: BoxDTO[];
  item: ItemDTO[];
  binding: any[];  // Assuming 'binding' is an array that can contain any type of object, you can refine it based on your actual needs
}
