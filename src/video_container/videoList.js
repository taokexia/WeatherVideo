import React from 'react';
import { List, Avatar } from 'antd';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

class VideoList extends React.Component {
    render() {
        return (
            <List
                style={{margin: 50}}
                header={<h2>Video List</h2>}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="#">{item.title}</a>}
                            description="A video List that showed the infomation about video"
                        />
                    </List.Item>
                )}>

            </List>
        )
    }
}

export default VideoList;