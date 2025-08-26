// src/screens/HomeScreen.jsx
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
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                // 핵심: safe-area 하단 만큼을 뺀 높이로 중앙정렬
                // 최신 iOS: env(), 구형 iOS: constant() 지원
                height: 'calc(100vh - env(safe-area-inset-bottom))',
                // 구형 iOS 대비 (사파리 오래된 버전)
                height: 'calc(100vh - constant(safe-area-inset-bottom))',
                backgroundColor: 'var(--bgcolor)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}
        >
            {/* 중앙 프로필 이미지 */}
            <img
                src={ProfileImage}
                alt="profile"
                style={{
                    width: '40vh',
                    height: '40vh',
                    maxWidth: '80vw',
                    maxHeight: '80vw',
                    objectFit: 'cover',
                    display: 'block',
                    zIndex: 1,
                    WebkitTouchCallout: 'none',
                }}
                draggable={false}
            />

            {/* 메뉴 오버레이 */}
            <MenuLayout text="Ïnalt" />
        </div>
    );
}
