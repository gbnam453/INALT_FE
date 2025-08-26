// src/screens/VideoScreen.jsx
import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import Video from '../components/VideoScreen/Video';

export default function VideoScreen() {
    const [isNarrow, setIsNarrow] = useState(false);

    // 바디 스크롤 잠금
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    // 반응형 분기
    useEffect(() => {
        const onResize = () => setIsNarrow(window.innerWidth < 900);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // 컨텐츠 레이아웃과 동일한 정책으로 통일
    const CONTENT_MAX_WIDTH = '1300px';
    const SIDE_PADDING_DESKTOP = 200; // 좌우 200px (데스크톱)
    const SIDE_PADDING_MOBILE  = 20;  // 좌우 20px (모바일)

    // 컴포넌트 간 간격(유지)
    const SECTION_GAP = useMemo(() => (isNarrow ? 80 : 100), [isNarrow]);

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
                overflowY: 'auto',            // ✅ 제목 포함 전체가 스크롤
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: CONTENT_MAX_WIDTH,
                    boxSizing: 'border-box',
                    // ✅ 좌우 여백을 200px(모바일 20px)로 통일
                    padding: `30px ${isNarrow ? SIDE_PADDING_MOBILE : SIDE_PADDING_DESKTOP}px 120px`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: `${SECTION_GAP}px`,
                }}
            >
                {/* 제목 (같이 스크롤) */}
                <div
                    style={{
                        fontFamily: 'Pretendard-Bold',
                        fontSize: 'clamp(34px, 6.5vw, 46px)',
                        color: 'var(--textcolor)',
                        textAlign: 'center',
                        marginTop: '30px',
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
