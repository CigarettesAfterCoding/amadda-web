import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface DiaryCardProps {
  onClick: () => void;
}

const DiaryCard = ({ onClick }: DiaryCardProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://i.pinimg.com/564x/a0/d0/89/a0d089129a74e9c938dd68f58d9387e5.jpg"
        />
      }
      onClick={onClick}
    >
      <Meta title="Sailor Saturn" description="www.instagram.com" />
    </Card>
  );
};

export default DiaryCard;
