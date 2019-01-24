import React, { Component } from "react"
import { connect } from "dva"
import { Card, WhiteSpace, List } from "antd-mobile"
import BizIcon from "../../components/BizIcon"
import Router from "umi/router"

import style from "./index.less"

// connect视图和state
@connect(({ info }) => ({
  info
}))
class Info extends Component {
  constructor(props) {
    super(props)
  }
  handleEdit = () => {
    Router.push("/info/edit")
  }
  render() {
    // 传进来的state当做props用
    const { info } = this.props
    return (
      <div className={style.container}>
        <div className={style.edit}>
          <BizIcon type="bianji" />
        </div>
        <div className={style.login} onClick={() => Router.push("/info/login")} />
        <div className={style.top} />
        <div className={style.avater} />
        <div className={style.cardContainer}>
          <WhiteSpace size="sm" />
          <Card className={style.card}>
            <Card.Header
              title={info.name}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            />
            <Card.Body>
              <List className={style.card.content}>
                <List.Item className={style.list_item}>
                  学号:
                  {info.stu_id}
                </List.Item>
                <List.Item>
                  班级:
                  {info.class_name}
                </List.Item>
                <List.Item>
                  专业:
                  {info.major_name}
                </List.Item>
                <List.Item>
                  学院:
                  {info.college_name}
                </List.Item>
                <List.Item>
                  电话:
                  {info.phone}
                </List.Item>
                <List.Item>
                  EMAIL:
                  {info.email}
                </List.Item>
              </List>
            </Card.Body>
          </Card>
          <WhiteSpace size="sm" />
        </div>
      </div>
    )
  }
}

export default Info
