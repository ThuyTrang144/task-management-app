import Header from './component/header/header';
import WorkSpace from './component/workspace/workspace';
import { DATA } from './data';

function App() {
    return (
        <div>
            <Header channelList={DATA.channelList} />
            <WorkSpace DATA={DATA} />
        </div>
    );
}
export default App;