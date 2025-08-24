import React, { useState, useEffect } from 'react';
import MenuIcon from '../../assets/images/HomeScreen/menu.svg';
import { useNavigate } from 'react-router-dom';

export default function MenuLayout({ text = '', type = '' }) {
    const [open, setOpen] = useState(false);
    const [isVertical, setIsVertical] = useState(true);
    const [isNarrow, setIsNarrow] = useState(false); // 🔥 화면 폭 체크
    const navigate = useNavigate();

    useEffect(() => {
        const updateDir = () => setIsVertical(window.innerWidth < window.innerHeight);
        const updateNarrow = () => setIsNarrow(window.innerWidth < 600); // 600px 기준
        updateDir();
        updateNarrow();
        window.addEventListener('resize', updateDir);
        window.addEventListener('resize', updateNarrow);
        return () => {
            window.removeEventListener('resize', updateDir);
            window.removeEventListener('resize', updateNarrow);
        };
    }, []);

    const baseTextStyle = {
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 'clamp(15px, 3.5vw, 30px)',
        color: 'var(--textcolor)',
        cursor: 'pointer',
        transition: 'color .3s, transform .3s',
        whiteSpace: 'nowrap',
        userSelect: 'none',
    };

    const cornerSize = 'clamp(24px, 6vw, 48px)';
    const sideOffset = 'clamp(40px, 6vw, 60px)';

    const renderCornerButton = (position) => {
        const st = {
            position: 'fixed',
            width: cornerSize,
            height: cornerSize,
            cursor: 'pointer',
            transform: open ? 'rotate(0deg)' : 'rotate(45deg)',
            transition: 'transform .3s',
            zIndex: 1002,
            WebkitTapHighlightColor: 'transparent',
        };

        // ✅ 모서리에서 떨어질 거리
        const offset = 'clamp(20px, 5vw, 60px)';

        if (position === 'top-left') {
            st.top = offset;
            st.left = offset;
        } else if (position === 'top-right') {
            st.top = offset;
            st.right = offset;
        } else if (position === 'bottom-left') {
            st.bottom = offset;
            st.left = offset;
        } else if (position === 'bottom-right') {
            st.bottom = offset;
            st.right = offset;
        }

        return (
            <img
                key={position}
                src={MenuIcon}
                onClick={() => setOpen((v) => !v)}
                style={st}
                alt="menu"
            />
        );
    };

    return (
        <>
            {/* blur 레이어 */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 1000,
                    pointerEvents: open ? 'auto' : 'none',
                    backdropFilter: open ? 'blur(12px)' : 'none',
                    WebkitBackdropFilter: open ? 'blur(12px)' : 'none',
                    backgroundColor: open ? 'rgba(255,255,255,0.08)' : 'transparent',
                    transition: 'backdrop-filter .35s, background-color .35s',
                }}
            >
                {open && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            flexDirection: isVertical ? 'column' : 'row',
                            gap: isVertical ? '28px' : '64px',
                            alignItems: 'center',
                            zIndex: 1001,
                        }}
                    >
                        {[
                            { label: 'HOME', go: () => navigate('/') },
                            { label: 'PROFILE', go: () => navigate('/profile') },
                            { label: 'DISCOGRAPHY', go: () => navigate('/discography') },
                            { label: 'MUSIC VIDEO', go: () => navigate('/videos') },
                            { label: 'SIGN UP', go: () => window.open('https://laylo.com/inalt_', '_blank') },
                        ].map((i) => (
                            <div
                                key={i.label}
                                style={baseTextStyle}
                                onClick={() => { i.go(); setOpen(false); }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#000';
                                    e.currentTarget.style.transform = 'scale(1.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--textcolor)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                {i.label}
                            </div>
                        ))}
                    </div>
                )}

                {/* type !== 'child' 일 때만 상/하 텍스트 */}
                {type !== 'child' && (
                    <>
                        <div
                            style={{
                                position: 'fixed',
                                top: 'calc(env(safe-area-inset-top) + 45px)',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                ...baseTextStyle,
                                pointerEvents: 'none',
                                zIndex: 1000,
                            }}
                        >
                            {text}
                        </div>
                        <div
                            style={{
                                position: 'fixed',
                                bottom: 'calc(env(safe-area-inset-bottom) + 45px)',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                ...baseTextStyle,
                                pointerEvents: 'none',
                                zIndex: 1000,
                            }}
                        >
                            {text}
                        </div>
                    </>
                )}

                {/* 좌/우 텍스트 (좁은 화면에서는 숨김) */}
                {!isNarrow && (
                    <>
                        <div
                            style={{
                                position: 'fixed',
                                top: '50%',
                                left: sideOffset,
                                transform: 'translate(-50%, -50%) rotate(270deg)',
                                transformOrigin: 'center center',
                                ...baseTextStyle,
                                pointerEvents: 'none',
                                zIndex: 1000,
                            }}
                        >
                            {text}
                        </div>
                        <div
                            style={{
                                position: 'fixed',
                                top: '50%',
                                right: sideOffset,
                                transform: 'translate(50%, -50%) rotate(90deg)',
                                transformOrigin: 'center center',
                                ...baseTextStyle,
                                pointerEvents: 'none',
                                zIndex: 1000,
                            }}
                        >
                            {text}
                        </div>
                    </>
                )}
            </div>

            {/* 모서리 메뉴버튼 */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) =>
                renderCornerButton(pos)
            )}
        </>
    );
}
