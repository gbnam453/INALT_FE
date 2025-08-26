import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import Album from '../components/DiscographyScreen/Album';

export default function DiscographyScreen() {
    const [isNarrow, setIsNarrow] = useState(false);

    useEffect(() => {
        const onResize = () => setIsNarrow(window.innerWidth < 900);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    // 공통 레이아웃 상수
    const CONTENT_MAX_W = 1200; // px
    const SIDE_PAD = isNarrow ? 20 : 200; // px (좌우 여백 통일: 데스크톱 200, 모바일 20)
    const SECTION_GAP = useMemo(() => (isNarrow ? 80 : 100), [isNarrow]);
    const TITLE_FONT  = 'clamp(34px, 6.5vw, 46px)';

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
                    maxWidth: 'var(--content-max-width)',
                    boxSizing: 'border-box',
                    paddingTop: '30px',
                    paddingBottom: '120px',
                    paddingLeft: `${SIDE_PAD}px`,  // ✅ 통일된 좌우 여백
                    paddingRight: `${SIDE_PAD}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: `${SECTION_GAP}px`,
                }}
            >
                {/* 제목 — VideoScreen과 동일 스타일/여백 */}
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

                {/* 앨범 그리드 — 내부 실제 보여지는 너비는 maxWidth + 좌우 패딩 통일로 동일 */}
                <div
                    className="album-grid"
                    style={{
                        display: 'grid',
                        gap: '24px',
                        width: '100%',
                        // grid 컨테이너는 Contents의 안쪽 너비(= 동일 패딩 규칙) 안에 존재
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

            {/* 공용 메뉴 (오버레이) */}
            <MenuLayout text="DISCOGRAPHY" type="child" />
        </div>
    );
}
