import { useWorkItem } from './useWorkItem';

const useTodo = () => {
    const { findWorkItemById } = useWorkItem();
    const addNewTodo = (workId, text) => {
        const workItem = findWorkItemById(workId);
        workItem.todoList.push({ id: Math.random().toString().substring(2), name: text, assigneeId: workItem.ownerId});
        return [...workItem.todoList];
    };
    const deleteTodo = (workId, todoId) => {
        const workItem = findWorkItemById(workId);
        const todoIndex = workItem.todoList.findIndex(item => item.id === todoId);
        workItem.todoList.splice(todoIndex, 1);
        return [...workItem.todoList];
    };
    return { addNewTodo, deleteTodo};
};

export{ useTodo };