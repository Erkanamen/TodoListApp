import { Router } from 'express';
import * as TodoController from '../controllers/todos.controller';
const router = new Router();

router.route('/todos').post(TodoController.addTodoItem);
router.route('/todos/:id').delete(TodoController.deleteItem);
router.route('/todos/:id').post(TodoController.toggleItem);

export default router;