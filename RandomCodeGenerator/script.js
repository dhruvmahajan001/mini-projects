const quotes = [
  "Discipline beats motivation every day.",
  "Start where you are. Use what you have.",
  "Small steps every day create big results.",
  "Dreams don't work unless you do.",
  "Consistency is the real superpower.",
  "Your future needs you, not your past.",
  "Hard work makes luck predictable.",
  "Progress over perfection.",
  "Silence your excuses. Execute.",
  "You become what you repeat.",
  "Fear fades when action begins.",
  "Success is rented, and rent is due daily.",
  "Stay focused. Stay humble.",
  "Do it tired. Do it scared.",
  "Growth starts outside comfort.",
  "Build habits, not excuses.",
  "One day or day one. Choose.",
  "Confidence comes from keeping promises to yourself.",
  "Fall seven times, rise eight.",
  "Your mindset writes your reality.",
  "Action cures overthinking.",
  "Be obsessed with improvement.",
  "Pain is temporary, pride is forever.",
  "Work in silence, results speak.",
  "Discomfort is the price of growth.",
  "Chase progress, not people.",
  "Time will pass anyway.",
  "Success loves preparation.",
  "You are stronger than you think.",
  "Focus is a skill. Train it.",
  "Nothing changes if nothing changes.",
  "Earn your confidence.",
  "Patience is power.",
  "Turn pressure into progress.",
  "You don't need motivation, you need discipline.",
  "Effort compounds.",
  "Your standards shape your life.",
  "Win the morning, win the day.",
  "Doubt kills more dreams than failure.",
  "The grind reveals character.",
  "Show up even when it's hard.",
  "Stay hungry, stay learning.",
  "Consistency builds credibility.",
  "Make yourself proud.",
  "Vision without action is noise.",
  "Work now, shine later.",
  "Focus on what you can control.",
  "Be relentless, not reckless.",
  "Every day is a chance to level up."
];


const button=document.querySelector('button');
const quote=document.querySelector('h1');

button.addEventListener('click',()=>{
        const index=Math.floor(Math.random()*50);
        quote.textContent=quotes[index];
}) 