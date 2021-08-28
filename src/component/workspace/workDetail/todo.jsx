import { DownOutlined, DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import Checkbox from 'antd/lib/checkbox/Checkbox';

class Todo extends React.Component {
    deleteTodo = () => {
        this.props.deleteTodo(this.props.index)
    }
    render() { 
        return ( 
            <div className="todo-item">
                <div>
                    <Checkbox />
                    <span className="todo-name">{this.props.name}</span>
                </div>
                <div className="todo-info">
                    <div className='assignee'>
                        <span>{this.props.assignee}</span>
                        <DownOutlined/>
                    </div>
                    <DeleteOutlined id="delete-icon" onClick={this.deleteTodo}/>
                </div>
            </div>
         );
    }
}
 
export default Todo;

// 

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

// ReactDOM.render(
//   <Collapse accordion>
//     <Panel header="This is panel header 1" key="1">
//       <p>{text}</p>
//     </Panel>
//     <Panel header="This is panel header 2" key="2">
//       <p>{text}</p>
//     </Panel>
//     <Panel header="This is panel header 3" key="3">
//       <p>{text}</p>
//     </Panel>
//   </Collapse>,
//   mountNode,
// );