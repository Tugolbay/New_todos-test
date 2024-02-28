import { ITodo } from "../../../types/task";
import { TodoChilde } from "./TodosChilde";

export const Todos = ({ todos }: { todos: ITodo[] }) => {
  return (
    <div>
      {todos.map((element) => (
        <TodoChilde key={element.id} todo={element} />
      ))}
    </div>
  );
};
