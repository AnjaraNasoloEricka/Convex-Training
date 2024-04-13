import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import TaskService from '@src/services/convex/TaskService';
import { IReq, IRes } from './types/express/misc';

async function getAll (req: IReq, res: IRes) {
    const tasks = await TaskService.getAll();
    return res.status(HttpStatusCodes.OK).json({ tasks });
}

async function getById (req: IReq, res: IRes) {
    const { id } = req.params;
    const task = await TaskService.getById(id);
    return res.status(HttpStatusCodes.OK).json({ task });
}

async function addTask (req: IReq, res: IRes) {
    const task = req.body;
    const result = await TaskService.addTask(task);
    return res.status(HttpStatusCodes.OK).json({ result });
}

async function updateTask (req: IReq, res: IRes) {
    const { id } = req.params;
    const task = req.body;
    const result = await TaskService.updateTask(id, task);
    return res.status(HttpStatusCodes.OK).json({ result });
}

async function deleteTask (req: IReq, res: IRes) {
    const { id } = req.params;
    const result = await TaskService.deleteTask(id);
    return res.status(HttpStatusCodes.OK).json({ result });
}

export default {
    getAll,
    getById,
    addTask,
    updateTask,
    deleteTask
} as const;