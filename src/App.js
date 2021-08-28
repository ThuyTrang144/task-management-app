import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './component/header/header';
import WorkSpace from './component/workspace/workspace';
import { DATA } from './data'

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = DATA;
  }
  render() {
    return ( 
      <div>
        <Header channelList={this.state.channelList}/>
        <WorkSpace DATA={this.state}/>
      </div>
    );
  }
}
export default App;