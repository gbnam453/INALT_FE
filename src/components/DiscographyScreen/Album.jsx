import React, { useState } from 'react';

/**
 * 정사각형 앨범 카드
 * props:
 *  - title: 앨범 제목
 *  - detail: 앨범 설명
 *  - img: 이미지 경로(import)
 *  - url: 클릭 시 이동할 주소
 *  - size: 정사각형 크기 (기본값: 화면 높이 10%)
 */
export default function Album({ title = '', detail = '', img, url = '#', size = '15vh' }) {
    const [hovered, setHovered] = useState(false);

    const handleClick = () => {
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    };

    return (
        <div
            style={{
                position: 'relative',
                width: size,
                height: size,
                overflow: 'hidden',
                cursor: 'pointer',
                userSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
        >
            {/* 이미지 */}
            <img
                src={img}
                alt={title}
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'filter .25s ease',
                    filter: hovered ? 'brightness(35%)' : 'none',
                }}
                draggable={false}
            />

            {/* 오버레이 */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '8px',
                    color: '#ffffff',
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity .25s ease',
                    pointerEvents: 'none',
                }}
            >
                <div style={{ maxWidth: '90%' }}>
                    <div
                        style={{
                            fontFamily: 'Pretendard-Bold',
                            fontSize: '12pt',
                            marginBottom: '4px',
                            lineHeight: 1.2,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontFamily: 'Pretendard-Regular',
                            fontSize: '10pt',
                            lineHeight: 1.4,
                        }}
                    >
                        {detail}
                    </div>
                </div>
            </div>
        </div>
    );
}
