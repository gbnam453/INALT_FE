import React, { useMemo, useEffect, useState } from 'react';

/**
 * ContentsLayout
 * 중앙 레일: 상단 제목(+ 하단 내용). 전체 스크롤.
 * - props:
 *   - title: string
 *   - children: ReactNode (내용 영역)
 *   - type: 'child' | '' (child 스크린)
 *   - menuOwnsTitleOnMobile?: boolean
 *       모바일 + child에서 MenuLayout이 상단바에 제목을 표시하므로
 *       이 경우 ContentsLayout에서는 제목을 숨김.
 *
 * 좌/우 안전 여백을 둬서 MenuLayout의 좌우 텍스트/버튼과 겹치지 않게 함.
 */
export default function ContentsLayout({
                                           title = '',
                                           children,
                                           type = 'child',
                                           menuOwnsTitleOnMobile = true,
                                       }) {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const isMobile = width < 600;
    const isFoldRange = width >= 600 && width < 900;

    // Menu 텍스트 기준(24~38px clamp)의 1.3배 → 제목 폰트
    const TITLE_FONT = 'clamp(31px, 6.5vw, 49px)';

    // 좌우 안전 여백 (MenuLayout 레일과 겹침 방지)
    const sideSafe = useMemo(() => {
        if (isMobile) return '20px';
        if (isFoldRange) return 'clamp(70px, 10vw, 110px)';
        return 'clamp(90px, 12vw, 140px)';
    }, [isMobile, isFoldRange]);

    // 전체 스크롤 컨테이너
    const outerStyle = {
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--bgcolor)',
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'center',
    };

    const CONTENT_MAX_WIDTH = '1200px';   // 모든 화면에서 동일
    const CONTENT_SIDE_PADDING = '200px'; // 좌우 여백 통일

    const innerStyle = {
        width: '100%',
        maxWidth: CONTENT_MAX_WIDTH,
        boxSizing: 'border-box',
        paddingLeft: isMobile ? '20px' : CONTENT_SIDE_PADDING,
        paddingRight: isMobile ? '20px' : CONTENT_SIDE_PADDING,
        paddingTop: '30px',
        paddingBottom: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    // 제목 아래 여백 (VideoScreen과 동일 감각, 필요시 조절)
    const SECTION_GAP = isMobile ? 80 : 100;
    const titleMarginBottom = Math.max(SECTION_GAP, 60) / 2; // 요청: "지금보다 절반 가깝게"

    const showTitleHere = !(menuOwnsTitleOnMobile && isMobile && type === 'child');

    return (
        <div style={outerStyle}>
            <div style={innerStyle}>
                {showTitleHere && (
                    <div
                        style={{
                            fontFamily: 'Pretendard-Bold',
                            fontSize: TITLE_FONT,
                            color: 'var(--textcolor)',
                            textAlign: 'center',
                            marginTop: '30px',
                            marginBottom: `${titleMarginBottom}px`,
                        }}
                    >
                        {title}
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
