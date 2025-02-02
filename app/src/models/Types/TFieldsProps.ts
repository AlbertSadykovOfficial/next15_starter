import type { TChildren } from "@/models/Types/TChildren";

export type TFieldsMainProps = {
  value: string;
  inputEvent: (value: string) => void;
};

export type TFieldsAdditionalProps = {
  type?: "text" | "number";
  method?: string;
  placeholder?: string;
  required?: boolean;
};
export type TFieldsProps = TFieldsMainProps & TFieldsAdditionalProps;

export type TFieldWrapperProps = TChildren & {
  label: string;
  classes?: string;
};
