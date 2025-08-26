// src/components/Common/MenuLayout.jsx
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import MenuIcon from '../../assets/images/HomeScreen/menu.svg';
import { useNavigate } from 'react-router-dom';

export default function MenuLayout({ text = '', type = '' }) {
    const [open, setOpen] = useState(false);
    const [isVertical, setIsVertical] = useState(true);
    const [isNarrow, setIsNarrow] = useState(false); // 폭 600px 미만
    const [leftAdj, setLeftAdj] = useState(0);       // 왼쪽 세로텍스트 실측 보정
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
            setLeftAdj((h - w) / 2);
        }
    };

    // ===== 스타일 상수
    const baseTextStyle = {
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 'clamp(24px, 5vw, 38px)', // 모바일에서도 크게
        color: 'var(--textcolor)',
        cursor: 'pointer',
        transition: 'color .3s, transform .3s',
        whiteSpace: 'nowrap',
        userSelect: 'none',
    };

    const cornerSize   = 'clamp(24px, 6vw, 48px)';  // 버튼 크기
    const edgeOffset   = 'clamp(24px, 5vw, 70px)';  // 테두리로부터 거리
    const topOffset    = `calc(env(safe-area-inset-top) + ${edgeOffset})`;
    const bottomOffset = `calc(env(safe-area-inset-bottom) + ${edgeOffset})`;

    // 텍스트/상단바 블러(버튼은 블러 X)
    const textSelfBlur = open ? 'blur(6px)' : 'none';
    const textBlurTransition = 'filter .28s ease';

    // 상단바(모바일 child 전용)
    const barH = 'clamp(56px, 12vw, 72px)';
    const isMobileChild = isNarrow && type === 'child';

    // 상단바 중앙선과 버튼/텍스트의 수평 중앙을 맞추는 공통 Y좌표
    // topBaseline = safe-area-top + (barH - cornerSize)/2
    const topBaseline = isMobileChild
        ? `calc(env(safe-area-inset-top) + ( ${barH} - ${cornerSize} ) / 2)`
        : topOffset;

    // ===== 표시할 모서리 버튼 집합(모바일+child => 상단 2개만)
    const cornerPositions =
        isMobileChild
            ? ['top-left', 'top-right']
            : ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

    // ===== 모서리 버튼 렌더
    const renderCornerButton = (position) => {
        if (!cornerPositions.includes(position)) return null;

        const st = {
            position: 'fixed',
            width: cornerSize,
            height: cornerSize,
            cursor: 'pointer',
            transform: open ? 'rotate(0deg)' : 'rotate(45deg)',
            transition: 'transform .3s',
            zIndex: 1006, // overlay 위(블러 영향 X)
            WebkitTapHighlightColor: 'transparent',
        };

        // Y축: 모바일+child면 topBaseline, 아니면 기존 오프셋
        if (position.startsWith('top')) {
            st.top = topBaseline;
        }
        if (position.startsWith('bottom')) {
            st.bottom = bottomOffset;
        }
        // X축: 좌/우 고정 간격
        if (position.endsWith('left'))  st.left  = edgeOffset;
        if (position.endsWith('right')) st.right = edgeOffset;

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

    // ===== 오버레이(메뉴)
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
                        { label: 'HOME',        go: () => navigate('/') },
                        { label: 'PROFILE',     go: () => navigate('/profile') },
                        { label: 'DISCOGRAPHY', go: () => navigate('/discography') },
                        { label: 'MUSIC VIDEO', go: () => navigate('/videos') },
                        { label: 'SIGN UP',     go: () => window.open('https://laylo.com/inalt_', '_blank') },
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

            {/* ===== 상/하 텍스트 */}
            {type !== 'child' && (
                <>
                    {/* TOP TEXT BAR: 버튼과 같은 Y(topBaseline), 동일 높이(cornerSize) */}
                    <div
                        style={{
                            position: 'fixed',
                            left: 0, right: 0,
                            top: topBaseline,
                            height: cornerSize,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none',
                            zIndex: 1000,
                            filter: textSelfBlur,
                            transition: textBlurTransition,
                            willChange: 'filter',
                        }}
                    >
                        <span style={baseTextStyle}>{text}</span>
                    </div>

                    {/* BOTTOM TEXT BAR(기존 유지) */}
                    <div
                        style={{
                            position: 'fixed',
                            left: 0, right: 0,
                            bottom: bottomOffset,
                            height: cornerSize,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none',
                            zIndex: 1000,
                            filter: textSelfBlur,
                            transition: textBlurTransition,
                            willChange: 'filter',
                        }}
                    >
                        <span style={baseTextStyle}>{text}</span>
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
                            filter: textSelfBlur,
                            transition: textBlurTransition,
                            willChange: 'filter',
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
                            right: edgeOffset,
                            transform: 'translateY(-50%)',
                            pointerEvents: 'none',
                            zIndex: 1000,
                            writingMode: 'vertical-rl',
                            textOrientation: 'mixed',
                            filter: textSelfBlur,
                            transition: textBlurTransition,
                            willChange: 'filter',
                        }}
                    >
                        <span style={baseTextStyle}>{text}</span>
                    </div>
                </>
            )}
        </div>
    );

    // ===== 상단바 (모바일 + child일 때만) — 제목만, 버튼은 모서리 전역 버튼 사용
    const headerBar = (isMobileChild) ? (
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                height: barH,
                zIndex: 1003,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--bgcolor)',
                pointerEvents: 'none',
                filter: textSelfBlur,
                transition: textBlurTransition,
            }}
        >
            <div
                style={{
                    ...baseTextStyle,
                    fontSize: 'clamp(20px, 5.2vw, 34px)',
                }}
            >
                {text}
            </div>
        </div>
    ) : null;

    return createPortal(
        <>
            {headerBar}
            {overlay}
            {cornerPositions.map(renderCornerButton)}
        </>,
        document.body
    );
}
