import React, { useEffect } from 'react';
import MenuLayout from '../components/Common/MenuLayout';
import Album from '../components/DiscographyScreen/Album';

export default function DiscographyScreen() {
    useEffect(() => {
        const orig = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = orig };
    }, []);

    // 앨범 데이터 한 곳에서 관리
    const albums = [
        {
            title: 'Album 1',
            detail: 'First album detail',
            img: '/src/assets/images/DiscographyScreen/album1.png',
            url: 'https://github.com/gbnam453'
        },
        {
            title: 'Album 2',
            detail: 'Second album detail',
            img: '/src/assets/images/DiscographyScreen/album2.png',
            url: 'https://github.com/gbnam453'
        },
        {
            title: 'Album 3',
            detail: 'Third album detail',
            img: '/src/assets/images/DiscographyScreen/album3.png',
            url: 'https://github.com/gbnam453'
        },
        {
            title: 'Album 4',
            detail: 'Fourth album detail',
            img: '/src/assets/images/DiscographyScreen/album4.png',
            url: 'https://github.com/gbnam453'
        },
    ];

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--bgcolor)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {/* 상단 제목 */}
            <div
                style={{
                    fontFamily: 'Pretendard-Bold',
                    fontSize: '30pt',
                    marginTop: '40px',
                    color: 'var(--textcolor)',
                    textAlign: 'center',
                }}
            >
                DISCOGRAPHY
            </div>

            {/* 앨범 그리드 */}
            <div
                style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, auto)',
                    gap: '20px',
                    justifyContent: 'center',
                    alignContent: 'center',
                    width: '100%',
                }}
            >
                {albums.map((a, i) => (
                    <Album
                        key={i}
                        title={a.title}
                        detail={a.detail}
                        img={a.img}
                        url={a.url}
                    />
                ))}
            </div>

            {/* 메뉴 */}
            <MenuLayout text="DISCOGRAPHY" type="child" />
        </div>
    );
}
