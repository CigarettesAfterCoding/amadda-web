import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import Link from 'next/link';

export default function SignIn() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Input
        width={300}
        placeholder="로그인하세요"
        onClick={() => console.log(213)}
      />

      <Button onClick={() => setOpenModal(true)}>눌러주세요</Button>
      <Link href="/sign-in/asdf">어떻게되지?</Link>
      <Modal
        closable
        visible={openModal}
        onCancel={() => setOpenModal(false)}
        onOk={() => setOpenModal(false)}
      />
    </>
  );
}
