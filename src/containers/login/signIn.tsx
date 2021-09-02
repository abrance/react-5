import * as React from "react";
import {Input, AutoComplete, Form, Checkbox, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useState} from "react";
import { Link } from "react-router-dom";


const email_ls = [
    "@qq.com",
    "@163.com",
    "@126.com",
    "@sina.com",
    "@hotmail.com",
    "@yahoo.com",
    "@sohu.com",
    "@yahoo.cn",
    "@gmail.com",
    "@tom.com"
]

const { Option } = AutoComplete;

const Complete: React.FC = () => {
    const [result, setResult] = useState<string[]>([]);
    const handleSearch = (value: string) => {
        let res: string[] = [];
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = email_ls.map(domain => `${value}${domain}`);
        }
        setResult(res);
    };
    return (
        <AutoComplete style={{width: 200}} onSearch={handleSearch} placeholder="input here">
            {result.map((email: string) => (
                <Option key={email} value={email}>
                    {email}
                </Option>
            ))}
        </AutoComplete>
    );
};


// export const SignIn = () => {
//     const [form] = Form.useForm()
//
//     const onFinish = (values: any) => {
//         console.log(values);
//     }
//
//     return (
//         <>
//             <Form className="login-form" form={form} onFinish={onFinish}>
//                 <h1 className="title">Sign In</h1>
//                 <h2 className="description">
//                   Sign in to continue to our application
//                 </h2>
//
//                 <Form.Item
//                     label="Username"
//                     name={"username"}
//                     rules={[{required: true, message: 'input your username'}]}
//                 >
//                     <Complete />
//                 </Form.Item>
//                 <Form.Item
//                     label="Password"
//                     name={"password"}
//                     rules={[{required: true, message: "input your password"}]}
//                 >
//                     <Input.Password placeholder="input password" />
//                 </Form.Item>
//                 <span className="forgot-password">Forgot password?</span>
//                 <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
//                     <Checkbox>Remember me</Checkbox>
//                 </Form.Item>
//                 <Form.Item wrapperCol={{offset: 8, span: 16}}>
//                     <Button type="primary" htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </>
//     );
// }

export const SignIn = (props: any) => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{required: true, message: 'Please input your Username!'}]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: 'Please input your Password!'}]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                {/*Or*/}
                {/*<Link to="/register" target="_blank" onClick={}>register now!</Link>*/}
            </Form.Item>
        </Form>
    );
};
