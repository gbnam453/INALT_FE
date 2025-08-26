// src/screens/VideoScreen.jsx
import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import Video from '../components/VideoScreen/Video';

export default function VideoScreen() {
    const [isNarrow, setIsNarrow] = useState(false);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden'; // 바디 스크롤 잠금
        return () => { document.body.style.overflow = prev; };
    }, []);

    useEffect(() => {
        const onResize = () => setIsNarrow(window.innerWidth < 900);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // 디스플레이 간격(컴포넌트 사이 간격 크게)
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
                // 화면 전체를 스크롤 컨테이너로 만들어 제목도 함께 움직이게
                overflowY: 'auto',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    // 좌우 여백 & MenuLayout 상/하단 텍스트와 겹치지 않도록 패딩 확보
                    padding: '80px 20px 120px',
                    boxSizing: 'border-box',
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: `${SECTION_GAP}px`,
                }}
            >
                {/* 상단 제목 (스크롤과 함께 움직임) */}
                <div
                    style={{
                        fontFamily: 'Pretendard-Bold',
                        fontSize: 'clamp(26px, 5vw, 36px)',
                        color: 'var(--textcolor)',
                        textAlign: 'center',
                        marginTop: '10px',
                        marginBottom: `${Math.max(SECTION_GAP - 40, 40)}px`,
                    }}
                >
                    MUSIC VIDEO
                </div>

                {/* 비디오 아이템들 */}
                {videos.map((v, idx) => (
                    <Video
                        key={`${v.title}-${idx}`}
                        thumbnail={v.thumbnail}
                        title={v.title}
                        content={v.content}
                        date={v.date}
                        type={v.type} // 'left' | 'right'
                    />
                ))}
            </div>

            {/* 공용 메뉴 (오버레이) */}
            <MenuLayout text="MUSIC VIDEO" type="child" />
        </div>
    );
}
