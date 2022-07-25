import React from 'react';
import { Button, Dropdown, Menu, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const DropdownM = () => {
    const menu = (
        <Menu
            items={[
                {
                    label: 'More',
                    key: '1',
                },
            ]}
        />
    );
    return (
        <Dropdown overlay={menu}>
            <Button style={{
                margin: 'auto',
                display: 'flex',
                marginTop: '0px',
                background: 'transparent',
                color: '#fff',
                marginBottom: '40px'
            }}>
                <Space>
                    Non-Vetted Tailor
                    <RightOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}

export default DropdownM