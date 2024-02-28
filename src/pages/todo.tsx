import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import Link from "next/link";
import { Todos } from "~/components/todo/Todos";
import { Input } from "~/components/ui/input";
import { useCustomQuery } from "~/hook/useTodosQuery";
import { getTodoRequest } from "../../store/apiTodo";

const Todo = () => {
  const [filter, setFilter] = useState<string>("");
  const {
    data: todos,
    isLoading,
    isError,
  } = useCustomQuery(getTodoRequest, "todos");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const filteredTasks = Array.isArray(todos)
    ? todos.filter(
        (task) =>
          task.title &&
          task.title.toLowerCase().includes(filter?.toLowerCase() ?? "")
      )
    : [];

  return (
    <div className="bg-[#4b395d] min-h-screen">
      <header className="task fixed w-[100%] h-[10vh] flex items-center justify-between px-[3rem]">
        <h2 className="text-[1.5rem] text-[600] text-white flex items-center">
          Shopping list
        </h2>

        <Input
          type="text"
          placeholder="Filter by title..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-[30vw]"
        />
        <Link
          href="/"
          className="text-white cursor-pointer transition-colors duration-700 hover:text-[red]"
        >
          HOME
        </Link>
      </header>

      <div className="pt-[5rem]">
        <Todos todos={filteredTasks} />
      </div>

      <div className="fixed bottom-[3rem] right-[3rem] z-10">
        <Link
          href="/todo/create"
          className="task w-[4rem] h-[4rem] rounded-[50%] flex items-center justify-center"
        >
          <IoAddSharp size={21} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default Todo;
