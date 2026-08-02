const row1 = document.getElementById("row1");

const original = row1.innerHTML;

row1.addEventListener("mouseover", () => {
    row1.innerHTML = `
        <b>For coding agents</b><br>
        to deploy in their native language,<br>
        with Vercel's API, CLI, MCP,<br>
        and Skills.
    `;

    row1.style.opacity = "0.5";
    row1.style.lineHeight = "1.3";
});

row1.addEventListener("mouseout", () => {
    row1.innerHTML = original;
});