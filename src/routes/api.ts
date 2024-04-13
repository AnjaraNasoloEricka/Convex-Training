import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import User from '@src/models/User';
import Task from '@src/models/Task';
import UserRoutes from './UserRoutes';
import TaskRouter from './TaskRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// Add TaskRouter (convex example)
const taskRouter = Router();

// Get all tasks
taskRouter.get(
  Paths.Task.Get,
  TaskRouter.getAll,
);

// Get task by id
taskRouter.get(
  Paths.Task.GetById,
  TaskRouter.getById,
);

// Add one task
taskRouter.post(
  Paths.Task.Add,
  validate(['task', Task.isTask]),
  TaskRouter.addTask,
);

// Update one task
taskRouter.put(
  Paths.Task.Update,
  validate(['task', Task.isTask]),
  TaskRouter.updateTask,
);

// Delete one task
taskRouter.delete(
  Paths.Task.Delete,
  TaskRouter.deleteTask,
);

apiRouter.use(Paths.Task.Base, taskRouter);

// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(
  Paths.Users.Get,
  UserRoutes.getAll,
);

// Add one user
userRouter.post(
  Paths.Users.Add,
  validate(['user', User.isUser]),
  UserRoutes.add,
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(['user', User.isUser]),
  UserRoutes.update,
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(['id', 'number', 'params']),
  UserRoutes.delete,
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);

// **** Export default **** //

export default apiRouter;
