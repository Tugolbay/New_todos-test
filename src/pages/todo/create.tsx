import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Style from "~/styles/style";
import { createTodo } from "../../../store/apiTodo";
import useCreateTodo from "~/hook/useTodosQuery";

const CreateTodo = () => {
  const router = useRouter();

  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const [newDescValue, setNewDescValue] = useState<string>("");

  const handleSubmitCreateTodo = useCreateTodo(createTodo, ["todos"]);

  const handleAddTodo = () => {
    const tododata = {
      id: uuidv4(),
      title: newTaskValue,
      description: newDescValue,
    };
    router.back();
    handleSubmitCreateTodo(tododata);
  };

  return (
    <div className="create">
      <div className="absolute t-[50%] l-[50%] z-50 transform -translate-x-[-75%] -translate-y-[-70%]">
        <form className="flex flex-col justify-center gap-4 bg-[#373bb6] w-[40vw] h-[40vh] px-[3rem] rounded-lg">
          <h1 className="text-white">Add New todo</h1>
          <Input
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
            type="text"
            placeholder="Title..."
          />
          <Input
            value={newDescValue}
            onChange={(e) => setNewDescValue(e.target.value)}
            type="text"
            placeholder="Description..."
          />
          <div className="flex gap-8">
            <Link href="/todo">
              <Button className="bg-[#3f44d1] w-[8rem]">Close</Button>
            </Link>
            <Button
              className="bg-[#3f44d1]"
              type="button"
              onClick={handleAddTodo}
            >
              Add New Task
            </Button>
          </div>
        </form>
      </div>
      <Style />
    </div>
  );
};

export default CreateTodo;
