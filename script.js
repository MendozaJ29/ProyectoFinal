document.addEventListener("DOMContentLoaded", function () {
    // VARIABLES DE AUTENTICACIÓN
    const validUsername = "alumno";
    const validPassword = "2024";

    // REFERENCIAS AL DOM
    const loginForm = document.getElementById("login-form");
    const loginSection = document.getElementById("login-section");
    const courseSection = document.getElementById("course-section");
    const loginError = document.getElementById("login-error");
    const evaluationButton = document.getElementById("start-evaluation");
    const quizForm = document.getElementById("quiz-form");
    const scoreDisplay = document.getElementById("score");

    // FUNCIÓN DE AUTENTICACIÓN
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del formulario

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === validUsername && password === validPassword) {
                // Ocultar la sección de login y mostrar la sección del curso
                loginSection.style.display = "none";
                courseSection.style.display = "block";
            } else {
                // Mostrar mensaje de error
                loginError.style.display = "block";
            }
        });
    }

    // FUNCIÓN DEL BOTÓN "REALIZAR EVALUACIÓN"
    if (evaluationButton) {
        evaluationButton.addEventListener("click", function () {
            // Redirigir a la página de evaluación
            window.location.href = "evaluacion.html";
        });
    }

    // FUNCIÓN PARA EL FORMULARIO DE EVALUACIÓN
    if (quizForm) {
        quizForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita recargar la página

            let score = 0;

            // Evaluar pregunta 1 (radio buttons)
            const question1 = document.querySelector('input[name="question1"]:checked');
            if (question1 && question1.value === "1") {
                score++;
            }

            // Evaluar pregunta 2 (checkboxes)
            const question2 = document.querySelectorAll('input[name="question2"]:checked');
            question2.forEach(option => {
                if (option.value === "1") {
                    score++;
                }
            });

            // Evaluar pregunta 3 (lista desplegable)
            const question3 = document.getElementById("question3").value;
            if (question3 === "1") {
                score++;
            }

            // Mostrar la calificación
            scoreDisplay.textContent = `Tu calificación es: ${score}/3`;
        });
    }
});
