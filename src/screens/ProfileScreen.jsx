import React, { useEffect } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import ProfileImg from '../assets/images/Common/Profile.png';

export default function ProfileScreen() {
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--bgcolor)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {/* 가운데 스크롤 영역 */}
            <div
                style={{
                    height: '100vh',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '30px 20px 40px',   // 상단 여백 40px, 하단도 적당히
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                {/* 상단 제목 */}
                <div
                    style={{
                        fontFamily: 'Pretendard-Bold',
                        fontSize: '30pt',
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
                        width: '250px',
                        height: '250px',
                        objectFit: 'cover',
                        marginBottom: '40px',
                    }}
                />

                {/* 본문 */}
                <div
                    style={{
                        fontFamily: 'Pretendard-Regular',
                        fontSize: '12pt',
                        lineHeight: '1.7',
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                        maxWidth: '700px',
                        color: 'var(--bodytextcolor)',   // 본문 색상 #747474
                    }}
                >
                    {`Hailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...ailing from Seoul, the artist [Ïnalt] creates music rooted in a translucent, refined worldview centered around the color white. This hue represents peace, joy, and an idealistic hope to see the world through a gentle, optimistic lens. Their music goes beyond what can be heard—it's a multi-sensory experience, where sound and visuals merge into immersive, three-dimensional art.
Their world is built upon optimism, conviction, and quiet beauty...`}
                </div>
            </div>

            {/* 모서리 메뉴 / 좌우 텍스트 */}
            <MenuLayout text="PROFILE" type="child" />
        </div>
    );
}
