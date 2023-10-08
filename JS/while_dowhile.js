document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const whileLoopButton = document.getElementById("whileLoopButton");
    const doWhileLoopButton = document.getElementById("doWhileLoopButton");

    whileLoopButton.addEventListener("click", function () {
        output.innerHTML = "While Loop Output: <br>";
        let i = 0;
        while (i < 5) {
            output.innerHTML += `Iteration ${i + 1} <br>`;
            i++;
        }
    });

    doWhileLoopButton.addEventListener("click", function () {
        output.innerHTML = "Do-While Loop Output: <br>";
        let i = 0;
        do {
            output.innerHTML += `Iteration ${i + 1} <br>`;
            i++;
        } while (i < 5);
    });
});
