import autoBind from 'autobind-decorator';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Select } from 'antd';

import { fetchInformation } from 'src/redux/actions/mainActions';
import styles from './index.scss';

const mapStateToProps = (state) => {
    const mainData = state.mainData.toJS();
    return {
        mainData,
    };
};

const mapDispatchToProps = {
    fetchInformation,
};

const columns = [{
    title: 'STUDENT_ID',
    key: 'studentId',
}, {
    title: 'STUDENT_NAME',
    key: 'studentName',
}];

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    static propTypes = {
        fetchInformation: PropTypes.func.isRequired,
        mainData: PropTypes.instanceOf(Object).isRequired,
    };

    componentDidMount() {
        const { fetchInformation } = this.props;
        fetchInformation();
    }

    @autoBind
    handleChange(classId) {
        console.log(classId);
    }

    render() {
        const { mainData } = this.props;
        return (
            <div className={styles.wrap}>
                <p className={styles.introduce}>
                    this is just a demo which use redux-saga and lazy load components.
                </p>
                <div className={styles.content}>
                    <Select defaultValue="lucy" className={styles.select} onChange={this.handleChange}>
                        {mainData.classList.map(itemData => (
                            <Select.Option value={itemData.classId} key={itemData.classId}>
                                {itemData.className}
                            </Select.Option>
                        ))}
                    </Select>
                    <Table columns={columns} dataSource={mainData.classDetail} />
                </div>
            </div>
        );
    }
}
export default App;
