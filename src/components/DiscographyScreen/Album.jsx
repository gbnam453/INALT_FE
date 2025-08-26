// src/components/DiscographyScreen/Album.jsx
import React, { useState } from 'react';

export default function Album({ title = '', detail = '', img, url = '#' }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => url && window.open(url, '_blank')}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    url && window.open(url, '_blank');
                }
            }}
            style={{
                position: 'relative',
                width: '100%',              // ✅ 그리드 셀 너비 100% 채우기
                aspectRatio: '1 / 1',       // ✅ 항상 정사각형 유지
                overflow: 'hidden',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: hovered
                    ? '0 6px 16px rgba(0,0,0,0.18)'
                    : '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'box-shadow .2s ease, transform .2s ease',
                transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                WebkitTapHighlightColor: 'transparent',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={img}
                alt={title}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',                 // ✅ 셀을 꽉 채우는 이미지
                    filter: hovered ? 'brightness(35%)' : 'none',
                    transition: 'filter .25s ease',
                    display: 'block',
                }}
                draggable={false}
            />

            {/* Hover 텍스트 오버레이 */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '12px',
                    color: '#fff',
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity .25s ease',
                }}
            >
                <div style={{ width: '100%' }}>
                    <div
                        style={{
                            fontWeight: 700,
                            marginBottom: '6px',
                            // 데스크톱에서 3열 기준 비디오 카드 스케일에 맞춰 조금 키움
                            fontSize: 'clamp(13px, 2.1vw, 18px)',
                            lineHeight: 1.2,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 'clamp(11px, 1.8vw, 16px)',
                            lineHeight: 1.35,
                            opacity: 0.95,
                        }}
                    >
                        {detail}
                    </div>
                </div>
            </div>
        </div>
    );
}
