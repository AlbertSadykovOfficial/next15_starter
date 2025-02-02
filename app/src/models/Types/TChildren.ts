import type { ReactNode } from "react";
import type { IEmptyOptions } from "@/models/Interfaces/IEmptyOptions";

export type TWithChildren = {
  children: ReactNode;
};

export type TWithoutChildren = IEmptyOptions;
export type TChildren = TWithChildren | TWithoutChildren;
