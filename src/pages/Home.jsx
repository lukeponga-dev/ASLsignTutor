import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Video, Brain, Zap } from 'lucide-react';

export default function Home() {
    return (
        <div className="page-content home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-glow"></div>

                <div className="hero-badge">
                    <span className="pulse-dot"></span>
                    <span>Powered by Gemini 3 Pro Preview</span>
                </div>

                <h1 className="hero-title">
                    Master Sign Language with <br />
                    <span className="text-gradient">AI-Powered Precision</span>
                </h1>

                <p className="hero-subtitle">
                    SignMate uses advanced computer vision to provide real-time feedback on your gestures.
                    Learn faster, smarter, and with confidence.
                </p>

                <Link to="/learn" className="btn-primary hero-cta">
                    Start Learning Now
                    <ArrowRight size={20} />
                </Link>
            </section>

            {/* Features Grid */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        <FeatureCard
                            icon={<Video className="text-success" size={32} />}
                            title="Real-time Analysis"
                            desc="Our camera system analyzes your hand movements 60 times per second for instant accuracy scoring."
                        />
                        <FeatureCard
                            icon={<Brain className="text-accent" size={32} />}
                            title="Smart Curriculum"
                            desc="Adaptive lessons that evolve with your progress, focusing where you need improvement most."
                        />
                        <FeatureCard
                            icon={<Zap className="text-warning" size={32} />}
                            title="Instant Corrections"
                            desc="Get specific guidance on how to adjust your finger placement and hand orientation."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
                {icon}
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{desc}</p>
        </div>
    );
}
