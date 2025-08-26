import React, { useEffect, useState, useMemo } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import ProfileImg from '../assets/images/Common/Profile.png';

export default function ProfileScreen() {
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
                    PROFILE
                </div>

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

                {/* 본문 */}
                <div
                    style={{
                        fontFamily: 'Pretendard-Regular',
                        fontSize: 'clamp(12px, 2.2vw, 14px)',
                        lineHeight: 1.7,
                        textAlign: 'center',
                        color: 'var(--bodytextcolor)',
                        whiteSpace: 'pre-wrap',
                        maxWidth: 'min(700px, 90vw)',
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

            {/* 공용 메뉴 (오버레이) */}
            <MenuLayout text="PROFILE" type="child" />
        </div>
    );
}
