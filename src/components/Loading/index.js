import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Spin } from 'antd'
import './index.less'
import { connectComponentWithModels } from '../../util/connect'

@withRouter
class Loading extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <Spin wrapperClassName='Loading_wrap' className='Loading_Container' spinning={this.props.common.loading}>
                {this.props.children}
            </Spin>
        )
    }
}

export default connectComponentWithModels(Loading, ['common'])
