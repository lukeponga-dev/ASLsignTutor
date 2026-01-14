# SignMate 🧠👋

**SignMate** is an AI-powered interactive sign language learning platform built to demonstrate the capabilities of Gemini 3 Pro Preview. It leverages simulated computer vision and agentic workflows to teach sign language dynamically, providing real-time gesture accuracy scoring and personalized feedback.

![SignMate Hero](public/vite.svg) *Note: Replace with actual screenshot in production*

## 🚀 Features

*   **Real-time Gesture Analysis**: (Simulated) AI vision that tracks hand movements at 60fps to provide instant accuracy scoring.
*   **Interactive Curriculum**: A structured lesson path starting from Basic Greetings to complex alphabet signing.
*   **Smart Feedback Loop**: Real-time corrective guidance (e.g., "Straighten your fingers", "Rotate wrist").
*   **Gamified Learning**: Earn XP, unlock new levels, and track mastery progress.
*   **Premium Aesthetic**: A "Gemini-native" dark mode design featuring glassmorphism, neon accents, and smooth animations.

## 🛠️ Tech Stack

*   **Framework**: React 18 + Vite
*   **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Glassmorphism)
*   **Icons**: Lucide React
*   **Routing**: React Router DOM

## 📦 Installation & Setup

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the application**:
    Navigate to `http://localhost:5173` in your browser.

## 📖 How to Use

### 1. Home Dashboard
The landing page provides an overview of the platform's capabilities. Click **"Start Learning Now"** to enter the lesson interface.

### 2. Practice Mode (`/learn`)
The core experience follows a 4-step workflow:
1.  **Select a Lesson**: Choose an unlocked module from the library (e.g., "Basic Greetings").
2.  **Review the Reference**: Watch the instructor video on the left panel (currently a placeholder illustration).
3.  **Perform the Sign**: Enable the camera (simulated) on the right panel.
4.  **Receive Feedback**:
    *   The "Match Accuracy" meter shows how close your sign is.
    *   Text prompts will guide you to improve your form.
    *   Hold the "Perfect Match" state to fill the mastery bar.
5.  **Completion**: Once the mastery bar is full, you earn XP and unlock the next lesson.

## 📂 Project Structure

```text
src/
├── components/
│   └── Navbar.jsx       # Global navigation with status indicators
├── pages/
│   ├── Home.jsx         # Landing page with hero and features
│   └── Learn.jsx        # Core learning engine (Camera simulation & Logic)
├── index.css            # Global Design System (Tokens, Animations, Layouts)
├── App.jsx              # Main routing configuration
└── main.jsx             # Entry point
```

## 🔮 Future Roadmap

*   **Real Computer Vision**: Integrate MediaPipe or TensorFlow.js for actual hand tracking.
*   **User Accounts**: Persist progress and XP across sessions.
*   **Community Challenges**: Compete with friends on sign accuracy.

---

*Powered by Google Gemini*
