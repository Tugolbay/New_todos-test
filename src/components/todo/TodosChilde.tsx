import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { Modal } from "../ui/Modal";
import { Input } from "../ui/input";
import { useState } from "react";
import { ITodo } from "../../../types/task";
import { Button } from "../ui/button";
import { poppins } from "~/pages";
import { useDeleteTodo, useUpdateTodo } from "~/hook/useTodosQuery";
import { deleteTodo, updateTodo } from "../../../store/apiTodo";

interface TodoChildeProps {
  todo: ITodo;
}

export const TodoChilde = ({ todo }: TodoChildeProps) => {
  const [todoEdit, setTodoEdit] = useState(todo.title);
  const [editDescValue, setEditDescValue] = useState(todo.description);

  const [handleSubmitEditTodo, openModalEdit, setOpenModalEdit] = useUpdateTodo(
    updateTodo,
    ["todos"]
  );

  const handleEditSubmit = () => {
    const updateData = {
      id: todo.id,
      title: todoEdit,
      description: editDescValue,
    };
    handleSubmitEditTodo(updateData);
  };

  const [handleDeleteTodo, openModalDelete, setOpenModalDelete] = useDeleteTodo(
    deleteTodo,
    ["todos"]
  );

  return (
    <div className="flex justify-center">
      <div
        className="w-[40vw] h-[15vh] bg-white  shadow-md rounded-[1rem] p-[1rem] flex items-center justify-between mt-[2rem]"
        key={todo.id}
      >
        <div className="flex flex-col gap-3">
          <p className={`text-[#9395D3] ${poppins.className}`}>{todo.title}</p>
          <p className="w-[25vw]">{todo.description}</p>
        </div>

        <div className="flex gap-12">
          <MdEdit
            size={22}
            cursor={"pointer"}
            className="text-[#9395D3]"
            onClick={() => setOpenModalEdit(true)}
          />
          {openModalEdit && (
            <Modal title="Edit Task" onModal={setOpenModalEdit}>
              <form className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Title..."
                  className="w-[25vw]"
                  value={todoEdit}
                  onChange={(e) => setTodoEdit(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Description..."
                  value={editDescValue}
                  onChange={(e) => setEditDescValue(e.target.value)}
                />
              </form>
              <Button className="bg-[#9395D3]" onClick={handleEditSubmit}>
                Edit Task
              </Button>
            </Modal>
          )}

          <MdDeleteOutline
            size={22}
            cursor={"pointer"}
            className="text-[#9395D3]"
            onClick={() => setOpenModalDelete(true)}
          />

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
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Yes
                </Button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};
