import React from 'react'
import { Empty, Button, Col, Row } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import { LocaleContext } from '@/cluster/context'
import './index.scss'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1509932_mtwffsv2db.js',
})

/**
 * 自定义Empty
 */
function SuperEmptyMemo({ mTop }: { mTop?: string }) {
  const styleObject = {
    marginTop: mTop ? mTop : '32px',
  }

  return (
    <Empty
      style={styleObject}
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="暂无数据"
    ></Empty>
  )
}

export const SuperEmpty = React.memo(SuperEmptyMemo)

/**
 * header
 * 对于 function 组件通过 LocaleContext.Consumer 来获取 context
 */
function HeaderMemo(props) {
  return (
    <LocaleContext.Consumer>
      {/* value 在这里代表 this.context */}
      {({ assets }) => (
        <Row className="module-header" justify="space-between">
          <Col className="text-box">
            <IconFont
              className="icon"
              type={props.icon.type}
              style={props.icon.style}
            />
            <span className="title">{props.title}</span>
          </Col>
          <Col className="func-box">
            {props.showAddBtn && (
              <Button
                onClick={props.addEvent.bind(this, 'add')}
                size="small"
                type="link"
              >
                {assets.add}
              </Button>
            )}
          </Col>
        </Row>
      )}
    </LocaleContext.Consumer>
  )
}

export const Header = React.memo(HeaderMemo)

/**
 * 自定义icon
 */
function SuperIconMemo(props) {
  return (
    <IconFont
      className={props.className}
      type={props.type}
      style={props.style}
    />
  )
}

export const SuperIcon = React.memo(SuperIconMemo)
