import * as React from "react";
import {MainProps} from "../types";
import {Menu} from "antd";
import {SearchBox} from "../searchBox/searchBox";
import { Link } from "react-router-dom"

import {connect} from "react-redux";


/*
*
*
*
* */


class Topbar extends React.Component<any, object>{
    // state 和 路由绑定起来
    // state = {
    //     current: 'upload'
    // }

    constructor(props: MainProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e: any) {
        this.props.sendApp(e.key)
    }

    render() {
        console.log(this.props)
        const current = this.props.app

        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="search">
                    <SearchBox />
                </Menu.Item>
                {/*<SearchBox />*/}
                <Menu.Item key="upload">
                    <Link to='/upload'>
                        上传
                    </Link>
                </Menu.Item>
                <Menu.Item key="download">
                    <Link to='/download'>
                        下载
                    </Link>
                </Menu.Item>
                <Menu.Item key="sign_in">
                    <Link to='/sign_in'>
                        登录
                    </Link>
                </Menu.Item>
                <Menu.Item key="register">
                    <Link to='register'>
                        注册
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export interface TopBarState {
    current: string
}

const mapStateToProps: any = (state: any) => {
    console.log('state', state);
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; current: any}) => void) => {
    return{sendApp: (current: any) => {
        dispatch({
            type: "app",
            current: current
        })}
    }
}

const TopBar = connect(mapStateToProps, mapDispatchToProps)(Topbar)
export default TopBar;
