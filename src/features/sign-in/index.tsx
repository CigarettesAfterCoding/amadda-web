import React from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { styled } from '@stitches/react';

export default function SignInPage() {
  const [form] = Form.useForm();

  return (
    <SignInSection>
      <Form form={form}>
        <Space direction="vertical" size={10} style={{ display: 'flex' }}>
          <InputWrapper>
            <Typography.Text strong>아이디</Typography.Text>
            <Input placeholder="아이디 입력" onClick={() => console.log(213)} />
          </InputWrapper>
          <InputWrapper>
            <Typography.Text strong>비밀번호</Typography.Text>
            <Input
              placeholder="비밀번호 입력"
              onClick={() => console.log(213)}
            />
          </InputWrapper>
          <Button type="primary" block>
            로그인하기
          </Button>
        </Space>
      </Form>
    </SignInSection>
  );
}

const InputWrapper = styled('div', {});

const SignInSection = styled('div', {
  width: '400px',
  padding: 20,
  margin: '300px auto',
  backgroundColor: 'LightGray',
});
