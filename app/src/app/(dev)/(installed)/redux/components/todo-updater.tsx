import { todoAdded } from "@/store/features/todos/todosSlice";
import { useAppDispatch } from "@/store/hooks";
import UIButton from "@/components/UI/Button";

const ToDoUpdater = () => {
  const dispatch = useAppDispatch();
  const addItem = () => {
    dispatch(
      todoAdded({
        id: String(Math.ceil(Math.random() * 100)),
        text: "Text",
        completed: false,
      }),
    );
  };
  return (
    <div className="flex gap-4 border border-1 border-black p-20">
      <UIButton onClick={() => addItem()}>Add</UIButton>
    </div>
  );
};
export default ToDoUpdater;
