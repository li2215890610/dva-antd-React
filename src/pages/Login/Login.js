import React from 'react';

import style from "./Login.css";

import { Form, Input, Button } from 'antd'

const FormItem = Form.Item;

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {//每次进入登录页清除之前的登录信息

    }

    loginReq = (params) => {
        // window.location.href = '/';
    };

    render() {
        return (
            <div>
                <div className={style.login_header}>
                    <div className={style.logo}>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="慕课后台管理系统" />
                        React全家桶+AntD 后台管理系统
                    </div>
                </div>
                <div className={style.login_content_wrap}>
                    <div className={style.login_content}>
                        <div className={style.word}>低碳环保 <br />引领城市新经济发展</div>
                        <div className={style.login_box}>
                            <div className={style.error_msg_wrap}>
                                <div
                                    className={this.state.errorMsg ? "show" : ""}>
                                    {this.state.errorMsg}
                                </div>
                            </div>
                            <div className={style.title}>欢迎使用</div>
                            <LoginForm ref="login" loginSubmit={this.loginReq} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class LoginForm extends React.Component {
    state = {};

    loginSubmit = (e) => {
        e && e.preventDefault();
        // const _this = this;
        // this.props.form.validateFieldsAndScroll((err, values) => {
        //     if (!err) {
        //         var formValue = _this.props.form.getFieldsValue();
        //         _this.props.loginSubmit({
        //             username: formValue.username,
        //             password: formValue.password
        //         });
        //     }
        // });

        // let name = '222';
        // let ks = '111'
        const location = {
            // pathname: `/home/${name}/${ks}`,
            pathname: `/home`,
        }
        
        window._history.push(location)

    };

    checkUsername = (rule, value, callback) => {
        var reg = /^\w+$/;
        if (!value) {
            callback('请输入用户名!');
        } else if (!reg.test(value)) {
            callback('用户名只允许输入英文字母');
        } else {
            callback();
        }
    };

    checkPassword = (rule, value, callback) => {
        if (!value) {
            callback('请输入密码!');
        } else {
            callback();
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className={style.login_form}>
                <FormItem>
                    {getFieldDecorator('username', {
                        initialValue: 'admin',
                        rules: [{ validator: this.checkUsername }]
                    })(
                        <Input placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {/* {getFieldDecorator('password', {
                        initialValue:'admin',
                        rules: [{validator: this.checkPassword}]
                    })( */}
                    {/* <Input type="password" placeholder="密码" wrappedcomponentref={(inst) => this.pwd = inst } /> */}
                    <Input type="password" placeholder="密码" />

                    {/* )} */}
                </FormItem>
                <FormItem>
                    <Button type="primary" onClick={this.loginSubmit} className="login-form-button">
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}
LoginForm = Form.create({})(LoginForm);
