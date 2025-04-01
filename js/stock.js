function addStock() {
    const vendorName = document.getElementById("vendorName").value;
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    if (vendorName && productName && quantity && price) {
        const stockList = JSON.parse(localStorage.getItem("stockList")) || [];
        const stockItem = { vendorName, productName, quantity, price };
        stockList.push(stockItem);
        localStorage.setItem("stockList", JSON.stringify(stockList));

        displayStocks();
        alert("Stock added successfully!");
    } else {
        alert("Please fill all fields!");
    }
}

function sellStock() {
    const productName = document.getElementById("saleProductName").value;
    const quantitySold = document.getElementById("saleQuantity").value;
    const salePrice = document.getElementById("salePrice").value;

    if (productName && quantitySold && salePrice) {
        const stockList = JSON.parse(localStorage.getItem("stockList")) || [];
        const stockItem = stockList.find(item => item.productName === productName);

        if (stockItem && stockItem.quantity >= quantitySold) {
            // Update stock quantity
            stockItem.quantity -= quantitySold;

            // Save the updated stock back to localStorage
            localStorage.setItem("stockList", JSON.stringify(stockList));

            // Generate an invoice for the sale
            generateInvoice(productName, quantitySold, salePrice);

            displayStocks();
            alert("Sale completed successfully!");
        } else {
            alert("Not enough stock available for sale.");
        }
    } else {
        alert("Please fill all fields!");
    }
}

function generateInvoice(productName, quantitySold, salePrice) {
    const totalAmount = quantitySold * salePrice;
    const invoiceData = {
        productName,
        quantitySold,
        salePrice,
        totalAmount,
        date: new Date().toLocaleString(),
        companyName: "Andi Software Solutions",
    };

    // Save invoice details to localStorage (could be expanded further)
    const invoices = JSON.parse(localStorage.getItem("invoices")) || [];
    invoices.push(invoiceData);
    localStorage.setItem("invoices", JSON.stringify(invoices));

    // Optionally, you could show the invoice on a separate page or section
    alert(`Invoice generated for ${productName} - Total: $${totalAmount}`);
}

function displayStocks() {
    const stockList = JSON.parse(localStorage.getItem("stockList")) || [];
    const listElement = document.getElementById("stockList");
    listElement.innerHTML = "";
    stockList.forEach((stock, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${stock.vendorName} - ${stock.productName} - Qty: ${stock.quantity} - $${stock.price}`;
        listElement.appendChild(listItem);
    });
}

displayStocks();

function sellStock() {
    const productName = document.getElementById("saleProductName").value;
    const quantitySold = document.getElementById("saleQuantity").value;
    const salePrice = document.getElementById("salePrice").value;

    if (productName && quantitySold && salePrice) {
        const stockList = JSON.parse(localStorage.getItem("stockList")) || [];
        const stockItem = stockList.find(item => item.productName === productName);

        if (stockItem && stockItem.quantity >= quantitySold) {
            // Update stock quantity
            stockItem.quantity -= quantitySold;

            // Save the updated stock back to localStorage
            localStorage.setItem("stockList", JSON.stringify(stockList));

            // Generate an invoice for the sale (add sale to salesList)
            generateInvoice(productName, quantitySold, salePrice);

            // Create sale entry for invoice
            const saleData = {
                productName,
                quantitySold,
                price: salePrice,
            };

            const salesList = JSON.parse(localStorage.getItem("salesList")) || [];
            salesList.push(saleData);
            localStorage.setItem("salesList", JSON.stringify(salesList));

            displayStocks();
            alert("Sale completed successfully!");
        } else {
            alert("Not enough stock available for sale.");
        }
    } else {
        alert("Please fill all fields!");
    }
}

