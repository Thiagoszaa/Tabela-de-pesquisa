
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get product details
    const code = document.getElementById('productCode').value;
    const name = document.getElementById('productName').value;
    const Departamento = document.getElementById('Departamento').value;
    const price = parseFloat(document.getElementById('productPrice').value).toFixed(2);

    // Create new row for the product
    const tableBody = document.querySelector('#productTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `<td>${code}</td><td>${name}</td> <td>${Departamento}</td><td>$${price}</td>`;
    tableBody.appendChild(newRow);

    // Clear the form
    document.getElementById('productForm').reset();


});


document.getElementById('searchBar').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#productTable tbody tr');

    rows.forEach(row => {
        const productName = row.cells[1].textContent.toLowerCase();
        if (productName.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});


