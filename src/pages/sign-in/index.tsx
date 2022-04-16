import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';

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
      <Modal
        closable
        visible={openModal}
        onCancel={() => setOpenModal(false)}
        onOk={() => setOpenModal(false)}
      />
    </>
  );
}
