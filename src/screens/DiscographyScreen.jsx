// src/screens/DiscographyScreen.jsx
import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import Album from '../components/DiscographyScreen/Album';

export default function DiscographyScreen() {
    // 🔸 MenuLayout의 모바일 상단바 표시 조건과 동일하게 600px 기준 사용
    const TOPBAR_BREAKPOINT = 600;
    const [isTopbarMode, setIsTopbarMode] = useState(false); // MenuLayout 상단바 모드와 동기화

    useEffect(() => {
        const syncWithMenuLayout = () => setIsTopbarMode(window.innerWidth < TOPBAR_BREAKPOINT);
        syncWithMenuLayout();
        window.addEventListener('resize', syncWithMenuLayout);
        return () => window.removeEventListener('resize', syncWithMenuLayout);
    }, []);

    // 바디 스크롤 잠금
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    // 공통 레이아웃 상수
    const CONTENT_MAX_WIDTH = 'var(--content-max-width, 1200px)';
    const SIDE_PADDING_DESKTOP = 200; // px
    const SIDE_PADDING_MOBILE  = 20;  // px
    const SIDE_PAD = isTopbarMode ? SIDE_PADDING_MOBILE : SIDE_PADDING_DESKTOP;

    // 컴포넌트 간 간격(제목 아래 여백 계산에 사용)
    const SECTION_GAP = useMemo(() => (isTopbarMode ? 80 : 100), [isTopbarMode]);
    const TITLE_FONT  = 'clamp(34px, 6.5vw, 46px)';

    // MenuLayout(모바일 child 상단바) 높이
    const BAR_H = 'clamp(56px, 12vw, 72px)';

    // 상단 패딩: 상단바 모드일 때만 상단바+세이프에어리어 고려
    const paddingTopValue = isTopbarMode
        ? `calc(env(safe-area-inset-top) + ${BAR_H} + 10px)`
        : '30px';

    const albums = [
        { title: 'Album 1', detail: 'First album detail', img: '/src/assets/images/DiscographyScreen/album1.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 2', detail: 'Second album detail', img: '/src/assets/images/DiscographyScreen/album2.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 3', detail: 'Third album detail', img: '/src/assets/images/DiscographyScreen/album3.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 4', detail: 'Fourth album detail', img: '/src/assets/images/DiscographyScreen/album4.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 1', detail: 'First album detail', img: '/src/assets/images/DiscographyScreen/album1.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 2', detail: 'Second album detail', img: '/src/assets/images/DiscographyScreen/album2.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 3', detail: 'Third album detail', img: '/src/assets/images/DiscographyScreen/album3.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 4', detail: 'Fourth album detail', img: '/src/assets/images/DiscographyScreen/album4.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 1', detail: 'First album detail', img: '/src/assets/images/DiscographyScreen/album1.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 2', detail: 'Second album detail', img: '/src/assets/images/DiscographyScreen/album2.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 3', detail: 'Third album detail', img: '/src/assets/images/DiscographyScreen/album3.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 4', detail: 'Fourth album detail', img: '/src/assets/images/DiscographyScreen/album4.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 1', detail: 'First album detail', img: '/src/assets/images/DiscographyScreen/album1.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 2', detail: 'Second album detail', img: '/src/assets/images/DiscographyScreen/album2.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 3', detail: 'Third album detail', img: '/src/assets/images/DiscographyScreen/album3.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 4', detail: 'Fourth album detail', img: '/src/assets/images/DiscographyScreen/album4.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 1', detail: 'First album detail', img: '/src/assets/images/DiscographyScreen/album1.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 2', detail: 'Second album detail', img: '/src/assets/images/DiscographyScreen/album2.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 3', detail: 'Third album detail', img: '/src/assets/images/DiscographyScreen/album3.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 4', detail: 'Fourth album detail', img: '/src/assets/images/DiscographyScreen/album4.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 1', detail: 'First album detail', img: '/src/assets/images/DiscographyScreen/album1.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 2', detail: 'Second album detail', img: '/src/assets/images/DiscographyScreen/album2.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 3', detail: 'Third album detail', img: '/src/assets/images/DiscographyScreen/album3.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 4', detail: 'Fourth album detail', img: '/src/assets/images/DiscographyScreen/album4.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 1', detail: 'First album detail', img: '/src/assets/images/DiscographyScreen/album1.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 2', detail: 'Second album detail', img: '/src/assets/images/DiscographyScreen/album2.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 3', detail: 'Third album detail', img: '/src/assets/images/DiscographyScreen/album3.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 4', detail: 'Fourth album detail', img: '/src/assets/images/DiscographyScreen/album4.png', url: 'https://github.com/gbnam453' },
    ];

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--bgcolor)',
                overflowY: 'auto',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: CONTENT_MAX_WIDTH,
                    boxSizing: 'border-box',
                    paddingTop: paddingTopValue,                                       // ✅ 상단바 모드시 제목 대신 패딩
                    paddingBottom: 'calc(120px + env(safe-area-inset-bottom))',        // ✅ iOS 하단 안전영역
                    paddingLeft: `${SIDE_PAD}px`,
                    paddingRight: `${SIDE_PAD}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* 제목 — MenuLayout 상단바가 나타나는 시점과 동일하게 숨김 */}
                {!isTopbarMode && (
                    <div
                        style={{
                            fontFamily: 'Pretendard-Bold',
                            fontSize: TITLE_FONT,
                            color: 'var(--textcolor)',
                            textAlign: 'center',
                            marginTop: '30px',
                            marginBottom: `${Math.max(SECTION_GAP, 60)}px`,
                        }}
                    >
                        DISCOGRAPHY
                    </div>
                )}

                {/* 앨범 그리드 */}
                <div
                    className="album-grid"
                    style={{
                        display: 'grid',
                        gap: '24px',
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    {albums.map((a, i) => (
                        <Album key={i} {...a} />
                    ))}
                </div>

                {/* 반응형 그리드: PC 3열, 모바일(=상단바 모드) 2열 */}
                <style>
                    {`
            .album-grid { 
              grid-template-columns: repeat(3, 1fr);
            }
            @media (max-width: ${TOPBAR_BREAKPOINT}px) {
              .album-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
          `}
                </style>
            </div>

            {/* 공용 메뉴 (오버레이) */}
            <MenuLayout text="DISCOGRAPHY" type="child" />
        </div>
    );
}
