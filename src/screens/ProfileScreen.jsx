// src/screens/ProfileScreen.jsx
import React from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import ProfileImg from '../assets/images/Common/Profile.png';

export default function ProfileScreen() {
    return (
        <div
            style={{
                position: 'relative',         // 메뉴와 스크롤 영역의 기준 컨테이너
                inset: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--bgcolor)',
                overflow: 'hidden',           // 화면 밖으로 넘치지 않도록만 처리
            }}
        >
            {/* 가운데 스크롤 영역 (MenuLayout과 분리, 항상 아래 zIndex) */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,                  // ✅ 콘텐츠는 아래
                    height: '100%',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    padding: '30px 20px 40px',  // 상단 30, 좌우 20, 하단 40
                }}
            >
                {/* 상단 제목 */}
                <div
                    style={{
                        fontFamily: 'Pretendard-Bold',
                        fontSize: 'clamp(22px, 4vw, 30px)',
                        marginTop: '40px',
                        marginBottom: '40px',
                        color: 'var(--textcolor)',
                        textAlign: 'center',
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
                        marginBottom: '40px',
                        display: 'block',
                    }}
                />

                {/* 본문 멘트 */}
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

            {/* MenuLayout는 항상 최상단 레이어 */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
                {/* MenuLayout 내부에서 열린 상태(open)일 때만 pointerEvents를 auto로 바꾸도록 이미 구현되어 있음 */}
                <MenuLayout text="PROFILE" type="child" />
            </div>
        </div>
    );
}
