import { styled } from '@stitches/react';
import { Avatar, Dropdown, Menu, Typography } from 'antd';

export default function Header() {
  const menu = (
    <Menu>
      <Menu.Item key="1">계정 설정</Menu.Item>
      <Menu.Item key="2">로그 아웃</Menu.Item>
    </Menu>
  );

  return (
    <HeaderBlock>
      <Typography.Title style={{ fontSize: 30, margin: 0 }}>
        Amadda
      </Typography.Title>
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar style={{ cursor: 'pointer' }}>B</Avatar>
      </Dropdown>
    </HeaderBlock>
  );
}

const HeaderBlock = styled('header', {
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
});
