import React, { useState } from 'react';
import Link from 'next/link';
import DiaryCard from '@components/DiaryCard';
import { styled } from '@stitches/react';
import DiaryModal from '@components/DiaryModal';

function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      Welcome to Amadda
      <Link href="/sign-up">회원가입</Link>
      <Link href="/sign-in">로그인</Link>
      <FlexWrapper>
        {[...Array(10)].map(() => {
          return <DiaryCard onClick={() => setOpenModal(true)} />;
        })}
        {openModal && (
          <DiaryModal
            isVisiable={openModal}
            onOK={() => setOpenModal(false)}
            onClose={() => setOpenModal(false)}
          />
        )}
      </FlexWrapper>
    </div>
  );
}

export default HomePage;

const FlexWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 10,
});
