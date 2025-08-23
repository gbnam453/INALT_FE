import React, { useEffect } from 'react';
import MenuLayout from '../components/Common/MenuLayout';

export default function DiscographyScreen() {
    useEffect(() => {
        const orig = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = orig };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--bgcolor)',
            display: 'flex',
            justifyContent: 'center',
        }}>
            {/* 상단 제목 */}
            <div
                style={{
                    fontFamily: 'Pretendard-Bold',
                    fontSize: '30pt',
                    marginTop: '40px',
                    color: 'var(--textcolor)',
                    textAlign: 'center',
                    position: 'absolute',
                    top: 0,
                }}
            >
                DISCOGRAPHY
            </div>

            {/* 메뉴 */}
            <MenuLayout text="DISCOGRAPHY" type="child" />
        </div>
    );
}
