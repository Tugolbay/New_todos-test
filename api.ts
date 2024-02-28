// import { ITask } from "./types/task";

// const baseUrl = "http://localhost:4000";

// export const getAllTodos = async () => {
//   const res = await fetch(`${baseUrl}/todos`);
//   const todos = await res.json();
//   return todos;
// };

// export const addTodo = async (todo: ITask) => {
//   const res = await fetch(`${baseUrl}/todos`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   });

//   const newTodo = await res.json();
//   return newTodo;
// };

// export const deleteTodo = async (id: string) => {
//   await fetch(`${baseUrl}/todos/${id}`, {
//     method: "DELETE",
//   });
// };

// export const editTodo = async (todo: ITask) => {
//   const res = await fetch(`${baseUrl}/todos/${todo.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   });

//   const updatedTodo = await res.json();
//   return updatedTodo;
// };
