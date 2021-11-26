import React from 'react';
import {
    DatePicker,
    Select,
    Form,
    Input,
    Radio,
} from 'antd';

const { Option } = Select;
export const EditForm = (props) => {

    return (
        <Form
            layout='vertical'
        >
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label='Title' name='title'>
                <Input defaultValue={props.workDetailData.name} style={{backgroundImage: 'unset'}}/>
            </Form.Item>
            <Form.Item label='Description' name='description'>
                <Input.TextArea defaultValue={props.workDetailData.description} style={{backgroundImage: 'unset'}} />
            </Form.Item>
            <Form.Item>
                <Form.Item label='Due Date' name='due-date' style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                    <DatePicker />
                </Form.Item>
                <Form.Item label='Tag' name='tag' style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                    <Select  mode="multiple" defaultValue={props.workDetailData.tagId} allowClear>
                        <Option value="USD">$</Option>
                        <Option value="CNY">¥</Option>
                    </Select>
                </Form.Item>
            </Form.Item>
            <Form.Item label='Status' name='status' >
                <Radio.Group>
                    <Radio.Button value="optional">New</Radio.Button>
                    <Radio.Button value>In progress</Radio.Button>
                    <Radio.Button value>Done</Radio.Button>
                    <Radio.Button value>Archived</Radio.Button>
                </Radio.Group>
            </Form.Item>
        </Form>
    );
};
