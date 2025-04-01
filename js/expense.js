// Add expense function
function addExpense() {
    const category = document.getElementById("expenseCategory").value;
    const amount = document.getElementById("expenseAmount").value;

    // Check if both fields are filled
    if (category && amount) {
        // Get the current expense list from localStorage
        const expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];

        // Add new expense to the list
        expenseList.push({ category, amount });

        // Store the updated list back to localStorage
        localStorage.setItem("expenseList", JSON.stringify(expenseList));

        // Display updated expense list
        displayExpenses();

        // Clear input fields
        document.getElementById("expenseCategory").value = "";
        document.getElementById("expenseAmount").value = "";

        // Alert user of success
        alert("Expense added successfully!");
    } else {
        // Alert user if fields are empty
        alert("Please fill all fields!");
    }
}

// Display expenses from localStorage
function displayExpenses() {
    const expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];
    const listElement = document.getElementById("expenseList");

    // Clear the current list
    listElement.innerHTML = "";

    // Loop through the expense list and display each item
    expenseList.forEach((expense) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${expense.category} - $${expense.amount}`;
        listElement.appendChild(listItem);
    });
}

// Display expenses on page load
displayExpenses();
