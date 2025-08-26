// src/components/Common/MenuLayout.jsx
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import MenuIcon from '../../assets/images/HomeScreen/menu.svg';
import { useNavigate } from 'react-router-dom';

export default function MenuLayout({ text = '', type = '' }) {
    const [open, setOpen] = useState(false);
    const [isVertical, setIsVertical] = useState(true);
    const [isNarrow, setIsNarrow] = useState(false); // 폭 600px 미만
    const [leftAdj, setLeftAdj] = useState(0);       // 왼쪽 실측 보정
    const leftRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const onResize = () => {
            setIsVertical(window.innerWidth < window.innerHeight);
            setIsNarrow(window.innerWidth < 600);
            measureLeft();
        };
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        measureLeft();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, type]);

    const measureLeft = () => {
        if (isNarrow) { setLeftAdj(0); return; }
        if (leftRef.current) {
            const w = leftRef.current.offsetWidth;
            const h = leftRef.current.offsetHeight;
            // 왼쪽(270°) 회전 시 박스 차이 보정
            setLeftAdj((h - w) / 2);
        }
    };

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
    const edgeOffset = 'clamp(24px, 5vw, 70px)';
    const topOffset = `calc(env(safe-area-inset-top) + ${edgeOffset})`;
    const bottomOffset = `calc(env(safe-area-inset-bottom) + ${edgeOffset})`;

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
        if (position === 'top-left') { st.top = edgeOffset; st.left = edgeOffset; }
        else if (position === 'top-right') { st.top = edgeOffset; st.right = edgeOffset; }
        else if (position === 'bottom-left') { st.bottom = edgeOffset; st.left = edgeOffset; }
        else if (position === 'bottom-right') { st.bottom = edgeOffset; st.right = edgeOffset; }
        return (
            <img
                key={position}
                src={MenuIcon}
                onClick={() => setOpen(v => !v)}
                style={st}
                alt="menu"
            />
        );
    };

    const overlay = (
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

            {/* 상/하 텍스트 */}
            {type !== 'child' && (
                <>
                    <div
                        style={{
                            position: 'fixed',
                            top: topOffset,
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
                            bottom: bottomOffset,
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
                    {/* 왼쪽 — 270° + 실측 보정 */}
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: `calc(${edgeOffset} + ${leftAdj}px)`,
                            transform: 'translateY(-50%)',
                            pointerEvents: 'none',
                            zIndex: 1000,
                        }}
                    >
                        <div
                            ref={leftRef}
                            style={{
                                transform: 'rotate(270deg)',
                                transformOrigin: 'center center',
                                ...baseTextStyle,
                            }}
                        >
                            {text}
                        </div>
                    </div>

                    {/* 오른쪽 — writing-mode로 x축 흔들림 제거 */}
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            right: edgeOffset,              // ← 테두리에서 절대 거리 고정
                            transform: 'translateY(-50%)',  // y축 중앙
                            pointerEvents: 'none',
                            zIndex: 1000,
                            writingMode: 'vertical-rl',     // ← 회전 대신 세로 글줄
                            textOrientation: 'mixed',
                            // 필요 시 아래 줄을 켜면 글자 진행 방향이 rotate(90deg) 느낌과 동일하게 뒤집힙니다.
                            // transform: 'translateY(-50%) scaleY(-1)',
                        }}
                    >
                        <span style={baseTextStyle}>{text}</span>
                    </div>
                </>
            )}
        </div>
    );

    return createPortal(
        <>
            {overlay}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(renderCornerButton)}
        </>,
        document.body
    );
}
