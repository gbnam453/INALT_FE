// src/screens/ProfileScreen.jsx
import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import ProfileImg from '../assets/images/Common/Profile.png';

export default function ProfileScreen() {
    // MenuLayout과 동일한 상단바 표시 기준(600px 미만일 때 상단바 노출)
    const TOPBAR_BREAKPOINT = 600;

    const [isTopbarMode, setIsTopbarMode] = useState(false); // MenuLayout 상단바 활성 여부(= 모바일 + child)

    // 바디 스크롤 잠금
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    // 반응형 분기 (MenuLayout의 상단바 노출 조건과 동일하게 600px 기준)
    useEffect(() => {
        const onResize = () => setIsTopbarMode(window.innerWidth < TOPBAR_BREAKPOINT);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // 공통 레이아웃 상수
    const CONTENT_MAX_WIDTH = '1200px';
    const SIDE_PADDING_DESKTOP = 200;  // 좌우 200px
    const SIDE_PADDING_MOBILE  = 20;   // 좌우 20px
    const SECTION_GAP = useMemo(() => (isTopbarMode ? 80 : 100), [isTopbarMode]);
    const TITLE_FONT  = 'clamp(34px, 6.5vw, 46px)';

    // MenuLayout 상단바 높이(같은 식으로 사용) — CSS calc로 직접 적용
    const TOPBAR_HEIGHT_CSS = 'clamp(56px, 12vw, 72px)';

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--bgcolor)',
                overflowY: 'auto',                   // ✅ 제목 포함 전체 스크롤
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: CONTENT_MAX_WIDTH,
                    boxSizing: 'border-box',
                    // ✅ MenuLayout이 상단바를 표시하는 시점부터만 상단바 높이만큼 여백 추가
                    padding: `${
                        isTopbarMode ? `calc(${TOPBAR_HEIGHT_CSS} + 20px)` : '30px'
                    } ${isTopbarMode ? SIDE_PADDING_MOBILE : SIDE_PADDING_DESKTOP}px 120px`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: `${SECTION_GAP}px`,
                }}
            >
                {/* 제목 — MenuLayout 상단바 표시 시(모바일 child 모드)에는 숨김 */}
                {!isTopbarMode && (
                    <div
                        style={{
                            fontFamily: 'Pretendard-Bold',
                            fontSize: TITLE_FONT,          // MenuLayout 텍스트 대비 1.3배
                            color: 'var(--textcolor)',
                            textAlign: 'center',
                            marginTop: '30px',
                            marginBottom: `${Math.max(SECTION_GAP, 60)}px`,
                        }}
                    >
                        PROFILE
                    </div>
                )}

                {/* 프로필 이미지 */}
                <img
                    src={ProfileImg}
                    alt="profile"
                    style={{
                        width: 'min(250px, 70vw)',
                        height: 'auto',
                        objectFit: 'cover',
                        display: 'block',
                        marginBottom: '40px',
                    }}
                />

                {/* 본문 — 컨테이너 너비에 맞게 최대 100%로 확장 */}
                <div
                    style={{
                        fontFamily: 'Pretendard-Regular',
                        fontSize: 'clamp(12px, 2.2vw, 14px)',
                        lineHeight: 1.7,
                        textAlign: 'center',
                        color: 'var(--bodytextcolor)',
                        whiteSpace: 'pre-wrap',
                        maxWidth: '100%',
                        marginBottom: '60px',
                    }}
                >
                    {`Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty. Rather than clinging to fleeting hope, the central theme is one of eternal assurance—a belief in a timeless stability that transcends uncertainty. While many perceive life as full of ambiguity, the artist believes in an everlasting truth that underpins everything. In their worldview, death is not aㅡn end, but a transition into another kind of joy. This is deeply influenced by a Christian faith, infusing their work with a unique and radiant outlook.
Early memories of playing piano during kindergarten laid the foundation for their creativity, while a deeply immersive relationship with nature shaped a dreamlike yet crystal-clear musical style. In high school, they made a decisive turn toward music, preparing for professional music studies and embracing the desire to live without regret. This choice led them to master composition, lyric writing, and arrangement—crafting their art entirely on their own.
Their chosen genre, future bass, perfectly encapsulates their inner world. The genre’s heavy basslines, shimmering synths, and vibrant vocal chops provide the ideal medium to express their aesthetic. Simultaneously, the artist is also a visual creator. For them, music is not just sound—it is light, color, and emotional motion. Within their work, washed-out tones serve as a canvas, with single objects highlighted in complementary, neon, or vivid hues—each acting as a focal point or emotional symbol in their world.
Their creative process is highly intuitive and holistic. Imagination becomes sound, then imagery, and is organically woven together by emotional rhythm. Every project becomes a symphony of music, visuals, and feeling—a unified work of harmony.
Although they have not officially debuted yet, the artist continues to evolve and refine their identity. Their music is more than just a collection of tracks—it is a world, a prayer, and a declaration. Through sound, they seek to answer the questions: "Who am I?" and "What kind of world am I creating?" Their path is one of clarity and quiet conviction, singing of eternity through a lens of minimalism and purity. The message is simple, yet profound: Love is eternal. And music is its purest expression.`}
                </div>
            </div>

            {/* 공용 메뉴 (오버레이). 이 스크린은 child 모드로 사용 */}
            <MenuLayout text="PROFILE" type="child" />
        </div>
    );
}
