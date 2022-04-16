import React from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { styled } from '@stitches/react';
import { useRouter } from 'next/router';

export default function SignUpPage() {
  const [form] = Form.useForm();
  const router = useRouter();

  return (
    <SignUpSection>
      <Form form={form}>
        <Space direction="vertical" size={10} style={{ display: 'flex' }}>
          <InputWrapper>
            <Typography.Text strong>아이디</Typography.Text>
            <Input placeholder="아이디 입력" />
          </InputWrapper>
          <InputWrapper>
            <Typography.Text strong>비밀번호</Typography.Text>
            <Input placeholder="비밀번호 입력" />
          </InputWrapper>
          <InputWrapper>
            <Typography.Text strong>비밀번호 확인</Typography.Text>
            <Input placeholder="비밀번호 확인" />
          </InputWrapper>
          <Button type="primary" block onClick={() => router.push('/')}>
            회원가입
          </Button>
        </Space>
      </Form>
    </SignUpSection>
  );
}

const InputWrapper = styled('div', {});

const SignUpSection = styled('div', {
  width: '400px',
  padding: 20,
  margin: '300px auto',
  backgroundColor: 'LightGray',
});
