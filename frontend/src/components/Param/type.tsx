// types.ts (or wherever you define types)
export interface Bin {
  name: string;
  depth: number;
  width: number;
  length: number;
    noBins: number;
    maxWeight: number;
    put_type: boolean;
    corner: number;
}
export enum ItemType {
  CUBE = "cube",
  CYLINDER = "cylnder"
}

export interface Container {
  name: string;
  weight: number;
  type: ItemType;
    depth: number;
    width: number;
    length: number;
    noContainers: number;
    level: number;
    loadbear: number;
    updown: boolean;
}
