import React, { useState, useEffect, useRef } from 'react';
import { Camera, CheckCircle, RefreshCcw, AlertCircle, Play, ChevronRight, Star, Lock, Trophy, X } from 'lucide-react';

const LESSONS = [
    {
        id: 1, title: 'Basic Greetings', signs: [
            { id: 'hello', name: 'Hello', difficulty: 'Easy', points: 50, locked: false },
            { id: 'thanks', name: 'Thank You', difficulty: 'Easy', points: 50, locked: false },
            { id: 'nice', name: 'Nice to meet you', difficulty: 'Medium', points: 75, locked: true },
        ]
    },
    {
        id: 2, title: 'Alphabet A-M', signs: [
            { id: 'a-e', name: 'Letters A-E', difficulty: 'Easy', points: 50, locked: true },
            { id: 'f-j', name: 'Letters F-J', difficulty: 'Medium', points: 75, locked: true },
        ]
    }
];

export default function Learn() {
    const [activeLesson, setActiveLesson] = useState(null); // The selected sign object
    const [viewState, setViewState] = useState('SELECTION'); // SELECTION, PRACTICE, SUCCESS
    const [isRecording, setIsRecording] = useState(false);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("Align your hand with the guide.");
    const [progress, setProgress] = useState(0); // Progress bar for holding the pose

    // Simulation Loop
    useEffect(() => {
        let interval;
        if (viewState === 'PRACTICE' && isRecording) {
            interval = setInterval(() => {
                // Simulating fluctuations
                const currentScore = Math.min(100, Math.max(0, score + (Math.random() * 20 - 5)));
                setScore(Math.floor(currentScore));

                // Feedback Logic
                if (currentScore > 90) {
                    setFeedback("Perfect match! Hold it...");
                    setProgress(p => Math.min(100, p + 5));
                } else if (currentScore > 75) {
                    setFeedback("Good! Straighten fingers slightly.");
                    setProgress(p => Math.max(0, p - 2));
                } else {
                    setFeedback("Adjust hand rotation.");
                    setProgress(p => Math.max(0, p - 5));
                }
            }, 200);
        }
        return () => clearInterval(interval);
    }, [viewState, isRecording, score]);

    // Check for completion
    useEffect(() => {
        if (progress >= 100 && viewState === 'PRACTICE') {
            setIsRecording(false);
            setViewState('SUCCESS');
        }
    }, [progress, viewState]);

    const handleSelectLesson = (sign) => {
        if (sign.locked) return;
        setActiveLesson(sign);
        setViewState('PRACTICE');
        setScore(0);
        setProgress(0);
        setFeedback("Align your hand with the guide.");
        setIsRecording(false); // User must explicitly start
    };

    const handleNextLevel = () => {
        setViewState('SELECTION');
        setActiveLesson(null);
        setProgress(0);
    };

    return (
        <div className="page-content learn-page">
            <div className="container">

                {/* VIEW: SELECTION */}
                {viewState === 'SELECTION' && (
                    <div className="lesson-selection">
                        <h1 className="page-title">Lesson Library</h1>
                        <p className="page-subtitle mb-8">Select a gesture to start training your model.</p>

                        <div className="modules-grid">
                            {LESSONS.map((module) => (
                                <div key={module.id} className="module-section">
                                    <h3 className="module-title">{module.title}</h3>
                                    <div className="signs-grid">
                                        {module.signs.map((sign) => (
                                            <button
                                                key={sign.id}
                                                className={`sign-card glass-panel ${sign.locked ? 'locked' : ''}`}
                                                onClick={() => handleSelectLesson(sign)}
                                            >
                                                <div className="sign-card-header">
                                                    {sign.locked ? <Lock size={16} /> : <Play size={16} className="text-accent" />}
                                                    <span className={`difficulty-badge ${sign.difficulty.toLowerCase()}`}>{sign.difficulty}</span>
                                                </div>
                                                <h4 className="sign-name">{sign.name}</h4>
                                                <div className="sign-points">
                                                    <Star size={14} className={sign.locked ? 'text-secondary' : 'text-warning'} />
                                                    <span>{sign.points} XP</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW: PRACTICE */}
                {viewState === 'PRACTICE' && activeLesson && (
                    <div className="practice-layout">
                        <div className="practice-header">
                            <button className="back-btn" onClick={() => setViewState('SELECTION')}>
                                <ChevronRight size={20} className="rotate-180" /> Back
                            </button>
                            <h2>{activeLesson.name}</h2>
                            <div className="xp-tag">{activeLesson.points} XP</div>
                        </div>

                        <div className="practice-grid">
                            {/* REF VIDEO */}
                            <div className="reference-panel glass-panel">
                                <div className="panel-label">Reference Instructor</div>
                                <div className="video-content flex-center">
                                    <div className="play-circle">
                                        <Play size={32} fill="white" />
                                    </div>
                                    {/* Placeholder for real video */}
                                </div>
                                <div className="instruction-text">
                                    <p>1. Raise hand to shoulder height</p>
                                    <p>2. Keep fingers together</p>
                                    <p>3. Wave slightly left to right</p>
                                </div>
                            </div>

                            {/* USER CAM */}
                            <div className="camera-panel glass-panel">
                                <div className="panel-label">Your Camera</div>
                                <div className="video-content camera-bg">
                                    {isRecording ? (
                                        <>
                                            <div className="simulated-overlay">
                                                <div className="hand-box"></div>
                                                <div className="skeleton-lines"></div>
                                            </div>
                                            <div className="ai-feedback-overlay">
                                                <div className={`status-pill ${score > 80 ? 'good' : 'adjust'}`}>
                                                    {feedback}
                                                </div>
                                                <div className="confidence-meter">
                                                    <div className="meter-label">Match Accuracy</div>
                                                    <div className="meter-bar">
                                                        <div className="meter-fill" style={{ width: `${score}%`, backgroundColor: score > 80 ? '#10b981' : '#f59e0b' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="camera-start-screen">
                                            <Camera size={48} className="mb-4 opacity-50" />
                                            <p>Ready to practice?</p>
                                            <button className="btn-primary mt-4" onClick={() => setIsRecording(true)}>
                                                Start Camera
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Progress to Success */}
                                {isRecording && (
                                    <div className="mastery-progress">
                                        <div className="progress-track">
                                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                                        </div>
                                        <span className="progress-text">Hold pose to complete: {progress}%</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* VIEW: SUCCESS MODAL */}
                {viewState === 'SUCCESS' && (
                    <div className="success-modal-overlay">
                        <div className="success-card glass-panel bounce-in">
                            <div className="success-icon-wrapper">
                                <Trophy size={48} className="text-warning" />
                            </div>
                            <h2>Checkmate!</h2>
                            <p className="success-msg">You've mastered <strong>{activeLesson?.name}</strong>.</p>

                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="label">Accuracy</span>
                                    <span className="value">96%</span>
                                </div>
                                <div className="stat-item">
                                    <span className="label">Points</span>
                                    <span className="value text-warning">+{activeLesson?.points}</span>
                                </div>
                            </div>

                            <div className="action-buttons">
                                <button className="btn-secondary" onClick={() => { setViewState('PRACTICE'); setProgress(0); setScore(0); setIsRecording(false); }}>
                                    Retry
                                </button>
                                <button className="btn-primary" onClick={handleNextLevel}>
                                    Next Lesson <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
