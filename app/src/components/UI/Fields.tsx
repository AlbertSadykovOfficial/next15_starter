"use client";
import { useInput } from "@/hooks/useInput";
import { useEffect } from "react";
import type {
  TFieldsProps,
  TFieldWrapperProps,
} from "@/models/Types/TFieldsProps";

export function TextInput({
  value,
  inputEvent = (f) => f,
  type = "text",
  placeholder = "",
  required = false,
}: TFieldsProps) {
  const [text, bind] = useInput(value);

  useEffect(() => {
    inputEvent(text);
  }, [text]);

  return (
    <input
      {...bind}
      type={type}
      placeholder={placeholder}
      required={required}
      className="py-3 px-4 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-orange-400 focus:outline-none focus:ring focus:ring-1 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-orange-300"
    />
  );
}

export function InputWrapper(props: TFieldWrapperProps) {
  return (
    <div className={"form-control w-full max-w-xs" + props.classes}>
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <div>{"children" in props ? props.children : ""}</div>
    </div>
  );
}
