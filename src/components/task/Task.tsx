import { ITask } from "../../../types/task";
import Tasks from "./TasksChilde";

interface TaskProps {
  task: ITask[];
}

export const TaskChilde = ({ task }: TaskProps) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {task.map((element) => (
        <Tasks key={element.id} tasks={element} />
      ))}
    </div>
  );
};
