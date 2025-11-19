let input = "";

// Handle Button Press
function press(value) {

    // Prevent two operators together (like ++, --)
    const operators = ['+', '-', '*', '/'];

    if (
        operators.includes(value) &&
        operators.includes(input.slice(-1))
    ) {
        return; // Do nothing (auto erase wrong input)
    }

    input += value;
    document.getElementById("display").value = input;
}

// Clear Display
function clearDisplay() {
    input = "";
    document.getElementById("display").value = "";
}

// Evaluate Expression
function calculate() {
    try {
        let result = eval(input);
        document.getElementById("display").value = result;
        input = result.toString();
    } catch {
        document.getElementById("display").value = "Error";
        input = "";
    }
}

// Dark / Light Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark");

    let btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️ Light Mode";
    } else {
        btn.innerHTML = "🌙 Dark Mode";
    }
}
