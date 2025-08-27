// src/screens/DiscographyScreen.jsx
import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import Album from '../components/DiscographyScreen/Album';

export default function DiscographyScreen() {
    // MenuLayout 상단바 표시 기준과 동일하게 600px 미만을 모바일(topbar)로 간주
    const TOPBAR_BREAKPOINT = 600;

    const [isNarrow, setIsNarrow] = useState(false);      // 레이아웃(그리드) 분기용 900px
    const [isTopbarMode, setIsTopbarMode] = useState(false); // MenuLayout 상단바 활성 시점(600px)

    useEffect(() => {
        const onResize = () => {
            setIsNarrow(window.innerWidth < 900);
            setIsTopbarMode(window.innerWidth < TOPBAR_BREAKPOINT);
        };
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // 바디 스크롤 잠금
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    // 공통 레이아웃 상수
    const CONTENT_MAX_W = 1200;                 // px
    const SIDE_PAD = isNarrow ? 20 : 200;       // 좌우 여백 통일: 데스크톱 200px, 모바일 20px
    const SECTION_GAP = useMemo(() => (isNarrow ? 80 : 100), [isNarrow]);
    const TITLE_FONT  = 'clamp(34px, 6.5vw, 46px)';
    const TOPBAR_HEIGHT_CSS = 'clamp(56px, 12vw, 72px)'; // MenuLayout 상단바 높이와 동일

    const albums = [
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
                    maxWidth: `${CONTENT_MAX_W}px`,          // 숫자 상수를 명확히 사용
                    boxSizing: 'border-box',
                    // ✅ MenuLayout 상단바가 나오는 시점부터 제목을 숨기고, 상단바 높이만큼 패딩 보정
                    paddingTop: isTopbarMode ? `calc(${TOPBAR_HEIGHT_CSS} + 20px)` : '30px',
                    paddingBottom: '120px',
                    paddingLeft: `${SIDE_PAD}px`,
                    paddingRight: `${SIDE_PAD}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: `${SECTION_GAP}px`,
                }}
            >
                {/* 제목 — VideoScreen 스타일과 동일, 단 상단바 모드(isTopbarMode)일 땐 감춤 */}
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

                {/* 앨범 그리드 — 내부 실제 보여지는 너비는 통일된 패딩 규칙을 따름 */}
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

                {/* 반응형 그리드: PC 3열, 모바일 2열 */}
                <style>
                    {`
            .album-grid { 
              grid-template-columns: repeat(3, 1fr);
            }
            @media (max-width: 900px) {
              .album-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 600px) {
              .album-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
          `}
                </style>
            </div>

            {/* 공용 메뉴 (오버레이) — child 모드 */}
            <MenuLayout text="DISCOGRAPHY" type="child" />
        </div>
    );
}
