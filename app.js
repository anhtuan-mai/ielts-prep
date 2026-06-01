// IELTS Prep App — Main Logic
// Target: Band 7.0-7.5, Exam: Aug 15, 2026, 3-4 hours daily

const EXAM_DATE = new Date('2026-08-15');
const STORAGE_KEY = 'ielts_prep_data';

// State
let state = loadState();
let timerInterval = null;
let timerRunning = false;
let timerSeconds = 0;

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return {
        startDate: new Date().toISOString().split('T')[0],
        dailyLogs: {},
        completedExercises: [],
        streak: 0,
        lastActiveDate: null
    };
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function today() {
    return new Date().toISOString().split('T')[0];
}

function daysUntilExam() {
    const now = new Date();
    const diff = EXAM_DATE - now;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// Daily study plan generator — 3-4 hours across all 4 skills
function generateDailyPlan(dateStr) {
    const dayIndex = Math.floor((new Date(dateStr) - new Date(state.startDate)) / (1000 * 60 * 60 * 24));

    const tasks = [
        {
            id: `${dateStr}-vocab`,
            skill: 'reading',
            name: 'Academic Vocabulary (15 min)',
            type: 'vocab',
            duration: 15,
            dataIndex: dayIndex % 2
        },
        {
            id: `${dateStr}-reading`,
            skill: 'reading',
            name: 'Reading Passage + Questions (45 min)',
            type: 'reading',
            duration: 45,
            dataIndex: dayIndex % IELTS_DATA.reading.length
        },
        {
            id: `${dateStr}-listening`,
            skill: 'listening',
            name: 'Listening Practice (30 min)',
            type: 'listening',
            duration: 30,
            dataIndex: dayIndex % IELTS_DATA.listening.length
        },
        {
            id: `${dateStr}-writing`,
            skill: 'writing',
            name: 'Writing Task (45 min)',
            type: 'writing',
            duration: 45,
            dataIndex: dayIndex % IELTS_DATA.writing.length
        },
        {
            id: `${dateStr}-speaking`,
            skill: 'speaking',
            name: 'Speaking Practice (30 min)',
            type: 'speaking',
            duration: 30,
            dataIndex: dayIndex % IELTS_DATA.speaking.length
        },
        {
            id: `${dateStr}-review`,
            skill: 'reading',
            name: 'Review Mistakes & Notes (15 min)',
            type: 'review',
            duration: 15
        }
    ];

    return tasks;
}

function getTodayLog() {
    const d = today();
    if (!state.dailyLogs[d]) {
        state.dailyLogs[d] = {
            tasks: generateDailyPlan(d),
            completed: [],
            startTime: null,
            totalMinutes: 0,
            scores: {}
        };
        saveState();
    }
    return state.dailyLogs[d];
}

// Streak calculation
function calculateStreak() {
    let streak = 0;
    let checkDate = new Date();

    // If today has tasks done, count today
    const todayLog = state.dailyLogs[today()];
    if (!todayLog || todayLog.completed.length === 0) {
        checkDate.setDate(checkDate.getDate() - 1);
    }

    while (true) {
        const dateStr = checkDate.toISOString().split('T')[0];
        const log = state.dailyLogs[dateStr];
        if (log && log.completed.length >= 3) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }

    // Count today if has completions
    if (todayLog && todayLog.completed.length >= 3) streak++;

    return streak;
}

// Predicted band score based on accuracy
function predictBand() {
    const allScores = [];
    Object.values(state.dailyLogs).forEach(log => {
        if (log.scores) {
            Object.values(log.scores).forEach(s => {
                if (typeof s === 'number') allScores.push(s);
            });
        }
    });

    if (allScores.length < 3) return '--';

    const recent = allScores.slice(-20);
    const avg = recent.reduce((a, b) => a + b, 0) / recent.length;

    // Map accuracy % to band score (rough approximation)
    if (avg >= 90) return '7.5';
    if (avg >= 80) return '7.0';
    if (avg >= 70) return '6.5';
    if (avg >= 60) return '6.0';
    if (avg >= 50) return '5.5';
    return '5.0';
}

// Skill progress (% of exercises completed per skill)
function skillProgress(skill) {
    let total = 0, done = 0;
    Object.values(state.dailyLogs).forEach(log => {
        log.tasks.forEach(t => {
            if (t.skill === skill) {
                total++;
                if (log.completed.includes(t.id)) done++;
            }
        });
    });
    return total === 0 ? 0 : Math.round((done / total) * 100);
}

// View management
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    if (viewId === 'dashboard') renderDashboard();
    if (viewId === 'study') renderStudy();
}

