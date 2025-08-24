// src/screens/VideoScreen.jsx
import React, { useEffect } from 'react';
import MenuLayout from '../components/Common/MenuLayout';

export default function VideoScreen() {
    useEffect(() => {
        const orig = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = orig; };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--bgcolor)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* 상단 제목 */}
            <div
                style={{
                    fontFamily: 'Pretendard-Bold',
                    fontSize: 'clamp(22px, 4vw, 30px)',
                    marginTop: '40px',
                    color: 'var(--textcolor)',
                    textAlign: 'center',
                }}
            >
                MUSIC VIDEO
            </div>

            {/* 비디오 콘텐츠 영역(예시) */}
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    padding: '20px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* TODO: 비디오 리스트/Embed 추가 예정 */}
                <div
                    style={{
                        color: 'var(--bodytextcolor)',
                        fontSize: 'clamp(12px, 2.2vw, 14px)',
                        textAlign: 'center',
                    }}
                >
                    Coming soon.
                </div>
            </div>

            {/* 메뉴 */}
            <MenuLayout text="MUSIC VIDEO" type="child" />
        </div>
    );
}
