import React from 'react';
import { Modal } from 'antd';

interface DiaryCardProps {
  onClick: () => void;
  isVisiable: boolean;
}

const DiaryModal = ({ onClick, isVisiable }: DiaryCardProps) => {
  return (
    <Modal visible={isVisiable} closable onCancel={onClick} onOk={onClick} />
  );
};

export default DiaryModal;
