import {MainProps} from "../types";
import {MenuProps, Tree} from "antd";
import React from "react";
import {Breadcrumb} from "antd";

const { DirectoryTree } = Tree

const treeData = [
    {
        title: 'parent 0',
        key: '0-0',
        children: [
            { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
            { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
        ],
    },
    {
        title: 'parent 1',
        key: '0-1',
        children: [
            { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
            { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
        ],
    },
];


export class BreadCrumbTreeMixin extends React.Component<MainProps, object>{
    constructor(props: MainProps) {
        super(props);
    }

    const onSelect = (keys: React.Key[], info: any) => {
        console.log('Trigger Select', keys, info);
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };

    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="">Home</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">storage1</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">storage1-1</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">storage1-1-1.txt</a>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <DirectoryTree
                    multiple
                    defaultExpandAll
                    onSelect={onSelect}
                    onExpand={onExpand}
                    treeData={treeData}
                />

            </div>
        );
    }
}
