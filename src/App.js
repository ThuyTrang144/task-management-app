import Header from './component/header/index';
import WorkManagement from './module/work-management';
import { DATA } from './data';

function App() {
    return (
        <div>
            <Header channelList={DATA.channelList} />
            <WorkManagement DATA={DATA} />
        </div>
    );
}
export default App;