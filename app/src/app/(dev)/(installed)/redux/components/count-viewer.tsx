import React from "react";
import { useAppSelector } from "@/store/hooks";

const CountViewer = () => {
  const countState = useAppSelector((state) => state.counter.counter);
  return (
    <div className="flex gap border border-1 border-black p-20">
      Counter: {countState}
    </div>
  );
};
export default CountViewer;
