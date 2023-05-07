$(document).ready(onReady); // load onReady when page loads.

function onReady() {
	$("#submit-btn").on("click", fillTable); // registering event handler to the form submit button
	$("#employee-data").on("click", "#removeRow", removeData); // registering event handler to the table remove button
}
//============================== Outside onReady =========================================//
let monthlyAverage = 0;// creating a variable to store the averaged monthly salary expense.

function fillTable(event) {
	event.preventDefault();// prevents submit button from refreshing the page.

	let firstName = $("#em-first-name").val(); //creating variables to store the data entered into the form that will later be appended to the table.
	let lastName = $("#em-last-name").val();
	let id = $("#em-id").val();
	let title = $("#em-title").val();
	let salary = Number($("#em-salary").val());
	let button = '<button id= "removeRow">❌</button>';
    // jQuery functionality to create table row and cells using the data entered into the form.
	$("table tbody").append(`
                            <tr>
                                <td class= "name"> ${firstName}</td>
                                <td> class="lastName" ${lastName}</td>
                                <td class="id">${id}</td>
                                <td class="title">${title}</td>
                                <td class="salary">$${salary}</td>
                                <td>${button}</td>
                            </tr>
                            `);
	doTheMath(salary, 1); // after data is on the table, run the doTheMath function to calculate the averaged monthly expense of employee salaries

	$("#em-first-name").val(""); // clearing the data input fields.
	$("#em-last-name").val("");
	$("#em-id").val("");
	$("#em-title").val("");
	$("#em-salary").val("");
}

function removeData() { // removes rows from the table when button is pressed and recalculates the averaged monthly salary expenses.
	let updateTotal = $(this) // storing the anual salary string immediately next to the this button.
		.closest("tr")
		.children("td.salary")
		.text()
		.replace("$", "");
	$(this).closest("tr").remove();// functionality to remove the row.
	doTheMath(updateTotal, -1); //updates the averaged monthly salary expense using the data stored in the salary cell on this row.
}

function doTheMath(addedValue, multiplier) { // calculates the average monthly salary expense and changes the css of the value on the DOM if above or below $20000.
	monthlyAverage += (addedValue / 12) * multiplier;// stored salary input in monthlyAverage, then divides by 12 to reflect a monthly average, and multiplies by a potitive or negative multiplier to either increase or decrease based on if we are adding or removing a salary from the table. 
	$("#monthly-value").text(Math.round(monthlyAverage * 100) / 100); // rounds the averge expense to reflect standard currency conventions.
	if (monthlyAverage < 20000) { // conditional that invokes css change based on averge monthly salry expense.
		$("#total-monthly").css("background-color", "green");
	} else {
		$("#total-monthly").css("background-color", "red");
	}
}
