import React from 'react';
import { Modal } from 'antd';

interface DiaryModalProps {
  onClose?: () => void;
  onOK?: () => void;
  isVisiable: boolean;
}

const DiaryModal = ({ onClose, onOK, isVisiable }: DiaryModalProps) => {
  return <Modal visible={isVisiable} closable onCancel={onClose} onOk={onOK} />;
};

export default DiaryModal;
