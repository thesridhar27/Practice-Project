let subtotal = 0;

function addItem() {
    let itemSelect = document.getElementById("item");
    let itemName = itemSelect.options[itemSelect.selectedIndex].text;
    let price = parseInt(itemSelect.value);
    let qty = parseInt(document.getElementById("qty").value);

    if (!qty || qty <= 0) {
        alert("Enter valid quantity");
        return;
    }

    let total = price * qty;
    subtotal += total;

    let row = `
        <tr>
            <td>${itemName}</td>
            <td>₹${price}</td>
            <td>${qty}</td>
            <td>₹${total}</td>
        </tr>
    `;

    document.getElementById("bill").innerHTML += row;

    updateTotals();
}

function updateTotals() {
    let gst = subtotal * 0.05;
    let grand = subtotal + gst;

    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("gst").innerText = gst.toFixed(2);
    document.getElementById("grand").innerText = grand.toFixed(2);
}

function generateBill() {
    alert("Bill Generated Successfully!");
}