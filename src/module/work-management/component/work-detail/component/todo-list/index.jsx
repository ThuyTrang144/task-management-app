import './styles.scss';
import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Todo from './Todo';
import { WorkDetailContext } from '../../context';
import { useContext, useState } from 'react/cjs/react.development';
import { useTodo } from '../../../../work-item-hook/useTodo';
import { useUserList } from '../../../../../../general-data-hook/useUserList';

const TodoList = React.memo(function () {
    const { findUserById } = useUserList();
    const workContext = useContext(WorkDetailContext);
    const { addNewTodo, deleteTodo } = useTodo();
    const [ isOpen, setIsOpenState ] = useState(false);
    const [ newTodo, setNewTodoState ] = useState('');
    const [ todoList, setTodoList] = useState(workContext.workDetailData.todoList);
    function openTodo() {
        if (isOpen) {
            setIsOpenState(false);
        } else {
            setIsOpenState(true);
        }
    }
    function renderTodoList() {
        console.log('todolist', todoList);
        return todoList.map(item => {
            const assignee = findUserById(item.assigneeId);
            return <Todo
                key={item.id}
                id={item.id}
                name={item.name}
                assignee={assignee.name}
                deleteTodoItem={deleteTodoItem}
            />;
        }
        );
    }
    const deleteTodoItem = (todoId) => {
        const newTodoList = deleteTodo(workContext.workDetailData.id, todoId);
        setTodoList(newTodoList);
    };
    function onKeyPress(e) {
        if (e.charCode === 13) {
            const newTodoList = addNewTodo(workContext.workDetailData.id, newTodo);
            setTodoList(newTodoList);
            setNewTodoState('');
        }
    }
    return ( 
        <div className="todo-list">
            <div className="dash-line"></div>
            <div className="todo-title">
                <span>Todo list</span>
                {isOpen ? <UpOutlined onClick={openTodo}/> : <DownOutlined onClick={openTodo}/>}
            </div>
            <div style={isOpen ? {display:'block'} : {display:'none'}}>
                {renderTodoList()}
                <Input
                    type='text'
                    placeholder='Add new todo here'
                    onChange={(e) => setNewTodoState(e.target.value)}
                    value={newTodo}
                    onKeyPress={onKeyPress}/>
            </div>
        </div>
    );
});
 
export default TodoList;