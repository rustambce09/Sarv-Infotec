// Select the input field and all buttons
const display = document.querySelector(".input input");
const buttons = document.querySelectorAll(".box");

let expression = "";

// Add click event to every button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        // AC - Clear everything
        if (value === "AC") {
            expression = "";
            display.value = "";
        }

        // x - Backspace
        else if (value === "x") {
            expression = expression.slice(0, -1);
            display.value = expression;
        }

        // = - Calculate result
        else if (value === "=") {
            try {
                expression = expression.replace("×", "*");
                display.value = eval(expression);
                expression = display.value;
            } catch (error) {
                display.value = "Error";
                expression = "";
            }
        }

        // Numbers and operators
        else {
            expression += value;
            display.value = expression;
        }
    });
});