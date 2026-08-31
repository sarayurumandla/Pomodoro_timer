# Pomodoro Timer

A simple web-based Pomodoro Timer built to help users focus through timed work and break sessions.

## Features

* 25-minute work sessions
* 5-minute short breaks
* Automatic switching between work and break sessions
* Pause and resume functionality
* Reset timer functionality
* Simple and responsive user interface
* Flask backend with HTML, CSS and JavaScript frontend

## Tech Stack

* **Python** – Backend
* **Flask** – Web framework
* **HTML** – Page structure
* **CSS** – Styling and layout
* **JavaScript** – Timer functionality and user interactions

## Project Structure

```text
pomodoro_timer/
│
├── app.py
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/sr191006/Pomodoro_timer.git
```

### 2. Open the project

```bash
cd Pomodoro_timer
```

### 3. Install Flask

```bash
pip3 install flask
```

### 4. Run the application

```bash
python3 app.py
```
Then go to the website by copy-pasting the HTTPs link given into the browser.

## How It Works

The application uses **Flask and Python** to serve the web application, while **JavaScript** handles the countdown and user interactions on the frontend.

The timer follows a continuous cycle:

```text
25 min Work
      ↓
5 min Break
      ↓
25 min Work
      ↓
5 min Break
      ↓
       ...
```

Users can pause, resume or reset the timer at any point.

## Future Improvements

* Add custom work and break durations
* Track completed sessions
* Add focus-time statistics
* Store session history
* Add sound notifications when a timer ends


