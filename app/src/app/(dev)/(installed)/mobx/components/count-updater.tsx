"use client"
import { counterStore } from "@/store/features/counter";
import UIButton from "@/components/UI/Button";
const CountUpdater = () => {
  return (
    <div>
      <UIButton onClick={() => counterStore.decrement()}>-</UIButton>
      <UIButton onClick={() => counterStore.increment()}>+</UIButton>
    </div>
  );
};
export default CountUpdater;