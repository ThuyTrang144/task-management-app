import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../../context';
import { useWorkItem } from './useWorkItem';

const useTodo = () => {
    const context = useContext(DataContext);
    const { findWorkItemById, setWorkItemList, workItemList } = useWorkItem();
    const workItem = findWorkItemById(context.state.activeId);
    const addNewTodo = (text) => {
        workItem.todoList.push({ id: Math.random().toString().substring(2), name: text, assigneeId: workItem.ownerId});
        setWorkItemList([...workItemList]);
    };
    const deleteTodo = (todoId) => {
        const todoIndex = workItem.todoList.findIndex(item => item.id === todoId);
        workItem.todoList.splice(todoIndex, 1);
        setWorkItemList([...workItemList]);
    };
    return { 
        todoList: workItem.todoList,
        addNewTodo,
        deleteTodo
    };
};

export{ useTodo };