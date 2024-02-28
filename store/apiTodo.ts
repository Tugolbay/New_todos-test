import { ITask, ITodo } from "../types/task";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

// ------------------- TODO запрос ----------------------- //

export const getTodoRequest = async () => {
  const { data } = await api.get(`/todos`);
  return data;
};
export const createTodo = async (newTaskValue: ITodo) => {
  const { data } = await api.post(`/todos`, newTaskValue);
  return data;
};

export const deleteTodo = async (id: string) => {
  const { data } = await api.delete(`/todos/${id}`);
  return data;
};

export const updateTodo = async (updatedData: ITodo) => {
  const { data } = await api.put(`/todos/${updatedData.id}`, updatedData);
  return data;
};

// ------------------- TASK запрос ----------------------- //

export const getTaskRequest = async () => {
  const { data } = await api.get(`/tasks`);
  return data;
};

export const addTask = async (newTaskValue: ITask) => {
  const { data } = await api.post(`/tasks`, newTaskValue);
  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await api.delete(`/tasks/${id}`);
  return data;
};

export const updateTask = async (updateData: ITask) => {
  const { data } = await api.put(`/tasks/${updateData.id}`, updateData);
  return data;
};
