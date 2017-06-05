import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';

import { fetchInformation } from 'src/redux/actions/mainActions';
import styles from './index.scss';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    fetchInformation,
};

const tableData = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    static propTypes = {
        fetchInformation: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.download} />
                <div className={styles.star} />
                <p className={styles.introduce}>
                    this is just a demo which use redux-saga and lazy load components.
                    something changes.
                </p>
                <div className={styles.content}>
                    <Table columns={columns} dataSource={tableData} />
                </div>
            </div>
        );
    }
}
export default App;
