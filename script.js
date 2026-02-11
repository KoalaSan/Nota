const SanrioChars = [
    {
        name: "Kuromi",
        hint: "Eres dulce y tu sonrisa me gusta 🖤",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="22" cy="28" rx="10" ry="22" fill="#1a1a1a" transform="rotate(-18 22 50)"/>
                <ellipse cx="78" cy="28" rx="10" ry="22" fill="#1a1a1a" transform="rotate(18 78 50)"/>
                <ellipse cx="20" cy="32" rx="5" ry="14" fill="#ff69b4" transform="rotate(-18 20 50)" opacity="0.9"/>
                <ellipse cx="80" cy="32" rx="5" ry="14" fill="#ff69b4" transform="rotate(18 80 50)" opacity="0.9"/>
                <path d="M18 42 Q18 22 50 22 Q82 22 82 42 Q86 56 82 70 Q77 84 50 84 Q23 84 18 70 Q14 56 18 42" fill="#1a1a1a"/>
                <g transform="translate(50, 14)">
                    <ellipse cx="-13" cy="0" rx="10" ry="16" fill="#ff69b4" stroke="white" stroke-width="1.5" transform="rotate(-25)"/>
                    <ellipse cx="13" cy="0" rx="10" ry="16" fill="#ff69b4" stroke="white" stroke-width="1.5" transform="rotate(25)"/>
                    <circle cx="0" cy="0" r="9" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
                    <circle cx="-2.5" cy="-1.5" r="2" fill="#1a1a1a"/>
                    <circle cx="2.5" cy="-1.5" r="2" fill="#1a1a1a"/>
                    <circle cx="0" cy="2.5" r="1.2" fill="#1a1a1a"/>
                </g>
                <ellipse cx="30" cy="54" rx="9" ry="12" fill="white"/>
                <ellipse cx="70" cy="54" rx="9" ry="12" fill="white"/>
                <ellipse cx="30" cy="56" rx="3.5" ry="8" fill="#1a1a1a"/>
                <ellipse cx="70" cy="56" rx="3.5" ry="8" fill="#1a1a1a"/>
                <circle cx="33" cy="51" r="2.5" fill="white"/>
                <circle cx="73" cy="51" r="2.5" fill="white"/>
                <ellipse cx="50" cy="66" rx="3.5" ry="2.5" fill="#ff69b4"/>
                <path d="M42 72 Q50 77 58 72" stroke="#ff69b4" stroke-width="2" fill="none" stroke-linecap="round"/>
                <path d="M82 68 Q90 58 86 48" stroke="#1a1a1a" stroke-width="7" fill="none" stroke-linecap="round"/>
                <ellipse cx="88" cy="46" rx="5" ry="8" fill="#ff69b4" transform="rotate(-15 88 46)"/>
            </svg>`
    },
    {
        name: "Hello Kitty",
        hint: "Tu personalidad ilumina todo a tu alrededor 🎀",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 32 L23 15 Q30 12 34 19 L31 35" fill="white" stroke="#e0e0e0" stroke-width="0.8"/>
                <path d="M82 32 L77 15 Q70 12 66 19 L69 35" fill="white" stroke="#e0e0e0" stroke-width="0.8"/>
                <ellipse cx="50" cy="52" rx="38" ry="30" fill="white"/>
                <g transform="translate(70, 26)">
                    <path d="M0 0 Q-9 -7 -16 -2 Q-20 3 -16 8 Q-9 11 0 5" fill="#ff1744"/>
                    <path d="M0 0 Q9 -7 16 -2 Q20 3 16 8 Q9 11 0 5" fill="#ff1744"/>
                    <circle cx="0" cy="2" r="4.5" fill="#ff1744"/>
                    <path d="M-2.5 2 Q0 -0.5 2.5 2 Q0 4.5 -2.5 2" fill="#b71c1c"/>
                </g>
                <ellipse cx="27" cy="54" rx="3.5" ry="5.5" fill="#1a1a1a"/>
                <ellipse cx="73" cy="54" rx="3.5" ry="5.5" fill="#1a1a1a"/>
                <ellipse cx="50" cy="60" rx="4.5" ry="3" fill="#ffd600"/>
                <line x1="10" y1="48" x2="22" y2="51" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="8" y1="56" x2="20" y2="56" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="10" y1="64" x2="22" y2="61" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="90" y1="48" x2="78" y2="51" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="92" y1="56" x2="80" y2="56" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="90" y1="64" x2="78" y2="61" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
            </svg>`
    },
    {
        name: "My Melody",
        hint: "Eres pura alegria sin esfuerzo 🌸",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 48 Q18 22 35 18 Q50 15 65 18 Q82 22 78 48 Q82 70 68 80 Q50 86 32 80 Q18 70 22 48" fill="#f8bbd0"/>
                <ellipse cx="24" cy="28" rx="11" ry="32" fill="#f8bbd0" transform="rotate(-12 24 55)"/>
                <ellipse cx="76" cy="28" rx="11" ry="32" fill="#f8bbd0" transform="rotate(12 76 55)"/>
                <ellipse cx="21" cy="32" rx="5.5" ry="18" fill="#fce4ec" transform="rotate(-12 21 55)"/>
                <ellipse cx="79" cy="32" rx="5.5" ry="18" fill="#fce4ec" transform="rotate(12 79 55)"/>
                <ellipse cx="50" cy="58" rx="25" ry="20" fill="white"/>
                <ellipse cx="37" cy="60" rx="3" ry="4.5" fill="#4a148c"/>
                <ellipse cx="63" cy="60" rx="3" ry="4.5" fill="#4a148c"/>
                <ellipse cx="50" cy="68" rx="2.5" ry="1.8" fill="#f48fb1"/>
                <path d="M46 74 Q50 77 54 74" stroke="#f48fb1" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                <g transform="translate(72, 42)">
                    <circle cx="0" cy="-5" r="4.5" fill="white"/>
                    <circle cx="5" cy="-2" r="4.5" fill="white"/>
                    <circle cx="5" cy="3" r="4.5" fill="white"/>
                    <circle cx="0" cy="6" r="4.5" fill="white"/>
                    <circle cx="-5" cy="3" r="4.5" fill="white"/>
                    <circle cx="-5" cy="-2" r="4.5" fill="white"/>
                    <circle cx="0" cy="0" r="3.5" fill="#ffeb3b"/>
                </g>
            </svg>`
    },
    {
        name: "Cinnamoroll",
        hint: "Tu forma de ser es súper bonita ☁️",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="12" cy="48" rx="22" ry="10" fill="white" stroke="#e3f2fd" stroke-width="0.6" transform="rotate(-8 12 48)"/>
                <ellipse cx="88" cy="48" rx="22" ry="10" fill="white" stroke="#e3f2fd" stroke-width="0.6" transform="rotate(8 88 48)"/>
                <ellipse cx="50" cy="52" rx="32" ry="25" fill="white"/>
                <ellipse cx="20" cy="55" rx="7" ry="5" fill="#fce4ec" opacity="0.6"/>
                <ellipse cx="80" cy="55" rx="7" ry="5" fill="#fce4ec" opacity="0.6"/>
                <circle cx="33" cy="52" r="3.5" fill="#4fc3f7"/>
                <circle cx="67" cy="52" r="3.5" fill="#4fc3f7"/>
                <circle cx="34" cy="51" r="1.2" fill="white"/>
                <circle cx="68" cy="51" r="1.2" fill="white"/>
                <ellipse cx="50" cy="58" rx="2.5" ry="1.8" fill="#ffccbc"/>
                <path d="M46 64 Q50 67 54 64" stroke="#4fc3f7" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                <path d="M72 72 Q80 68 78 76 Q75 80 72 76" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"/>
            </svg>`
    },
    {
        name: "Gudetama",
        hint: "Me encanta reírme contigo 🥚",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="72" rx="42" ry="12" fill="white" opacity="0.9"/>
                <path d="M28 58 Q24 74 50 76 Q76 74 72 58 Q68 42 50 44 Q32 42 28 58" fill="#ffd600"/>
                <path d="M24 62 Q16 66 20 72" stroke="#ffd600" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                <path d="M76 62 Q84 66 80 72" stroke="#ffd600" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                <path d="M32 76 Q28 84 36 84" stroke="#ffd600" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                <path d="M68 76 Q72 84 64 84" stroke="#ffd600" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                <line x1="38" y1="58" x2="43" y2="58" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="57" y1="58" x2="62" y2="58" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M48 64 Q50 65 52 64" stroke="#1a1a1a" stroke-width="1.2" fill="none"/>
                <ellipse cx="36" cy="52" rx="5" ry="3" fill="white" opacity="0.6"/>
            </svg>`
    }
];

const State = { revealed: 0, needed: 5, hugs: 0, stickerPeeled: false };
let lastShake = 0;
let shakeThreshold = 15;

window.onload = () => {
    initBackground();
    initFloatingHearts();
    initSparkles();
    renderCharacters();
    initShakeDetection();
};

function initBackground() {
    const bg = document.getElementById('magicBg');
    const items = ['🎀', '🖤', '💜', '✨', '⭐', '🌙'];
    for (let i = 0; i < 25; i++) {
        const el = document.createElement('div');
        el.className = 'floating-item';
        el.textContent = items[Math.floor(Math.random() * items.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.fontSize = (20 + Math.random() * 25) + 'px';
        el.style.animationDuration = (20 + Math.random() * 10) + 's';
        el.style.animationDelay = Math.random() * 5 + 's';
        bg.appendChild(el);
    }
}

function initFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['💖', '💝', '💗', '💓', '💕', '❤️', '💜', '🩷'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 20000);
    }

    for (let i = 0; i < 8; i++) {
        setTimeout(createHeart, i * 1000);
    }

    setInterval(createHeart, 3000);
}

function initSparkles() {
    const container = document.getElementById('sparkles');
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 4000);
    }

    for (let i = 0; i < 20; i++) {
        setTimeout(createSparkle, i * 200);
    }

    setInterval(createSparkle, 500);
}

function initShakeDetection() {
    if (window.DeviceMotionEvent) {
        if (typeof DeviceMotionEvent.requestPermission === 'function') {
            console.log('Se requiere permiso para acelerómetro en iOS');
        }
        
        window.addEventListener('devicemotion', handleMotion, true);
    } else {
        console.log('Acelerómetro no soportado');
    }
}

function handleMotion(event) {
    const now = Date.now();
    if (now - lastShake < 800) return;
    
    const acceleration = event.accelerationIncludingGravity;
    if (!acceleration) return;
    
    const x = acceleration.x || 0;
    const y = acceleration.y || 0;
    const z = acceleration.z || 0;
    
    const magnitude = Math.sqrt(x*x + y*y + z*z);
    
    if (magnitude > shakeThreshold) {
        lastShake = now;
        detectShake();
    }
}

function detectShake() {
    const modal = document.getElementById('letterModal');
    if (!modal.classList.contains('show')) return;
    
    addHugFromShake();
    showShakeIndicator();
    
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
}

function addHugFromShake() {
    State.hugs++;
    const hugNumber = document.getElementById('hugNumber');
    hugNumber.textContent = State.hugs;
    
    hugNumber.style.animation = 'none';
    setTimeout(() => {
        hugNumber.style.animation = 'bounce 0.5s ease';
    }, 10);
    
    const counter = document.getElementById('hugCounter');
    const rect = counter.getBoundingClientRect();
    createHeartBurst(rect.left + rect.width/2, rect.top + rect.height/2);
    
    counter.classList.add('shaking');
    setTimeout(() => {
        counter.classList.remove('shaking');
    }, 500);
}

function showShakeIndicator() {
    const indicator = document.getElementById('shakeIndicator');
    indicator.classList.add('show');
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 1500);
}

function renderCharacters() {
    const grid = document.getElementById('sanrioGrid');
    SanrioChars.forEach((char, idx) => {
        const card = document.createElement('div');
        card.className = 'sanrio-card';
        card.innerHTML = `
            <div class="svg-container">${char.svg}</div>
            <div class="char-hint">${char.hint}</div>
            <div class="char-name">${char.name}</div>
        `;
        card.onclick = (e) => reveal(card, idx, e);
        grid.appendChild(card);
    });
}

function reveal(card, idx, event) {
    if (card.classList.contains('revealed')) return;
    
    createRipple(event, card);
    
    card.classList.add('revealed');
    State.revealed++;
    
    const progress = Math.min((State.revealed / State.needed) * 100, 100);
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `${State.revealed} de ${State.needed} mensajes descubiertos`;
    
    createCelebration(event.clientX, event.clientY);
    
    if (State.revealed >= State.needed) {
        const btn = document.getElementById('revealBtn');
        btn.disabled = false;
        btn.classList.add('ready');
        btn.textContent = '💌 Leer carta final';
        
        setTimeout(() => {
            btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    }
}

function createRipple(event, element) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (event.clientY - rect.top - size/2) + 'px';
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

function createCelebration(x, y) {
    const colors = ['#ff69b4', '#ff1744', '#ffd700', '#9c27b0', '#f8bbd0'];
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        const angle = (i / 8) * Math.PI * 2;
        const velocity = 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.animation = `none`;
        document.body.appendChild(particle);
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => particle.remove();
    }
}

async function openLetter() {
    const modal = document.getElementById('letterModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        try {
            const permissionState = await DeviceMotionEvent.requestPermission();
            if (permissionState === 'granted') {
                window.addEventListener('devicemotion', handleMotion, true);
            }
        } catch (e) {
            console.log('Permiso de acelerómetro denegado');
        }
    }
    
    createConfetti();
    
    const paragraphs = document.querySelectorAll('.letter-body p');
    paragraphs.forEach((p, idx) => {
        p.classList.remove('visible');
        setTimeout(() => {
            p.classList.add('visible');
        }, idx * 300);
    });
}

function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#ff69b4', '#e91e63', '#f8bbd0', '#9c27b0', '#ffd700', '#ff1744'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
            
            const shape = Math.random();
            if (shape < 0.33) {
                confetti.style.borderRadius = '50%';
            } else if (shape < 0.66) {
                confetti.style.borderRadius = '0';
                confetti.style.transform = 'rotate(45deg)';
            } else {
                confetti.style.width = '0';
                confetti.style.height = '0';
                confetti.style.background = 'transparent';
                confetti.style.borderLeft = '5px solid transparent';
                confetti.style.borderRight = '5px solid transparent';
                confetti.style.borderBottom = '10px solid ' + colors[Math.floor(Math.random() * colors.length)];
            }
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

function closeLetter() {
    const modal = document.getElementById('letterModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function addHug(event) {
    if (event) {
        State.hugs++;
        updateHugDisplay(event.currentTarget);
    }
}

function updateHugDisplay(element) {
    const hugNumber = document.getElementById('hugNumber');
    hugNumber.textContent = State.hugs;
    
    hugNumber.style.animation = 'none';
    setTimeout(() => {
        hugNumber.style.animation = 'bounce 0.5s ease';
    }, 10);
    
    const rect = element.getBoundingClientRect();
    createHeartBurst(rect.left + rect.width/2, rect.top);
    
    const label = element.querySelector('.hug-label');
    const originalText = label.textContent;
    label.textContent = '¡Abrazo enviado! 💕';
    setTimeout(() => {
        label.textContent = originalText;
    }, 1500);
}

function createHeartBurst(x, y) {
    const hearts = ['💖', '💝', '💗', '💓', '💕'];
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = (20 + Math.random() * 15) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '10000';
        heart.style.animation = `none`;
        document.body.appendChild(heart);
        
        const angle = (i / 5) * Math.PI * 2 - Math.PI/2;
        const velocity = 80 + Math.random() * 40;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 50;
        
        heart.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(1.5)`, opacity: 0.8, offset: 0.5 },
            { transform: `translate(${tx}px, ${ty - 30}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1200,
            easing: 'ease-out'
        }).onfinish = () => heart.remove();
    }
}

function peelSticker() {
    if (State.stickerPeeled) return;
    State.stickerPeeled = true;
    
    const sticker = document.getElementById('sticker');
    sticker.classList.add('peeled');
    
    const rect = sticker.getBoundingClientRect();
    createCelebration(rect.left + rect.width/2, rect.top + rect.height/2);
}

document.getElementById('letterModal').onclick = (e) => {
    if (e.target.id === 'letterModal') closeLetter();
};
