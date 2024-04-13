import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";
import { ITask } from "@src/models/Task";
import EnvVars from "@src/constants/EnvVars";

const client = new ConvexHttpClient(EnvVars.Convex.Url);

function getAll(): Promise<ITask[]> {
  return client.query(api.tasks.getTasks, {});
}

function getById(id: any): Promise<ITask> {
  return client.query(api.tasks.getTaskById, { id })
    .then((result: ITask | null) => {
      if (result === null) {
        throw new Error("Task not found");
      }
      return result;
    });
}

function addTask(task: any): Promise<any> {
  return client.mutation(api.tasks.addTask, { task });
}

function updateTask(id: any, task: any): Promise<any> {
  return client.mutation(api.tasks.updateTask, { id, task });
}

function deleteTask(id: any): Promise<any> {
  return client.mutation(api.tasks.deleteTask, { id });
}

export default {
  getAll,
  getById,
  addTask,
  updateTask,
  deleteTask
};