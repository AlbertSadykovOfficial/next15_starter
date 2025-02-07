import {
  increaseCounter,
  decreaseCounter,
} from "@/store/features/counter/counterSlice";
import { useAppDispatch } from "@/store/hooks";
import UIButton from "@/components/UI/Button";

const CountUpdater = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-4 border border-1 border-black p-20">
      <UIButton onClick={() => dispatch(decreaseCounter())}>-</UIButton>
      <UIButton onClick={() => dispatch(increaseCounter())}>+</UIButton>
    </div>
  );
};
export default CountUpdater;
