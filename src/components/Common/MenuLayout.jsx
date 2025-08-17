import React, { useState, useEffect } from 'react';
import MenuIcon from '../../assets/images/HomeScreen/menu.png';
import { useNavigate } from 'react-router-dom';

export default function MenuLayout({ text = '' }) {
    const [open, setOpen] = useState(false);
    const [isVertical, setIsVertical] = useState(true);
    const navigate = useNavigate();

    // 화면 비율에 따라 메뉴 방향
    useEffect(() => {
        const updateDir = () => setIsVertical(window.innerWidth < window.innerHeight);
        updateDir();
        window.addEventListener('resize', updateDir);
        return () => window.removeEventListener('resize', updateDir);
    }, []);

    const baseTextStyle = {
        fontFamily: 'Pretendard-SemiBold',
        fontSize: '14pt',
        color: 'var(--textcolor)',
        cursor: 'pointer',
        transition: 'color .3s, transform .3s',
    };

    // 메뉴 버튼 모서리 위치 렌더링
    const renderCornerButton = (position) => {
        const st = {
            position: 'absolute',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            transform: open ? 'rotate(0deg)' : 'rotate(45deg)',
            transition: 'transform .3s',
            zIndex: 10,
        };
        if (position === 'top-left') {
            st.top = '20px'; st.left = '20px';
        } else if (position === 'top-right') {
            st.top = '20px'; st.right = '20px';
        } else if (position === 'bottom-left') {
            st.bottom = '20px'; st.left = '20px';
        } else if (position === 'bottom-right') {
            st.bottom = '20px'; st.right = '20px';
        }
        return <img key={position} src={MenuIcon} onClick={() => setOpen(!open)} style={st} alt="menu" />
    };

    return (
        <>
            {/* 투명~blur 백그라운드 레이어 */}
            <div style={{
                position: 'fixed',
                inset: 0,
                zIndex: 5,
                pointerEvents: open ? 'auto' : 'none',
                backdropFilter: open ? 'blur(12px)' : 'none',
                backgroundColor: open ? 'rgba(255,255,255,0.2)' : 'transparent',
                transition: 'backdrop-filter .35s, background-color .35s',
            }}>
                {open && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: isVertical ? 'column' : 'row',
                        gap: isVertical ? '32px' : '64px',
                        alignItems: 'center',
                        zIndex: 8,
                    }}>
                        {[
                            { label: 'HOME', go: () => navigate('/') },
                            { label: 'PROFILE', go: () => navigate('/profile') },
                            { label: 'DISCOGRAPHY', go: () => navigate('/discography') },
                            { label: 'MUSIC VIDEO', go: () => navigate('/video') },
                            { label: 'SIGN UP', go: () => window.open('https://laylo.com/inalt_', '_blank') }
                        ].map(i => (
                            <div
                                key={i.label}
                                style={baseTextStyle}
                                onClick={() => { i.go(); setOpen(false); }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = '#000';
                                    e.currentTarget.style.transform = 'scale(1.15)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = 'var(--textcolor)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                {i.label}
                            </div>
                        ))}
                    </div>
                )}

                {/* 상하좌우 텍스트 */}
                <div style={{
                    position: 'absolute',
                    top: 'calc(env(safe-area-inset-top) + 20px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    ...baseTextStyle,
                }}>{text}</div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%) rotate(270deg)',
                    transformOrigin: 'left center',
                    ...baseTextStyle,
                }}>{text}</div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%) rotate(90deg)',
                    transformOrigin: 'right center',
                    ...baseTextStyle,
                }}>{text}</div>
                <div style={{
                    position: 'absolute',
                    bottom: 'calc(env(safe-area-inset-bottom) + 20px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    ...baseTextStyle,
                }}>{text}</div>
            </div>

            {/* 모서리 버튼들은 blur 레이어 밖에 항상 떠있도록 */}
            {['top-left','top-right','bottom-left','bottom-right'].map(pos => renderCornerButton(pos))}
        </>
    );
}
