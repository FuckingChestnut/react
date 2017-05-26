import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import styles from './index.scss';

const FormItem = Form.Item;

@Form.create()
class NormalLoginForm extends Component {
    static propTypes = {
        form: PropTypes.instanceOf(Object).isRequired,
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.wrap}>
                <Form className={styles.form}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />,
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                type="password"
                                placeholder="Password"
                                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                            />,
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>,
                        )}
                        <a className={styles.forgot} href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className={styles.login}>
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
export default NormalLoginForm;
