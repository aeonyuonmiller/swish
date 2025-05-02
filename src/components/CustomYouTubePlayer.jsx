// components/CustomYouTubePlayer.jsx
'use client'

import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { motion, AnimatePresence } from 'motion/react';
import styled from '@emotion/styled';

const PlayerContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem;
`;

const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: black;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

const ControlsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent 50%);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
`;

const VolumeSlider = styled.input`
  width: 80px;
`;

const SeekSlider = styled.input`
  width: 100%;
`;

const TimeDisplay = styled.div`
  font-size: 0.875rem;
  color: white;
  margin-left: 0.75rem;
`;

const ControlRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: center;
`;

const PlayPauseButton = styled(motion.button)`
  background: white;
  color: black;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
`;

const FullscreenButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const CustomYouTubePlayer = ({ videoId }) => {
    const fallbackVideoId = 'dQw4w9WgXcQ';
    const actualVideoId = videoId || fallbackVideoId;

    const playerRef = useRef(null);
    const containerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.6);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [hovered, setHovered] = useState(false);

    const StyledReactPlayer = styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
  `;

    const handlePlayPause = () => setPlaying(prev => !prev);

    const handleVolumeChange = (e) => {
        const v = parseFloat(e.target.value);
        setVolume(v);
    };

    const handleSeekChange = (e) => {
        const newPlayed = parseFloat(e.target.value);
        setPlayed(newPlayed);
        playerRef.current?.seekTo(newPlayed);
    };

    const handleProgress = (state) => {
        setPlayed(state.played);
    };

    const handleDuration = (dur) => {
        setDuration(dur);
    };

    const toggleFullscreen = () => {
        const el = containerRef.current;
        if (!el) return;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            el.requestFullscreen();
        }
    };

    return (
        <PlayerContainer ref={containerRef}>
            <PlayerWrapper
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <StyledReactPlayer
                    ref={playerRef}
                    url={`https://www.youtube.com/watch?v=${actualVideoId}`}
                    playing={playing}
                    volume={volume}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    width="100%"
                    height="100%"
                    controls={false}
                />

                <AnimatePresence>
                    {(!playing || hovered) && (
                        <Title
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            Custom Video Title
                        </Title>
                    )}
                </AnimatePresence>

                <ControlsOverlay visible={!playing || hovered}>
                    <SeekSlider
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={played}
                        onChange={handleSeekChange}
                    />
                    <ControlRow>
                        <ControlGroup>
                            <PlayPauseButton
                                whileTap={{ scale: 0.9 }}
                                onClick={handlePlayPause}
                            >
                                {playing ? 'Pause' : 'Play'}
                            </PlayPauseButton>
                            <TimeDisplay>
                                {formatTime(played * duration)} / {formatTime(duration)}
                            </TimeDisplay>
                        </ControlGroup>

                        <ControlGroup>
                            <VolumeSlider
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={volume}
                                onChange={handleVolumeChange}
                            />
                            <FullscreenButton onClick={toggleFullscreen} title="Fullscreen">
                                ⛶
                            </FullscreenButton>
                        </ControlGroup>
                    </ControlRow>
                </ControlsOverlay>
            </PlayerWrapper>
        </PlayerContainer>
    );
};

export default CustomYouTubePlayer;