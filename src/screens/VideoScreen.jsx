import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import Video from '../components/VideoScreen/Video';

export default function VideoScreen() {
    const [isNarrow, setIsNarrow] = useState(false); // 900px 미만을 모바일/좁은 화면 기준

    // 바디 스크롤 잠금
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    // 반응형 분기
    useEffect(() => {
        const onResize = () => setIsNarrow(window.innerWidth < 900);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // 섹션 간격(디스코 스타일과 동일)
    const SECTION_GAP = useMemo(() => (isNarrow ? 80 : 100), [isNarrow]);

    // 디스코 스타일에서 쓰는 기준값들
    const cornerSize = 'clamp(24px, 6vw, 48px)';   // 모서리 버튼 크기
    const edgeOffset = 'clamp(24px, 5vw, 70px)';   // 상/하 여백 기준
    const barH       = 'clamp(56px, 12vw, 72px)';  // 모바일 child 상단바 높이

    // 제목 baseline: 상단 버튼과 같은 가로선(디스코와 동일 계산식)
    const topBaseline = isNarrow
        ? `calc(env(safe-area-inset-top) + ( ${barH} - ${cornerSize} ) / 2)`
        : `calc(env(safe-area-inset-top) + ${edgeOffset} - ${cornerSize} + 10px)`;

    // 제목 폰트(디스코와 동일)
    const TITLE_FONT = 'clamp(34px, 6.5vw, 46px)';

    // 데이터는 경로 문자열로 관리 (import 없이)
    const videos = [
        {
            thumbnail: '/src/assets/images/VideoScreen/Thumbnail1.png',
            title: 'White Prism (Official Visualizer)',
            content:
                'A translucent palette of future-bass textures and soft neon highlights. Immerse in a glassy motion of light.',
            date: '2025. 02. 01',
            type: 'left',
        },
        {
            thumbnail: '/src/assets/images/VideoScreen/Thumbnail2.png',
            title: 'Horizon Bloom (Performance Clip)',
            content:
                'Minimal, airy arrangement with blossoming synths — where motion turns into color, and color into sound.',
            date: '2025. 02. 08',
            type: 'right',
        },
        {
            thumbnail: '/src/assets/images/VideoScreen/Thumbnail3.png',
            title: 'Still / Light (Studio Session)',
            content:
                'Quiet conviction and gentle optimism; a multi-sensory vignette filmed in washed-out tones.',
            date: '2025. 02. 15',
            type: 'left',
        },
        {
            thumbnail: '/src/assets/images/VideoScreen/Thumbnail4.png',
            title: 'Glass Chapel (Teaser)',
            content:
                'Ethereal pads, shimmering chops, and a single focal glow — a glimpse into the world of Ïnalt.',
            date: '2025. 02. 22',
            type: 'right',
        },
    ];

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--bgcolor)',
                overflowY: 'auto',                 // ✅ 제목 포함 전체 스크롤
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    boxSizing: 'border-box',
                    padding: '0 20px 120px',        // ✅ 상단은 topBaseline으로, 하단 넉넉히
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: `${SECTION_GAP}px`,
                }}
            >
                {/* 제목 — 디스코와 동일한 위치/스타일 */}
                <div
                    style={{
                        marginTop: topBaseline,                 // ✅ 상단 버튼 가로선과 정렬
                        fontFamily: 'Pretendard-Bold',
                        fontSize: TITLE_FONT,
                        color: 'var(--textcolor)',
                        textAlign: 'center',
                        marginBottom: `${Math.max(SECTION_GAP, 60)}px`,
                    }}
                >
                    MUSIC VIDEO
                </div>

                {/* 비디오 리스트 */}
                {videos.map((v, idx) => (
                    <Video
                        key={`${v.title}-${idx}`}
                        thumbnail={v.thumbnail}
                        title={v.title}
                        content={v.content}
                        date={v.date}
                        type={v.type}
                    />
                ))}
            </div>

            {/* 공용 메뉴 (오버레이) */}
            <MenuLayout text="MUSIC VIDEO" type="child" />
        </div>
    );
}