// Render Dashboard
function renderDashboard() {
    document.getElementById('days-left').textContent = daysUntilExam();

    const log = getTodayLog();
    const doneCount = log.completed.length;
    const totalCount = log.tasks.length;

    document.getElementById('streak-count').textContent = calculateStreak();
    document.getElementById('today-done').textContent = `${doneCount}/${totalCount}`;
    document.getElementById('predicted-band').textContent = predictBand();

    // Skill bars
    ['reading', 'listening', 'writing', 'speaking'].forEach(skill => {
        const pct = skillProgress(skill);
        document.getElementById(`bar-${skill}`).style.width = `${pct}%`;
        document.getElementById(`pct-${skill}`).textContent = `${pct}%`;
    });

    // Weekly bars
    renderWeekBars();
}

function renderWeekBars() {
    const container = document.getElementById('week-bars');
    container.innerHTML = '';
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const todayDate = new Date();
    const dayOfWeek = (todayDate.getDay() + 6) % 7; // Monday = 0

    for (let i = 0; i < 7; i++) {
        const d = new Date(todayDate);
        d.setDate(d.getDate() - dayOfWeek + i);
        const dateStr = d.toISOString().split('T')[0];
        const log = state.dailyLogs[dateStr];
        const pct = log ? Math.min(100, (log.completed.length / log.tasks.length) * 100) : 0;

        const bar = document.createElement('div');
        bar.className = 'week-bar' + (pct >= 80 ? ' done' : '') + (i === dayOfWeek ? ' today' : '');
        bar.style.height = `${Math.max(4, pct * 0.6)}px`;
        bar.innerHTML = `<span class="week-bar-label">${days[i]}</span>`;
        container.appendChild(bar);
    }
}

// Render Study (task list)
function renderStudy() {
    const log = getTodayLog();
    const container = document.getElementById('task-list');
    container.innerHTML = '';

    log.tasks.forEach(task => {
        const isDone = log.completed.includes(task.id);
        const item = document.createElement('div');
        item.className = 'task-item' + (isDone ? ' completed' : '');
        item.innerHTML = `
            <div class="task-check">${isDone ? '✓' : ''}</div>
            <div class="task-info">
                <div class="task-name">${task.name}</div>
                <div class="task-meta">${task.duration} min</div>
            </div>
            <span class="task-skill ${task.skill}">${task.skill}</span>
        `;
        item.onclick = () => {
            if (!isDone) startPractice(task);
        };
        container.appendChild(item);
    });
}

