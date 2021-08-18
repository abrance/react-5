import * as React from "react";
import {MainProps} from "../types";
import {Menu} from "antd";
import {SearchBox} from "../searchBox/searchBox";


/*
*
*
*
* */
export class Topbar extends React.Component<MainProps, object>{
    state = {
        current: 'upload'
    }
    constructor(props: MainProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e: any) {
        console.log(e.key);
        this.setState({current: e.key})
    }

    render() {
        const { current } = this.state

        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="search">
                    <SearchBox />
                </Menu.Item>
                {/*<SearchBox />*/}
                <Menu.Item key="upload">
                    上传
                </Menu.Item>
                <Menu.Item key="download">
                    下载
                </Menu.Item>
                <Menu.Item key="sign in">
                    登录
                </Menu.Item>
                <Menu.Item key="sign up">
                    注册
                </Menu.Item>
            </Menu>
        );
    }
}
