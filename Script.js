// Changing the wallpaper background

rand = parseInt(Math.random() * 7 + 1);
document.getElementById("change").style.backgroundImage =
  "url(./images/bg" + rand + ".WEBP)";

// Changing text heading in the webpage

let heading = document.getElementsByClassName("heading");
let x = "SATYA'S CREATION";
let y = "Hii I'M SATYAPRAKASH";
let z = "SATYAPRAKASH SWAIN";
heading[0].innerHTML = "";
let to1 = setInterval(topic1, 150);
let re1 = setInterval(remove1, 20);
let to2 = setInterval(topic2, 150);
let re2 = setInterval(remove2, 20);
let to3 = setInterval(topic3, 150);
let re3 = setInterval(remove3, 20);
let i = 0;
function topic1() {
  heading[0].innerHTML += x.charAt(i);
  i++;
  if (i == x.length + 2) {
    clearInterval(to1);
  }
}
function remove1() {
  if (i >= x.length + 2) {
    heading[0].innerHTML = heading[0].innerHTML.slice(0, -1);
    i++;
    if (i == (x.length + 2) * 2) {
      clearInterval(re1);
    }
  }
}
function topic2() {
  if (i >= (x.length + 2) * 2) {
    heading[0].innerHTML += y.charAt(i - (x.length + 2) * 2);
    i++;
    if (i == (x.length + 2) * 2 + y.length + 2) {
      clearInterval(to2);
    }
  }
}
function remove2() {
  if (i >= (x.length + 2) * 2 + y.length + 2) {
    heading[0].innerHTML = heading[0].innerHTML.slice(0, -1);
    i++;
    if (i == (x.length + 2) * 2 + (y.length + 2) * 2) {
      clearInterval(re2);
    }
  }
}
function topic3() {
  if (i >= (x.length + 2) * 2 + (y.length + 2) * 2) {
    heading[0].innerHTML += z.charAt(
      i - ((x.length + 2) * 2 + (y.length + 2) * 2)
    );
    i++;
    if (i == (x.length + 2) * 2 + (y.length + 2) * 2 + z.length + 2) {
      clearInterval(to3);
    }
  }
}
function remove3() {
  if (i >= (x.length + 2) * 2 + (y.length + 2) * 2 + z.length + 2) {
    heading[0].innerHTML = heading[0].innerHTML.slice(0, -1);
    i++;
    if (i == (x.length + 2) * 2 + (y.length + 2) * 2 + (z.length + 2) * 2) {
      clearInterval(re3);
      to1 = setInterval(topic1, 150);
      re1 = setInterval(remove1, 20);
      to2 = setInterval(topic2, 150);
      re2 = setInterval(remove2, 20);
      to3 = setInterval(topic3, 150);
      re3 = setInterval(remove3, 20);
      i = 0;
    }
  }
}

function linkRedirect() {
  window.location = "./alllinks.html";
}
function aboutRedirect() {
  window.location = "./About.html";
}
function myPortfolio() {
  window.location = "./portfolio.html";
}
function myevents() {
  window.location = "./events.html";
}
function aboutStudyMaterial() {
  window.location = "./study material/index.html";
}
function contactMe() {
  window.location = "./contact me/index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const clostBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const chatBotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotIcon = document.getElementById("chatbot-icon");

  chatbotIcon.addEventListener("click", () => {
    chatbotContainer.classList.remove("hidden");
    chatbotIcon.style.display = "none";
  });
  clostBtn.addEventListener("click", () => {
    chatbotContainer.classList.add("hidden");
    chatbotIcon.style.display = "flex";
  });

  sendBtn.addEventListener("click", sendMessage);

  chatBotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});

function sendMessage() {
  const userMessage = document.getElementById("chatbot-input").value.trim();
  if (userMessage) {
    appendMessage("user", userMessage);
    document.getElementById("chatbot-input").value.trim();
    getBotResponse(userMessage);
  }
}

function appendMessage(sender, message) {
  const messageContainer = document.getElementById("chatbot-messages");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

async function getBotResponse(userMessage) {
  const API_KEY = "AIzaSyD-Ar5TTW0ycH-hPSUJJERPhUlq0pgZG8Y";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: userMessage }],
          },
        ],
      }),
    });

    const data = await response.json();

    if (!data.candidates || !data.candidates.length) {
      throw new Error("No response from Gemini API");
    }

    const botMessage = data.candidates[0].content.parts[0].text;
    appendMessage("bot", botMessage);
  } catch (error) {
    console.error("Error:", error);
    appendMessage(
      "bot",
      "Sorry, I'm having trouble responding. Please try again."
    );
  }
}
