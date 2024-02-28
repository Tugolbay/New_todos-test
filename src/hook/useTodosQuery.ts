import { QueryFunction, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { ITask, ITodo } from "../../types/task";

// --------------- GET HOOK --------------- //

const useCustomQuery = (queryFn: QueryFunction<any, string[]>, type: any) => {
  return useQuery({
    queryFn: () => queryFn(type),
    queryKey: [type, type],
  });
};
export { useCustomQuery };

// // --------------- DELETE HOOK --------------- //

export const useDeleteTodo = (deleteFn: any, queryKey: any) => {
  const client = useQueryClient();
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleDeleteTodo = async (id: string) => {
    deleteFn(id)
      .then(() => {
        client.invalidateQueries(queryKey);
        setOpenModalDelete(false);
        toast.success("Задача успешно удалена");
      })
      .catch(() => {
        toast.error("Не удалось обновить задачу");
      });
  };

  return [handleDeleteTodo, openModalDelete, setOpenModalDelete] as const;
};

// --------------- UPDATE HOOK --------------- //

export const useUpdateTodo = (updateFn: any, queryKey: any) => {
  const client = useQueryClient();
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleSubmitEditTodo = async (updateData: ITask | ITodo) => {
    updateFn(updateData)
      .then(() => {
        client.invalidateQueries(queryKey);
        setOpenModalEdit(false);
        toast.success("Задача успешно обновлена");
      })
      .catch(() => {
        toast.error("Не удалось добавить задачу");
      });
  };

  return [handleSubmitEditTodo, openModalEdit, setOpenModalEdit] as const;
};

// --------------- POST HOOK --------------- //

const useCreateTodo = (
  createFn: (newTaskValue: any) => Promise<any>,
  queryKey: any
) => {
  const client = useQueryClient();

  const handleSubmitCreateTodo = async (newTaskValue: ITask | ITodo) => {
    try {
      await createFn(newTaskValue);
      client.invalidateQueries(queryKey);
      toast.success("Task added successfully");
    } catch {
      toast.error("Failed to add task");
    }
  };

  return handleSubmitCreateTodo;
};

export default useCreateTodo;
