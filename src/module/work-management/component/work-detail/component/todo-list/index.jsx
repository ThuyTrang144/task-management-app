import './styles.scss';
import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Todo from './Todo';
import { useState } from 'react/cjs/react.development';
import { useTodo } from '../../../../work-item-hook/useTodo';
import { useUserList } from '../../../../../../general-data-hook/useUserList';

const TodoList = React.memo(function () {
    const { findUserById } = useUserList();
    const { todoList, addNewTodo, deleteTodo } = useTodo();
    const [ isOpen, setIsOpenState ] = useState(false);
    const [ newTodo, setNewTodoState ] = useState('');
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
        deleteTodo(todoId);
    };
    function onKeyPress(e) {
        if (e.charCode === 13) {
            addNewTodo(newTodo);
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