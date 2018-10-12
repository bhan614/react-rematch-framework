import React, {Component} from 'react'
import Loading from '../../components/Loading'
import { Icon, Modal, Form, Input, Button, Row, Col, Select, DatePicker, Table, Spin, message } from 'antd';
import { connectComponentWithModels } from '../../util/connect'

class Home extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    await this.props.$common.updateLoading(true)
    await this.props.$home.loadData()
    await this.props.$common.updateLoading(false)
  }

  getTable() {
        let columns = [
            {
                title: '名称',
                dataIndex: 'newBasePojo.name',
                key: 'newBasePojo.name',
            }, {
                title: '城市',
                dataIndex: 'cityName',
                key: 'cityName',
            }, {
                title: '提交时间',
                dataIndex: 'firstCommitDate',
                key: 'firstCommitDate',
            }, {
                title: '数据粒度',
                dataIndex: 'number',
                key: 'number',
            }, {
                title: '领取时间',
                dataIndex: 'getDate',
                key: 'getDate',
            }, {
                title: '状态',
                dataIndex: 'stateStr',
                key: 'stateStr',
            }
        ]
        return (
            <div>
              <Table columns={columns} dataSource={this.props.home.tableData.resultList} rowKey="processId" size="small" pagination={false} />
            </div>
        )
    }

    render() {
        return (
            <div className='Home_'>
               {this.getTable()}
               <Loading />
            </div>
        )
    }
}

export default connectComponentWithModels(Home, ['home', 'common'])
