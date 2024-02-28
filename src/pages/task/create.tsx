import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Style from "../../styles/style";
import { addTask } from "../../../store/apiTodo";
import useCreateTodo from "~/hook/useTodosQuery";

const CreateTask = () => {
  const router = useRouter();

  const [dates, setDate] = useState<string>("");
  const [newDesc1, setNewDesc1] = useState<string>("");
  const [newDesc2, setNewDesc2] = useState<string>("");
  const [newDesc3, setNewDesc3] = useState<string>("");

  const handleSubmitCreateTodo = useCreateTodo(addTask, ["tasks"]);

  const handleAddTodo = () => {
    const tododata = {
      id: uuidv4(),
      date: dates,
      description1: newDesc1,
      description2: newDesc2,
      description3: newDesc3,
    };
    handleSubmitCreateTodo(tododata);
    router.back();
  };

  return (
    <div className="create">
      <div className="absolute t-[50%] l-[50%] z-50 transform -translate-x-[-75%] -translate-y-[-70%]">
        <form className="flex flex-col justify-center gap-4 bg-[#373bb6] w-[40vw] h-[42vh] px-[3rem] rounded-lg">
          <h1 className="text-white">Add New task</h1>
          <Input
            type="date"
            value={dates}
            onChange={(e) => setDate(e.target.value)}
          />

          <Input
            value={newDesc1}
            onChange={(e) => setNewDesc1(e.target.value)}
            placeholder="Description1..."
          />
          <Input
            value={newDesc2}
            onChange={(e) => setNewDesc2(e.target.value)}
            type="text"
            placeholder="Description2..."
          />
          <Input
            value={newDesc3}
            onChange={(e) => setNewDesc3(e.target.value)}
            placeholder="Description3..."
          />

          <div className="flex gap-8">
            <Link href="/task">
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

export default CreateTask;
