import {Icon, List, Avatar} from 'antd';
import React, {Component} from 'react';

class PostList extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    const data = [
      {
        title: 'Ant Design Title 1'
      },
      {
        title: 'Ant Design Title 2'
      },
      {
        title: 'Ant Design Title 3'
      },
      {
        title: 'Ant Design Title 4'
      }
    ];
    const {hasAvatar} = this.props;

    return (
      <List
        className={hasAvatar ? 'post__avatar-list' : ''}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item className="post__item">
            <div className="ant-list-item-meta post__item-meta">
              {
                hasAvatar ? (
                  <div className="ant-list-item-meta-avatar">
                    <Avatar size={52} icon="user" />
                  </div>
                ) : null
              }
              <div className="post__rate">
                <Icon type="caret-up" />
                <span className="post__rate-number">200</span>
                <Icon type="caret-down" />
              </div>
              <div className="ant-list-item-meta-content">
                <h4 className="ant-list-item-meta-title"><a className="post__item-title" href="">{item.title}</a></h4>
                <div className="ant-list-item-meta-description">
                  <div className="post__item-info">
                    <span className="text-middle">0 回复</span>
                    <i className="text-middle">•</i>
                    <span className="text-middle">4 小时前</span>
                    <span className="text-middle">来自 蓝鸭</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ant-list-item-extra">
              <Icon type="star" theme="filled" />
            </div>
          </List.Item>
        )}
      />
    );
  }
}

PostList.propTypes = {};

export default PostList;