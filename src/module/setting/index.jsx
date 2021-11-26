import { SettingMenu } from './component/setting-menu';
import './style.scss';
import { UserInfo, ChannelSetting, UserListSetting } from './component';
import { Route, Switch } from  'react-router-dom';

export const SettingPage = () => {
    return (
        <div className='setting-page'>
            <SettingMenu />
            <div className='content'>
                <Switch>
                    <Route path='/setting-page/user-info'>
                        <UserInfo />
                    </Route>
                    <Route path='/setting-page/channel-setting'>
                        <ChannelSetting />
                    </Route>
                    <Route path='/setting-page/user-list-setting'>
                        <UserListSetting />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};