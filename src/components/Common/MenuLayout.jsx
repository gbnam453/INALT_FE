import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import MenuIcon from '../../assets/images/HomeScreen/menu.svg';
import { useNavigate } from 'react-router-dom';

/**
 * MenuLayout
 * - 메뉴 버튼(모서리 4개) + 상/하/좌/우 텍스트 표시
 * - 메뉴 오픈 시: 화면 전체 블러(단, 모든 메뉴버튼과 중앙 링크는 제외)
 * - type === 'child' 인 경우:
 *    - 데스크톱/태블릿: 좌/우 텍스트 노출, 상/하 텍스트 비노출
 *    - 모바일(<600px): 상단바 모드(좌측/우측 버튼 + 제목 중앙), 좌/우 텍스트/하단 버튼 숨김
 * - 모바일 child 상단바 배경: var(--bgcolor)
 * - 제목 폰트는 메뉴 텍스트의 1.3배는 ContentsLayout에서 제공(여기선 모바일 child 상단바에서만 제목 렌더)
 */
export default function MenuLayout({ text = '', type = '' }) {
    const [open, setOpen] = useState(false);
    const [isVertical, setIsVertical] = useState(true);
    const [isNarrow, setIsNarrow] = useState(false); // <600px
    const [leftAdj, setLeftAdj] = useState(0);       // 왼쪽 270deg 실측 보정
    const leftRef = useRef(null);
    const navigate = useNavigate();

    // 치수 상수 (ContentsLayout과 공유되는 감각)
    const cornerSize = 'clamp(24px, 6vw, 48px)'; // 모서리 버튼 크기
    const edgeOffset = 'clamp(24px, 5vw, 70px)'; // 가장자리 여백
    const topOffset  = `calc(env(safe-area-inset-top) + ${edgeOffset})`;
    const bottomOffset = `calc(env(safe-area-inset-bottom) + ${edgeOffset})`;
    const barH = 'clamp(56px, 12vw, 72px)';      // 모바일 child 상단바 높이

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

    const baseTextStyle = {
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 'clamp(24px, 5vw, 38px)', // 메뉴 텍스트 기준(제목은 1.3배: ContentsLayout에서)
        color: 'var(--textcolor)',
        cursor: 'pointer',
        transition: 'color .3s, transform .3s',
        whiteSpace: 'nowrap',
        userSelect: 'none',
    };

    // 중앙 링크와 버튼은 블러 제외, 그 외는 블러
    const overlayStyle = {
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        pointerEvents: open ? 'auto' : 'none',
        backdropFilter: open ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: open ? 'blur(12px)' : 'none',
        backgroundColor: open ? 'rgba(255,255,255,0.08)' : 'transparent',
        transition: 'backdrop-filter .35s, background-color .35s',
    };

    // 모바일 child 상단바 모드 여부
    const isMobileChildBar = isNarrow && type === 'child';

    // 버튼 공통 렌더러 (상단바 모드일 때는 top에 정렬)
    const renderCornerButton = (position) => {
        // 모바일 child에서는 하단 버튼 숨김
        if (isMobileChildBar && (position === 'bottom-left' || position === 'bottom-right')) {
            return null;
        }

        const st = {
            position: 'fixed',
            width: cornerSize,
            height: cornerSize,
            cursor: 'pointer',
            transform: open ? 'rotate(0deg)' : 'rotate(45deg)',
            transition: 'transform .3s',
            zIndex: 1002, // 오버레이 위 (블러 제외)
            WebkitTapHighlightColor: 'transparent',
        };

        if (isMobileChildBar) {
            // 상단바 모드: 수평 중앙선 정확히 맞춤
            if (position === 'top-left')  { st.top = `calc(env(safe-area-inset-top) + (${barH} - ${cornerSize})/2)`; st.left = edgeOffset; }
            if (position === 'top-right') { st.top = `calc(env(safe-area-inset-top) + (${barH} - ${cornerSize})/2)`; st.right = edgeOffset; }
        } else {
            if (position === 'top-left')     { st.top = topOffset; st.left = edgeOffset; }
            if (position === 'top-right')    { st.top = topOffset; st.right = edgeOffset; }
            if (position === 'bottom-left')  { st.bottom = bottomOffset; st.left = edgeOffset; }
            if (position === 'bottom-right') { st.bottom = bottomOffset; st.right = edgeOffset; }
        }

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

    // 중앙 링크 (HOME / PROFILE / ...)
    const CentralMenu = () => (
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
                zIndex: 1001, // 오버레이 위(블러 제외)
            }}
        >
            {[
                { label: 'HOME',        go: () => navigate('/') },
                { label: 'PROFILE',     go: () => navigate('/profile') },
                { label: 'DISCOGRAPHY', go: () => navigate('/discography') },
                { label: 'MUSIC VIDEO', go: () => navigate('/videos') },
                { label: 'SIGN UP',     go: () => window.open('https://laylo.com/inalt_', '_blank') },
            ].map(i => (
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
    );

    // 상/하 텍스트 (child가 아닐 때만)
    const TopBottomTexts = () => {
        if (type === 'child') return null;
        const filterBlur = open ? 'blur(6px)' : 'none';
        const textStyle = { ...baseTextStyle, pointerEvents: 'none', filter: filterBlur, transition: 'filter .28s ease' };
        return (
            <>
                <div style={{ position: 'fixed', top: topOffset, left: '50%', transform: 'translateX(-50%)', zIndex: 999 }}>
                    <span style={textStyle}>{text}</span>
                </div>
                <div style={{ position: 'fixed', bottom: bottomOffset, left: '50%', transform: 'translateX(-50%)', zIndex: 999 }}>
                    <span style={textStyle}>{text}</span>
                </div>
            </>
        );
    };

    // 좌/우 텍스트(모바일에서는 숨김)
    const LeftRightTexts = () => {
        if (isNarrow) return null;
        const filterBlur = open ? 'blur(6px)' : 'none';
        return (
            <>
                {/* 왼쪽 - 270deg 보정 */}
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: `calc(${edgeOffset} + ${leftAdj}px)`,
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        zIndex: 999,
                        filter: filterBlur,
                        transition: 'filter .28s ease',
                    }}
                >
                    <div
                        ref={leftRef}
                        style={{ transform: 'rotate(270deg)', transformOrigin: 'center center', ...baseTextStyle }}
                    >
                        {text}
                    </div>
                </div>

                {/* 오른쪽 - writing-mode */}
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        right: edgeOffset,
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        zIndex: 999,
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        filter: filterBlur,
                        transition: 'filter .28s ease',
                    }}
                >
                    <span style={baseTextStyle}>{text}</span>
                </div>
            </>
        );
    };

    // 모바일 child 상단바 (제목 + 좌/우 버튼 위치 기준선 통일)
    const MobileChildTopBar = () => {
        if (!isMobileChildBar) return null;
        // 제목은 블러 대상(규칙 2), 버튼은 블러 제외
        const titleBlur = open ? 'blur(6px)' : 'none';
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 'env(safe-area-inset-top)',
                    left: 0,
                    right: 0,
                    height: barH,
                    backgroundColor: 'var(--bgcolor)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                }}
            >
                <div
                    style={{
                        fontFamily: 'Pretendard-Bold',
                        // 메뉴 텍스트(24~38의 clamp)의 1.3배 ≈ clamp(31px, 6.5vw, 49px) 정도
                        fontSize: 'clamp(31px, 6.5vw, 49px)',
                        color: 'var(--textcolor)',
                        filter: titleBlur,
                        transition: 'filter .28s ease',
                    }}
                >
                    {text}
                </div>
            </div>
        );
    };

    const overlay = (
        <div style={overlayStyle}>
            {open && <CentralMenu />}
            <TopBottomTexts />
            <LeftRightTexts />
            {/* 모바일 child 전용 상단바 */}
            <MobileChildTopBar />
        </div>
    );

    return createPortal(
        <>
            {overlay}
            {/* 모서리 버튼(오버레이 위, 항상 선명) */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(renderCornerButton)}
        </>,
        document.body
    );
}
