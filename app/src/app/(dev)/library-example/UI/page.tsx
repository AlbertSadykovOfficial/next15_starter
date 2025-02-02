"use client";
import { useState } from "react";
import UIButton from "@/components/UI/Button";
import { InputWrapper, TextInput } from "@/components/UI/Fields";

export default function LibExampleUI() {
  const [name, setName] = useState("");

  return (
    <div>
      <UIButton>Hello</UIButton>
      <UIButton />
      <InputWrapper label="Имя">
        <TextInput
          value={name}
          inputEvent={(v) => setName(v)}
          placeholder="Имя"
        />
      </InputWrapper>
      <div>Имя: {name}</div>
    </div>
  );
}
