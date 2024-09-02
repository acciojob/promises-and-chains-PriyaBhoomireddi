 document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting traditionally

            // Retrieve the values from the inputs
            const name = document.getElementById('name').value.trim();
            const age = document.getElementById('age').value.trim();

            // Validate inputs
            if (!name || !age) {
                alert("Please enter valid details.");
                return;
            }

            // Create a promise that resolves or rejects based on the age
            const ageCheckPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000); // 4 seconds delay
            });

            // Handle the promise resolution or rejection
            ageCheckPromise
                .then((message) => {
                    alert(message); // Show success message
                })
                .catch((message) => {
                    alert(message); // Show failure message
                });
        });