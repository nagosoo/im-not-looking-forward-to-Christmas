const text = "TIME TILL CHRISTMAS";
const titleHeader = document.getElementById("animated-text");

for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    if (char === " ") {
        span.style.width = "1ch";
    }
    titleHeader.appendChild(span);
}

const spans = titleHeader.querySelectorAll("span");
spans.forEach((span, index) => {
    span.style.animationDelay = `${(index + 1) * 0.1}s`;
});