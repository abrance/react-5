import * as React from "react";

import { List } from 'antd';

/*
* 远程拉取代码的窗口
* */
export class PullWindow extends React.Component<{data: any}, any>{
    constructor(props: {data: any}) {
        super(props);
    }
    render() {
        return (
            <>
                <div className='ls'>
                    <List
                        size="small"
                        // header={<div>Remote:</div>}
                        // footer={<div>end</div>}
                        bordered
                        dataSource={this.props.data}
                        renderItem={
                            (item: string) => <List.Item>{item}</List.Item>
                        }
                    />
                </div>
            </>
        )
    }
}


