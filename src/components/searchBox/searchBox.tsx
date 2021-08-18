import * as React from "react";
import {MainProps} from "../types";


import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const onSearch = (value: any) => console.log(value);


export class SearchBox extends React.Component<MainProps, object> {
    constructor(props: MainProps) {
        super(props);
    }

    render() {
        return (
            <Space direction="vertical">
                {/*<Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />*/}
                {/*<Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />*/}
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
                {/*<Search*/}
                {/*    placeholder="input search text"*/}
                {/*    allowClear*/}
                {/*    enterButton="Search"*/}
                {/*    size="large"*/}
                {/*    onSearch={onSearch}*/}
                {/*/>*/}
                {/*<Search*/}
                {/*    placeholder="input search text"*/}
                {/*    enterButton="Search"*/}
                {/*    size="large"*/}
                {/*    suffix={suffix}*/}
                {/*    onSearch={onSearch}*/}
                {/*/>*/}
            </Space>
        )
    }
}