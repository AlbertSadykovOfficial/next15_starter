import UIButton from "@/components/UI/Button";
import {counterStore} from "@/store/features/counter";
const TodoUpdater = ({ store }) => {
  const onNewTodo = () => {
    store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
  return (
    <div>
      <UIButton onClick={() => onNewTodo()}>Add</UIButton>
    </div>
  )
}

export default TodoUpdater