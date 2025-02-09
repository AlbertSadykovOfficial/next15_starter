"use client"
import { observer } from "mobx-react";
import { counterStore } from "@/store/features/counter/";

const CountViewer = observer(() => {
  return (
    <div>
      <p>Count MobX: {counterStore.count}</p>
    </div>
  );
});
export default CountViewer;