// Timer
function toggleTimer() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
    } else {
        timerRunning = true;
        timerInterval = setInterval(() => {
            timerSeconds++;
            const h = Math.floor(timerSeconds / 3600);
            const m = Math.floor((timerSeconds % 3600) / 60);
            const s = timerSeconds % 60;
            document.getElementById('study-timer').textContent =
                `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        }, 1000);
    }
}

// Practice exercises
function startPractice(task) {
    showView('practice');
    document.getElementById('practice-title').textContent = task.name;

    switch (task.type) {
        case 'reading': renderReading(task); break;
        case 'listening': renderListening(task); break;
        case 'writing': renderWriting(task); break;
        case 'speaking': renderSpeaking(task); break;
        case 'vocab': renderVocab(task); break;
        case 'review': renderReview(task); break;
    }
}

function renderReading(task) {
    const data = IELTS_DATA.reading[task.dataIndex];
    const container = document.getElementById('practice-content');

    let html = `<div class="question-block">
        <h3>${data.title}</h3>
        <div class="passage">${data.passage}</div>`;

    data.questions.forEach((q, i) => {
        html += `<p><strong>Q${i+1}:</strong> ${q.q}</p>
        <ul class="options" id="q-${i}">`;
        q.options.forEach((opt, j) => {
            html += `<li onclick="selectOption(${i}, ${j}, ${q.answer})">${opt}</li>`;
        });
        html += `</ul>`;
    });

    html += `</div>
        <button class="btn-submit" onclick="submitReading('${task.id}', ${data.questions.length})">Submit Answers</button>`;

    container.innerHTML = html;
}

let currentAnswers = {};

function selectOption(qIndex, optIndex, correctIndex) {
    currentAnswers[qIndex] = optIndex;
    const options = document.querySelectorAll(`#q-${qIndex} li`);
    options.forEach((li, i) => {
        li.className = i === optIndex ? 'selected' : '';
    });
}

function submitReading(taskId, totalQuestions) {
    let correct = 0;
    const data = IELTS_DATA.reading[getTodayLog().tasks.find(t => t.id === taskId).dataIndex];

    data.questions.forEach((q, i) => {
        const options = document.querySelectorAll(`#q-${i} li`);
        options.forEach((li, j) => {
            li.style.pointerEvents = 'none';
            if (j === q.answer) li.classList.add('correct');
            if (currentAnswers[i] === j && j !== q.answer) li.classList.add('wrong');
        });
        if (currentAnswers[i] === q.answer) correct++;
    });

    const score = Math.round((correct / totalQuestions) * 100);
    const log = getTodayLog();
    log.scores[taskId] = score;

    if (!log.completed.includes(taskId)) {
        log.completed.push(taskId);
    }
    saveState();
    currentAnswers = {};

    const btn = document.querySelector('.btn-submit');
    btn.outerHTML = `<div class="feedback ${score >= 70 ? 'correct' : 'wrong'}">
        Score: ${correct}/${totalQuestions} (${score}%)
        ${score >= 70 ? '— Good job!' : '— Review the passage and try to understand why.'}
    </div>
    <button class="btn-next" onclick="showView('study')">← Back to Tasks</button>`;
}

function renderListening(task) {
    const data = IELTS_DATA.listening[task.dataIndex];
    const container = document.getElementById('practice-content');

    let html = `<div class="question-block">
        <h3>${data.title}</h3>
        <p class="speaking-prompt">${data.description}</p>
        <div class="feedback info">Note: In the real IELTS, you would listen to an audio recording. For practice, read the question carefully and select the most logical answer based on the context described.</div>`;

    data.questions.forEach((q, i) => {
        html += `<p style="margin-top:16px"><strong>Q${i+1}:</strong> ${q.q}</p>
        <ul class="options" id="q-${i}">`;
        q.options.forEach((opt, j) => {
            html += `<li onclick="selectOption(${i}, ${j}, ${q.answer})">${opt}</li>`;
        });
        html += `</ul>`;
    });

    html += `</div>
        <button class="btn-submit" onclick="submitListening('${task.id}', ${data.questions.length})">Submit Answers</button>`;

    container.innerHTML = html;
}

function submitListening(taskId, totalQuestions) {
    let correct = 0;
    const data = IELTS_DATA.listening[getTodayLog().tasks.find(t => t.id === taskId).dataIndex];

    data.questions.forEach((q, i) => {
        const options = document.querySelectorAll(`#q-${i} li`);
        options.forEach((li, j) => {
            li.style.pointerEvents = 'none';
            if (j === q.answer) li.classList.add('correct');
            if (currentAnswers[i] === j && j !== q.answer) li.classList.add('wrong');
        });
        if (currentAnswers[i] === q.answer) correct++;
    });

    const score = Math.round((correct / totalQuestions) * 100);
    const log = getTodayLog();
    log.scores[taskId] = score;
    if (!log.completed.includes(taskId)) log.completed.push(taskId);
    saveState();
    currentAnswers = {};

    const btn = document.querySelector('.btn-submit');
    btn.outerHTML = `<div class="feedback ${score >= 70 ? 'correct' : 'wrong'}">
        Score: ${correct}/${totalQuestions} (${score}%)
    </div>
    <button class="btn-next" onclick="showView('study')">← Back to Tasks</button>`;
}

function renderWriting(task) {
    const data = IELTS_DATA.writing[task.dataIndex];
    const container = document.getElementById('practice-content');

    let tipsHtml = data.tips.map(t => `<li>${t}</li>`).join('');

    container.innerHTML = `<div class="question-block">
        <h3>${data.title} (${data.type === 'task2' ? 'Task 2 Essay' : 'Task 1 Report'})</h3>
        <div class="speaking-prompt">${data.prompt}</div>
        <p style="margin:12px 0;font-size:0.8rem;color:var(--muted)">Minimum ${data.minWords} words</p>
        <textarea class="writing-area" id="writing-input" placeholder="Write your ${data.type === 'task2' ? 'essay' : 'report'} here..." oninput="updateWordCount()"></textarea>
        <div class="word-count" id="word-count">0 words</div>
        <button class="btn-submit" onclick="submitWriting('${task.id}', ${data.minWords})">Submit</button>
        <details style="margin-top:16px">
            <summary style="cursor:pointer;font-size:0.85rem;color:var(--primary)">Tips & Structure Guide</summary>
            <ul class="speaking-tips" style="margin-top:8px">${tipsHtml}</ul>
        </details>
        <details style="margin-top:12px">
            <summary style="cursor:pointer;font-size:0.85rem;color:var(--primary)">Sample Band 7 Opening</summary>
            <p style="margin-top:8px;font-size:0.85rem;line-height:1.6;color:var(--muted)">${data.sampleBand7 || 'No sample available for this task type.'}</p>
        </details>
    </div>`;
}

function updateWordCount() {
    const text = document.getElementById('writing-input').value.trim();
    const count = text ? text.split(/\s+/).length : 0;
    document.getElementById('word-count').textContent = `${count} words`;
}

function submitWriting(taskId, minWords) {
    const text = document.getElementById('writing-input').value.trim();
    const count = text ? text.split(/\s+/).length : 0;

    if (count < minWords * 0.5) {
        alert(`Please write at least ${minWords} words. You have ${count} words.`);
        return;
    }

    const log = getTodayLog();
    const score = Math.min(100, Math.round((count / minWords) * 70 + 30));
    log.scores[taskId] = score;
    if (!log.completed.includes(taskId)) log.completed.push(taskId);
    saveState();

    document.querySelector('.btn-submit').outerHTML = `
        <div class="feedback correct">
            Submitted! ${count} words written.
            ${count >= minWords ? 'Met the word count requirement.' : `Try to reach ${minWords} words next time.`}
            <br><br>Self-assess: Does your essay have a clear introduction, body paragraphs with examples, and a conclusion?
        </div>
        <button class="btn-next" onclick="showView('study')">← Back to Tasks</button>`;
}

function renderSpeaking(task) {
    const data = IELTS_DATA.speaking[task.dataIndex];
    const container = document.getElementById('practice-content');

    let html = `<div class="question-block">
        <h3>${data.title} (Part ${data.part})</h3>
        <div class="speaking-prompt">${data.prompt.replace(/\n/g, '<br>')}</div>`;

    if (data.part === 2) {
        html += `<div class="feedback info" style="margin:12px 0">
            ⏱ Think time: ${data.thinkTime}s | Speak time: ${data.speakTime}s<br>
            Practice speaking aloud — record yourself if possible!
        </div>`;
    }

    if (data.questions) {
        html += `<h4 style="margin:16px 0 8px">Discussion Questions:</h4>`;
        data.questions.forEach((q, i) => {
            html += `<p style="margin:8px 0;font-size:0.9rem">${i+1}. ${q}</p>`;
        });
    }

    if (data.followUp) {
        html += `<h4 style="margin:16px 0 8px">Follow-up Questions:</h4>`;
        data.followUp.forEach(q => {
            html += `<p style="margin:8px 0;font-size:0.85rem;color:var(--muted)">• ${q}</p>`;
        });
    }

    let tipsHtml = data.tips.map(t => `<li>${t}</li>`).join('');
    html += `<details style="margin-top:16px">
        <summary style="cursor:pointer;font-size:0.85rem;color:var(--primary)">Speaking Tips</summary>
        <ul class="speaking-tips" style="margin-top:8px">${tipsHtml}</ul>
    </details>`;

    html += `<button class="btn-submit" onclick="completeSpeaking('${task.id}')">Mark as Practiced</button>`;
    html += `</div>`;

    container.innerHTML = html;
}

function completeSpeaking(taskId) {
    const log = getTodayLog();
    log.scores[taskId] = 75;
    if (!log.completed.includes(taskId)) log.completed.push(taskId);
    saveState();

    document.querySelector('.btn-submit').outerHTML = `
        <div class="feedback correct">Speaking practice completed! Self-assess: Did you speak fluently for the full time? Did you use varied vocabulary and complex sentences?</div>
        <button class="btn-next" onclick="showView('study')">← Back to Tasks</button>`;
}

function renderVocab(task) {
    const container = document.getElementById('practice-content');
    const isAcademic = task.dataIndex === 0;
    const words = isAcademic ? IELTS_DATA.vocabulary.academic : IELTS_DATA.vocabulary.collocations;

    let html = `<div class="question-block">
        <h3>${isAcademic ? 'Academic Vocabulary' : 'Collocations'}</h3>
        <p style="margin-bottom:16px;font-size:0.85rem;color:var(--muted)">Study these words/phrases. Try to use them in your writing and speaking today.</p>`;

    words.forEach(w => {
        if (w.word) {
            html += `<div style="margin-bottom:12px;padding:10px;background:var(--bg);border-radius:8px">
                <strong>${w.word}</strong> — ${w.meaning}<br>
                <em style="font-size:0.8rem;color:var(--muted)">"${w.example}"</em>
            </div>`;
        } else {
            html += `<div style="margin-bottom:12px;padding:10px;background:var(--bg);border-radius:8px">
                <strong>${w.phrase}</strong><br>
                <em style="font-size:0.8rem;color:var(--muted)">"${w.example}"</em>
            </div>`;
        }
    });

    html += `<button class="btn-submit" onclick="completeVocab('${task.id}')">I've studied these</button></div>`;
    container.innerHTML = html;
}

function completeVocab(taskId) {
    const log = getTodayLog();
    log.scores[taskId] = 80;
    if (!log.completed.includes(taskId)) log.completed.push(taskId);
    saveState();
    showView('study');
}

function renderReview(task) {
    const container = document.getElementById('practice-content');
    const log = getTodayLog();

    let reviewHtml = '<h3>Review Today\'s Work</h3>';
    reviewHtml += '<p style="margin:12px 0;font-size:0.85rem;color:var(--muted)">Spend 15 minutes reviewing:</p>';
    reviewHtml += '<ul class="speaking-tips">';
    reviewHtml += '<li>Re-read any reading questions you got wrong</li>';
    reviewHtml += '<li>Review the vocabulary words — can you use them in a sentence?</li>';
    reviewHtml += '<li>Re-read your writing — check for grammar errors</li>';
    reviewHtml += '<li>Note down 3 things you learned today</li>';
    reviewHtml += '</ul>';

    if (Object.keys(log.scores).length > 0) {
        reviewHtml += '<h4 style="margin:16px 0 8px">Today\'s Scores:</h4>';
        Object.entries(log.scores).forEach(([id, score]) => {
            const taskName = log.tasks.find(t => t.id === id)?.name || id;
            reviewHtml += `<p style="font-size:0.85rem">• ${taskName}: <strong>${score}%</strong></p>`;
        });
    }

    reviewHtml += `<textarea class="writing-area" style="min-height:100px;margin-top:16px" placeholder="Notes: What did I learn today? What was difficult?"></textarea>`;
    reviewHtml += `<button class="btn-submit" onclick="completeReview('${task.id}')">Complete Review</button>`;

    container.innerHTML = reviewHtml;
}

function completeReview(taskId) {
    const log = getTodayLog();
    log.scores[taskId] = 100;
    if (!log.completed.includes(taskId)) log.completed.push(taskId);
    saveState();
    showView('study');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
});
