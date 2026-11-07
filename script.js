let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteDiv = document.querySelector(".qoute-display");
let quoteId = document.querySelector(".qoute-id");
let autoStatus = document.querySelector(".auto-status");
let intervalId;

generateBtn.onclick = generateQuote;
autoBtn.onclick = startAutoPlay;
stopBtn.onclick = stopAutoPlay;

async function getQoutes() {
  const response = await fetch("quotes.json");
  const data = await response.json();
  return data;
 
}
async function generateQuote() {
  const quotes = await getQoutes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDiv.innerHTML = quote.text;
  quoteId.innerHTML = quote.id;
}

function startAutoPlay() {
  intervalId = setInterval(generateQuote, 2000);
  autoStatus.innerHTML = "Auto: ON";
}

function stopAutoPlay() {
  clearInterval(intervalId);
  autoStatus.innerHTML = "";
}
