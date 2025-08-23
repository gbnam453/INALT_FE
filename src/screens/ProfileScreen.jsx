import React, { useEffect } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import ProfileImg from '../assets/images/Common/Profile.png';

export default function ProfileScreen() {
    useEffect(() => {
        const o = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = o };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--bgcolor)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* 가운데 스크롤 영역 */}
            <div style={{
                maxHeight: '80vh',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '140px 20px',   // <-- 상단/하단 메뉴 텍스트만큼 여백 확보
                width: '100%'
            }}>
                {/* 상단 제목 */}
                <div style={{
                    fontFamily: 'Pretendard-Bold',
                    fontSize: '30pt',
                    marginBottom: '40px'
                }}>PROFILE</div>

                {/* 프로필 이미지 */}
                <img
                    src={ProfileImg}
                    alt="profile"
                    style={{
                        width: '250px',
                        height: '250px',
                        objectFit: 'cover',
                        marginBottom: '40px'
                    }}
                />

                {/* 본문 */}
                <div style={{
                    fontFamily: 'Pretendard-Regular',
                    fontSize: '12pt',
                    lineHeight: '1.7',
                    textAlign: 'center',
                    whiteSpace: 'pre-wrap',
                    maxWidth: '700px'
                }}>
                    {`Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...`}
                </div>
            </div>

            {/* 메뉴 */}
            <MenuLayout text="PROFILE" type="child" />
        </div>
    );
}
