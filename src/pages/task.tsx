import { IoAddSharp } from "react-icons/io5";
import Link from "next/link";
import { Header } from "~/components/ui/Header";
import { TaskChilde } from "~/components/task/Task";
import { useCustomQuery } from "~/hook/useTodosQuery";
import { getTaskRequest } from "../../store/apiTodo";

const Task = () => {
  const {
    data: tasks,
    isLoading,
    isError,
  } = useCustomQuery(getTaskRequest, "tasks");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  if (!Array.isArray(tasks)) {
    return <div>Tasks is not an array</div>;
  }

  return (
    <div className="bg-[#4b395d] min-h-screen">
      <Header title="Daily Routine" />
      <div className="pt-[5rem] px-4">
        <TaskChilde task={tasks} />
        <div className="fixed bottom-[3rem] right-[3rem] z-10">
          <Link
            href="/task/create"
            className="task w-[4rem] h-[4rem] rounded-[50%] flex items-center justify-center"
          >
            <IoAddSharp size={21} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task;
