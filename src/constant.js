import { faTasks, faUser, faUsers, faArchive, faBoxes } from '@fortawesome/free-solid-svg-icons';

const statusUrl = 'http://68.183.225.119:5000/work-status';
const importanceLevelUrl = 'http://68.183.225.119:5000/work-important-level';
const workItemListUrl = 'http://68.183.225.119:5000/work-item?channel_id=';
const userListUrl = 'http://68.183.225.119:5000/user';
const bucketListUrl = 'http://68.183.225.119:5000/bucket';
const channelListUrl = 'http://68.183.225.119:5000/channel';
const activityListUrl =  'http://68.183.225.119:5000/activity-item';
const archiveId = '4061f1ac-ed1e-47c5-acc8-8c3db4569c39';
const defaultChannelId = '5556b3cd-4250-4e1a-a7f8-828ad7c50e33';
const defaultStatusId = 'b0979e06-9371-4c41-b0e7-2e1b5f9242a2';
const defaultImportanceLevelId = '0bef8cf9-77f0-48ed-bfdf-719c50f0ae59';
const defaultOwnerId = 'f8e7ed20-9023-4945-b6db-42f8046f09bb';
const defaultChannelName = 'Default Channel';

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
    defaultChannelName,
    archiveId,
    defaultChannelId,
    defaultStatusId,
    defaultImportanceLevelId,
    defaultOwnerId,
    activityLabel, 
    importanceLevel, 
    workItemMenu, 
    settingMenu };