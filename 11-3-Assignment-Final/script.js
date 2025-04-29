const fortunes = [
    "Yes, absolutely!",
    "Ask again later.",
    "Not likely.",
    "The future is unclear.",
    "Yes, but you must take action.",
    "Maybe, it depends on your choices.",
    "No, don't count on it.",
    "I see great things ahead for you.",
    "The stars align in your favor.",
    "Don't worry, things will turn out fine."
];

function getFortune() {
    const question = document.getElementById("question").value;
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    document.getElementById("fortune").textContent = fortune;
}
