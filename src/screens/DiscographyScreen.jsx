import React, { useEffect } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import Album from '../components/DiscographyScreen/Album';

export default function DiscographyScreen() {
    useEffect(() => {
        const orig = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = orig };
    }, []);

    const albums = [
        { title: 'Album 1', detail: 'First album detail', img: '/src/assets/images/DiscographyScreen/album1.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 2', detail: 'Second album detail', img: '/src/assets/images/DiscographyScreen/album2.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 3', detail: 'Third album detail', img: '/src/assets/images/DiscographyScreen/album3.png', url: 'https://github.com/gbnam453' },
        { title: 'Album 4', detail: 'Fourth album detail', img: '/src/assets/images/DiscographyScreen/album4.png', url: 'https://github.com/gbnam453' },
    ];

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--bgcolor)',
                overflowY: 'auto',            // ✅ 화면 전체 스크롤 가능
            }}
        >
            {/* 상단 제목 */}
            <div
                style={{
                    fontFamily: 'Pretendard-Bold',
                    fontSize: 'clamp(22px, 4vw, 30px)',
                    marginTop: '40px',
                    marginBottom: '30px',
                    color: 'var(--textcolor)',
                    textAlign: 'center',
                }}
            >
                DISCOGRAPHY
            </div>

            {/* 앨범 그리드 */}
            <div
                className="album-grid"
                style={{
                    display: 'grid',
                    gap: '20px',
                    justifyContent: 'center',   // ✅ 가로 가운데 정렬
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '0 auto 60px',      // 중앙 배치 + 하단 여백
                    padding: '0 20px',
                    boxSizing: 'border-box',
                }}
            >
                {albums.map((a, i) => (
                    <Album key={i} {...a} />
                ))}
            </div>

            {/* 메뉴 */}
            <MenuLayout text="DISCOGRAPHY" type="child" />

            {/* 반응형 스타일 */}
            <style>
                {`
          .album-grid {
            grid-template-columns: repeat(3, auto);
          }
          @media (max-width: 900px) {
            .album-grid {
              grid-template-columns: repeat(2, auto);
            }
          }
          @media (max-width: 600px) {
            .album-grid {
              grid-template-columns: repeat(1, auto);
            }
          }
        `}
            </style>
        </div>
    );
}
