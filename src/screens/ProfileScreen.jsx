import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import ProfileImg from '../assets/images/Common/Profile.png';

export default function ProfileScreen() {
    const TOPBAR_BREAKPOINT = 600;

    const [isNarrow, setIsNarrow] = useState(false);
    const [isTopbarMode, setIsTopbarMode] = useState(false);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    useEffect(() => {
        const onResize = () => {
            setIsNarrow(window.innerWidth < 900);
            setIsTopbarMode(window.innerWidth < TOPBAR_BREAKPOINT);
        };
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const CONTENT_MAX_WIDTH = 1200;
    const SIDE_PADDING_DESKTOP = 200;
    const SIDE_PADDING_MOBILE  = 20;
    const SECTION_GAP = useMemo(() => (isNarrow ? 80 : 100), [isNarrow]);
    const TITLE_FONT  = 'clamp(34px, 6.5vw, 46px)';
    const TOPBAR_HEIGHT_CSS = 'clamp(56px, 12vw, 72px)';

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100dvh',               // ✅
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
                    maxWidth: `${CONTENT_MAX_WIDTH}px`,
                    boxSizing: 'border-box',
                    paddingTop: isTopbarMode ? `calc(${TOPBAR_HEIGHT_CSS} + 20px)` : '30px',
                    paddingBottom: 'calc(140px + env(safe-area-inset-bottom))', // ✅
                    paddingLeft: `${isNarrow ? SIDE_PADDING_MOBILE : SIDE_PADDING_DESKTOP}px`,
                    paddingRight: `${isNarrow ? SIDE_PADDING_MOBILE : SIDE_PADDING_DESKTOP}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: `${SECTION_GAP}px`,
                }}
            >
                {!isTopbarMode && (
                    <div
                        style={{
                            fontFamily: 'Pretendard-Bold',
                            fontSize: TITLE_FONT,
                            color: 'var(--textcolor)',
                            textAlign: 'center',
                            marginTop: '30px',
                            marginBottom: `${Math.max(SECTION_GAP, 60)-100}px`,
                        }}
                    >
                        PROFILE
                    </div>
                )}

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

                {/* ✅ 하단 안전영역 스페이서 */}
                <div style={{ height: 'env(safe-area-inset-bottom)' }} />
            </div>

            <MenuLayout text="PROFILE" type="child" />
        </div>
    );
}
