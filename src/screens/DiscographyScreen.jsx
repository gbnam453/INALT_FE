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
            backgroundColor: 'var(--bgcolor)'
        }}>
            {/* 콘텐츠 영역 */}

            <MenuLayout text="DISCOGRAPHY" type="child" />
        </div>
    );
}
