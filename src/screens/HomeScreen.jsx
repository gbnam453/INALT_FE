// src/screens/HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Home</h1>
            <p>아티스트 공식 홈페이지에 오신 것을 환영합니다.</p>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <Link to="/profile">
                    <button>Profile 페이지로</button>
                </Link>

                <Link to="/discography">
                    <button>Discography 페이지로</button>
                </Link>

                <Link to="/videos">
                    <button>Music Videos 페이지로</button>
                </Link>
            </div>
        </div>
    );
}
