import React, { useEffect, useState } from 'react';

export default function Video({
                                  thumbnail,
                                  title,
                                  content,
                                  date,
                                  type = 'left',
                              }) {
    const [isNarrow, setIsNarrow] = useState(false);

    useEffect(() => {
        const onResize = () => setIsNarrow(window.innerWidth < 900);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const isRight = type === 'right';
    const RADIUS = '8px';
    const SHADOW = '0 2px 6px rgba(0,0,0,.08), 0 10px 24px rgba(0,0,0,.06)';
    const WRAP_MAX_W = 'min(1100px, 92vw)';

    const overlapX = isNarrow ? 0 : 90;
    const overlapY = isNarrow ? 0 : 18;

    const imgShiftX = overlapX / 2;
    const cardShiftX = -overlapX / 2;

    const wrapStyle = {
        width: WRAP_MAX_W,
        position: 'relative',
        display: isNarrow ? 'block' : 'grid',
        gridTemplateColumns: isNarrow ? 'none' : '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        transform: isRight && !isNarrow ? 'scaleX(-1)' : 'none',
    };

    const textFix = isRight && !isNarrow ? { transform: 'scaleX(-1)' } : {};

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: isNarrow ? '80px' : '100px'  // ✅ 여기서 간격 조절
            }}
        >
            <div style={wrapStyle}>
                {/* 이미지 */}
                <div
                    style={{
                        gridColumn: isNarrow ? '1 / -1' : '1',
                        width: '100%',
                        aspectRatio: '16 / 9',
                        borderRadius: RADIUS,
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        boxShadow: SHADOW,
                        zIndex: 1,
                        transform: isNarrow
                            ? 'none'
                            : `translate(${imgShiftX}px, ${-overlapY}px)`,
                    }}
                >
                    <img
                        src={thumbnail}
                        alt={title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transform: !isNarrow && isRight ? 'scaleX(-1)' : 'none',
                        }}
                    />
                </div>

                {/* 내용 카드 */}
                <div
                    style={{
                        gridColumn: isNarrow ? '1 / -1' : '2',
                        width: '100%',
                        aspectRatio: '16 / 9',
                        backgroundColor: '#ECECEC',
                        borderRadius: RADIUS,
                        boxShadow: SHADOW,
                        position: 'relative',
                        zIndex: 3,
                        transform: isNarrow
                            ? 'none'
                            : `translate(${cardShiftX}px, ${overlapY}px)`,
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            padding: isNarrow ? '14px 16px' : '22px 26px',
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            overflow: 'auto',
                            ...textFix,
                        }}
                    >
                        <div
                            style={{
                                fontFamily: 'Pretendard-Medium',
                                fontSize: 'clamp(11px, 1.6vw, 13px)',
                                letterSpacing: '.02em',
                                color: '#505A63',
                                marginBottom: '10px',
                            }}
                        >
                            MUSIC VIDEO
                        </div>

                        <div
                            style={{
                                fontFamily: 'Pretendard-Bold',
                                fontSize: 'clamp(18px, 2.2vw, 22px)',
                                lineHeight: 1.25,
                                marginBottom: '12px',
                                color: 'var(--textcolor)',
                            }}
                        >
                            {title}
                        </div>

                        <div
                            style={{
                                fontFamily: 'Pretendard-Regular',
                                fontSize: 'clamp(13px, 1.8vw, 16px)',
                                lineHeight: 1.6,
                                color: 'var(--bodytextcolor)',
                                marginBottom: '18px',
                            }}
                        >
                            {content}
                        </div>

                        <div
                            style={{
                                fontFamily: 'Pretendard-Medium',
                                fontSize: 'clamp(12px, 1.6vw, 15px)',
                                color: '#1E1E1E',
                            }}
                        >
                            {date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
