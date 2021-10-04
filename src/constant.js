import { faTasks, faUser, faUsers, faArchive, faBoxes } from '@fortawesome/free-solid-svg-icons';

const statusUrl = 'http://192.168.1.222:5000/work-status';
const importanceLevelUrl = 'http://192.168.1.222:5000/work-important-level';
const workItemListUrl = 'http://192.168.1.222:5000/work-item';
const userListUrl = 'http://192.168.1.222:5000/user';
const bucketListUrl = 'http://192.168.1.222:5000/bucket';
const channelListUrl = 'http://192.168.1.222:5000/channel';
const activityListUrl =  'http://192.168.1.222:5000/activity-item';

const status = [
    { id: 1, name: 'New' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Done' },
    { id: 4, name: 'Archived' }
];
const activityLabel = [
    {id: 1, name: 'System'},
    {id: 2, name: 'Communication'},
    {id: 3, name: 'User'},
];
const importanceLevel = [
    { id: 1, name: 'Urgent' },
    { id: 2, name: 'Critical' },
    { id: 3, name: 'High' },
    { id: 4, name: 'Low' },
];
const workItemMenu = [
    { id: 1, icon: faTasks, name:'Work Stream', link: '/work-management/work-stream'}, 
    { id: 2, icon: faUser, name: 'Owned Works', link: '/work-management/owned-works'}, 
    { id: 3, icon: faUsers, name: 'Participated Works', link: '/work-management/participant-works'},
    { id: 4, icon: faArchive, name: 'Archived Works', link: '/work-management/archived-works'}
];
const settingMenu = [
    { id: 1, icon: faUser, name: 'User Info', link: '/setting-page/user-info'},
    { id: 2, icon: faBoxes, name: 'Channel List', link: '/setting-page/channel-setting'},
    { id: 3, icon: faUsers, name: 'User List', link: '/setting-page/user-list-setting'}
];
export { status, 
    statusUrl, 
    importanceLevelUrl, 
    userListUrl, 
    workItemListUrl, 
    bucketListUrl, 
    channelListUrl, 
    activityListUrl,
    activityLabel, 
    importanceLevel, 
    workItemMenu, 
    settingMenu };