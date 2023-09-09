
    document.addEventListener("DOMContentLoaded", function () {
        const signUpForm = document.querySelector("form");
        signUpForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form input values
            const firstName = document.getElementById("fname").value;
            const lastName = document.getElementById("lname").value;
            const dob = document.getElementById("dob").value;
            const age = document.getElementById("age").value;
            const gender = document.getElementById("sex").value;
            const phoneNumber = document.getElementById("ph").value;
            const email = document.getElementById("email").value;
            const address = document.getElementById("add").value;
            const state = document.getElementById("sta").value;
            const username = document.getElementById("username").value;
            const password = document.getElementById("pass").value;
            const confirmPassword = document.getElementById("conpass").value;

            // Validation logic goes here
            if (validateForm(firstName, lastName, dob, age, gender, phoneNumber, email, address, state, username, password, confirmPassword)) {
                // Submit the form or perform other actions
                alert("Form submitted successfully!");
            }
        });

        function validateForm(firstName, lastName, dob, age, gender, phoneNumber, email, address, state, username, password, confirmPassword) {
            // Add your validation logic here
            // For example, check if required fields are not empty
            if (!firstName || !lastName || !dob || !age || !gender || !phoneNumber || !email || !address || !state || !username || !password || !confirmPassword) {
                alert("All fields are required.");
                return false;
            }

            // Check if password and confirm password match
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }

            // Add more validation rules as needed

            return true; // Form is valid
        }
    });

