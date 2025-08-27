// src/screens/VideoScreen.jsx
import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import Video from '../components/VideoScreen/Video';

export default function VideoScreen() {
    const [isNarrow, setIsNarrow] = useState(false);
    const [isTopbarMode, setIsTopbarMode] = useState(false);

    // 임계값 (MenuLayout 상단바 모드와 동일 기준 사용)
    const TOPBAR_BREAKPOINT = 600;
    const TOPBAR_HEIGHT_CSS = 'clamp(56px, 12vw, 72px)';

    // 바디 스크롤 잠금
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    // 반응형 분기
    useEffect(() => {
        const onResize = () => {
            setIsNarrow(window.innerWidth < 900);
            setIsTopbarMode(window.innerWidth < TOPBAR_BREAKPOINT);
        };
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // 통일된 레이아웃 상수
    const CONTENT_MAX_WIDTH = 1200;       // px
    const SIDE_PADDING_DESKTOP = 150;     // 데스크톱 좌우 패딩
    const SIDE_PADDING_MOBILE  = 20;      // 모바일 좌우 패딩

    // 컴포넌트 간 간격(제목 하단 여백 계산에 사용)
    const SECTION_GAP = useMemo(() => (isNarrow ? 80 : 100), [isNarrow]);

    // 안전영역 env 변수 (iOS에서 viewport-fit=cover 필요)
    const safeTop = 'env(safe-area-inset-top)';
    const safeBottom = 'env(safe-area-inset-bottom)';

    // 데이터 (경로 문자열로 관리)
    const videos = [
        { thumbnail: '/src/assets/images/VideoScreen/Thumbnail1.png', title: 'White Prism (Official Visualizer)', content: 'A translucent palette of future-bass textures and soft neon highlights. Immerse in a glassy motion of light.', date: '2025. 02. 01', type: 'left' },
        { thumbnail: '/src/assets/images/VideoScreen/Thumbnail2.png', title: 'Horizon Bloom (Performance Clip)', content: 'Minimal, airy arrangement with blossoming synths — where motion turns into color, and color into sound.', date: '2025. 02. 08', type: 'right' },
        { thumbnail: '/src/assets/images/VideoScreen/Thumbnail3.png', title: 'Still / Light (Studio Session)', content: 'Quiet conviction and gentle optimism; a multi-sensory vignette filmed in washed-out tones.', date: '2025. 02. 15', type: 'left' },
        { thumbnail: '/src/assets/images/VideoScreen/Thumbnail4.png', title: 'Glass Chapel (Teaser)', content: 'Ethereal pads, shimmering chops, and a single focal glow — a glimpse into the world of Ïnalt.', date: '2025. 02. 22', type: 'right' },
    ];

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100dvh',                 // iOS 동적 툴바 대응
                backgroundColor: 'var(--bgcolor)',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: CONTENT_MAX_WIDTH,
                    boxSizing: 'border-box',

                    // ✅ 여기가 핵심: 스크롤 컨테이너 자체의 패딩으로 안전영역 확보
                    // - 모바일(topbarMode)일 때: 상단바 높이 + safe-area top 만큼 추가
                    // - 데스크톱일 때: 기존 30px 유지
                    paddingTop: isTopbarMode
                        ? `calc(${TOPBAR_HEIGHT_CSS} + ${safeTop})`
                        : '30px',

                    // 좌우는 통일된 패딩 사용
                    paddingLeft: `${isNarrow ? SIDE_PADDING_MOBILE : SIDE_PADDING_DESKTOP}px`,
                    paddingRight: `${isNarrow ? SIDE_PADDING_MOBILE : SIDE_PADDING_DESKTOP}px`,

                    // 하단은 기본 120px + safe-area bottom 보정
                    paddingBottom: `calc(120px + ${safeBottom})`,

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* 모바일 상단바 모드에서는 제목 숨김 */}
                {!isTopbarMode && (
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
                )}

                {videos.map((v, idx) => (
                    <Video key={`${v.title}-${idx}`} {...v} />
                ))}
            </div>

            {/* 공용 메뉴 (오버레이) */}
            <MenuLayout text="MUSIC VIDEO" type="child" />
        </div>
    );
}
