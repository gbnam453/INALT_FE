import React, { useEffect } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import ProfileImage from '../assets/images/Common/Profile.png';

export default function HomeScreen() {
    useEffect(() => {
        const o = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = o; };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* 중앙 프로필 이미지 */}
            <img
                src={ProfileImage}
                alt="profile"
                style={{
                    width: '40vh',
                    height: '40vh',
                    objectFit: 'cover',
                    zIndex: 1
                }}
            />

            {/* 메뉴 레이아웃 (텍스트 + 메뉴버튼 + 블러처리) */}
            <MenuLayout text="Ïnalt" />
        </div>
    );
}
