// src/App.js
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen.jsx';
import DiscographyScreen from './screens/DiscographyScreen';
import VideoScreen from './screens/VideoScreen.jsx';

export default function App() {
    return (
        <Router>
            <Routes>
                {/* 시작 화면 */}
                <Route path="/" element={<HomeScreen />} />

                {/* 기타 페이지 */}
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/discography" element={<DiscographyScreen />} />
                <Route path="/videos" element={<VideoScreen />} />
            </Routes>
        </Router>
    );
}
