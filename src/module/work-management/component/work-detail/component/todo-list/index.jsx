import './styles.scss';
import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Todo from './Todo';
import { WorkDetailContext } from '../../context';
import { useContext, useState } from 'react/cjs/react.development';
import { DataContext } from '../../../../../../context';

const TodoList = React.memo(function () {
    const dataContext = useContext(DataContext);
    const workContext = useContext(WorkDetailContext);
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
        const { workDetailData } = workContext;
        return workDetailData.todoList.map(item => {
            const assignee = dataContext.findUserById(item.assigneeId);
            return <Todo
                key={item.id}
                id={item.id}
                name={item.name}
                assignee={assignee.name}
            />;
        }
        );
    }
    function onKeyPress(e) {
        if (e.charCode === 13) {
            dataContext.addNewTodo(dataContext.state.activeId, newTodo);
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