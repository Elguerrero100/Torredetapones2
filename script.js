/* styles.css */

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
    margin: 0;
    padding: 0;
    color: #343a40;
}

.container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
}

header {
    margin-bottom: 20px;
}

h1 {
    color: #007BFF;
    font-size: 2.5em;
}

.tagline {
    font-size: 1.2em;
    color: #007BFF;
    margin: 10px 0;
}

.game-area {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.tower {
    width: 100px;
    height: 300px;
    background-color: #6c757d;
    border: 3px solid #343a40;
    border-radius: 10px;
    overflow-y: auto;
    transform: rotate(180deg);
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.controls {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}

button {
    margin: 5px;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.2s;
}

button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.tapon {
    width: 80%;
    height: 20px;
    background-color: #ffffff;
    border: 1px solid #343a40;
    margin: 2px auto;
    transition: opacity 0.3s, transform 0.3s;
    opacity: 0;
    transform: translateY(-10px);
}

.tapon.show {
    opacity: 1;
    transform: translateY(0);
}

.count-display,
.record-display,
.games-played-display,
.message-display {
    font-size: 18px;
    color: #343a40;
    margin: 15px 0;
}

.leaderboard {
    margin-top: 20px;
    text-align: left;
    display: none; /* Ocultar inicialmente */
}

.leaderboard h2 {
    color: #007BFF;
}

.leaderboard ul {
    list-style-type: none;
    padding: 0;
}

.leaderboard li {
    background: #007BFF;
    color: white;
    margin: 5px 0;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
}

.message-display {
    font-weight: bold;
    color: #28a745; /* Color verde para mensajes positivos */
}

footer {
    margin-top: 20px;
    font-size: 0.9em;
    color: #6c757d;
}

/* Responsive Styles */
@media (max-width: 600px) {
    .container {
        padding: 15px;
    }

    button {
        padding: 10px;
        font-size: 14px;
    }

    .count-display,
    .record-display,
    .games-played-display {
        font-size: 16px;
    }
}
