import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { deleteTask, updateTask } from "../../../store/apiTodo";
import { ITask } from "../../../types/task";
import { useDeleteTodo, useUpdateTodo } from "~/hook/useTodosQuery";

interface TaskChildeProps {
  tasks: ITask;
}

const Tasks = ({ tasks }: TaskChildeProps) => {
  const [dateEdit, setDateEdit] = useState(tasks.date);
  const [editDescValue1, setEditDescValue1] = useState(tasks.description1);
  const [editDescValue2, setEditDescValue2] = useState(tasks.description2);
  const [editDescValue3, setEditDescValue3] = useState(tasks.description3);

  const [handleSubmitEditTodo, openModalEdit, setOpenModalEdit] = useUpdateTodo(
    updateTask,
    ["tasks"]
  );

  const handleEditSubmit = () => {
    const updateData = {
      id: tasks.id,
      date: dateEdit,
      description1: editDescValue1,
      description2: editDescValue2,
      description3: editDescValue3,
    };
    handleSubmitEditTodo(updateData);
  };

  const [handleDeleteTodo, openModalDelete, setOpenModalDelete] = useDeleteTodo(
    deleteTask,
    ["tasks"]
  );

  return (
    <div>
      <div key={tasks.id} className="w-[100%] h-[100%] rounded-lg bg-white p-6">
        <p className="text-[#9395D3] text-[1rem] text-center">{tasks.date}</p>
        <div className="flex flex-col gap-12 mt-6">
          <div className="flex items-center gap-2">
            <li>{tasks.description1}</li>
            <input type="checkbox" />
          </div>
          <div className="flex items-center gap-2">
            <li>{tasks.description2}</li>
            <input type="checkbox" />
          </div>
          <div className="flex items-center gap-2">
            <li>{tasks.description3}</li>
            <input type="checkbox" />
          </div>
        </div>
        <div className="flex gap-4 mt-[2rem]">
          <MdEdit
            size={22}
            cursor={"pointer"}
            className="text-[#9395D3]"
            onClick={() => setOpenModalEdit(true)}
          />
          <MdDeleteOutline
            size={22}
            cursor={"pointer"}
            className="text-[#9395D3]"
            onClick={() => setOpenModalDelete(true)}
          />
        </div>
      </div>

      {openModalEdit && (
        <Modal title="Edit Task" onModal={setOpenModalEdit}>
          <form className="flex flex-col gap-4">
            <Input
              type="date"
              value={dateEdit}
              onChange={(e) => setDateEdit(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description1..."
              value={editDescValue1}
              onChange={(e) => setEditDescValue1(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description2..."
              value={editDescValue2}
              onChange={(e) => setEditDescValue2(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description3..."
              className="w-[25vw]"
              value={editDescValue3}
              onChange={(e) => setEditDescValue3(e.target.value)}
            />
          </form>
          <Button className="bg-[#9395D3]" onClick={handleEditSubmit}>
            Edit Task
          </Button>
        </Modal>
      )}

      {openModalDelete && (
        <Modal
          title="Are you sure you want to delete?"
          onModal={setOpenModalDelete}
        >
          <div className="flex gap-10">
            <Button
              className="bg-[#9395D3]"
              onClick={() => setOpenModalDelete(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-[#9395D3] w-[5.5rem]"
              onClick={() => handleDeleteTodo(tasks.id)}
            >
              Yes
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Tasks;
