// src/screens/HomeScreen.jsx
import React, { useEffect } from 'react';
import ProfileImage from '../assets/images/Common/Profile.png';

export default function HomeScreen() {
    useEffect(() => {
        const origOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = origOverflow;
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 1rem',
                paddingBottom: 'env(safe-area-inset-bottom)',    // iOS 안전 영역 바텀 패딩
                backgroundColor: 'var(--bgcolor)',
                boxSizing: 'border-box',
                overscrollBehavior: 'none'
            }}
        >
            {/* 중앙 정사각 이미지 */}
            <img
                src={ProfileImage}
                alt="Profile"
                style={{
                    width: '40vh',
                    height: '40vh',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    margin: '0 1rem'
                }}
            />

            {/* 상단 중앙 텍스트 */}
            <div
                style={{
                    position: 'absolute',
                    top: 'calc(env(safe-area-inset-top) + 20px)',   // 상태바 높이 고려
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: 'Pretendard-SemiBold',
                    fontSize: '14pt'
                }}
            >
                Ïnalt
            </div>

            {/* 좌측 중앙 텍스트 (270° 회전) */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%) rotate(270deg)',
                    transformOrigin: 'left center',
                    fontFamily: 'Pretendard-SemiBold',
                    fontSize: '14pt'
                }}
            >
                Ïnalt
            </div>

            {/* 우측 중앙 텍스트 (90° 회전) */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%) rotate(90deg)',
                    transformOrigin: 'right center',
                    fontFamily: 'Pretendard-SemiBold',
                    fontSize: '14pt'
                }}
            >
                Ïnalt
            </div>

            {/* 하단 중앙 텍스트 */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 'calc(env(safe-area-inset-bottom) + 20px)',  // 하단 내비게이션 고려
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: 'Pretendard-SemiBold',
                    fontSize: '14pt'
                }}
            >
                Ïnalt
            </div>
        </div>
    );
}
