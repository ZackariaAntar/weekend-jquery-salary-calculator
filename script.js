$(document).ready(onReady);

function onReady() {
	$("#submit-btn").on("click", fillTable); // registering event handlers
	$("#employee-data").on("click", "#removeRow", removeData);
}
//============================== Outside onReady =========================================//
let monthlyAverage = 0;

function fillTable(event) {
	event.preventDefault();

	let firstName = $("#em-first-name").val();
	let lastName = $("#em-last-name").val();
	let id = $("#em-id").val();
	let title = $("#em-title").val();
	let salary = Number($("#em-salary").val());
	let button = '<button id= "removeRow">❌</button>';

	$("table tbody").append(`
                            <tr>
                                <td class= "name"> ${firstName} ${lastName}</td>
                                <td class="id">${id}</td>
                                <td class="title">${title}</td>
                                <td class="salary">$${salary}</td>
                                <td>${button}</td>
                            </tr>
                            `);
	doTheMath(salary, 1);

	$("#em-first-name").val("");
	$("#em-last-name").val("");
	$("#em-id").val("");
	$("#em-title").val("");
	$("#em-salary").val("");
}

function removeData() {
	let updateTotal = $(this)
		.closest("tr")
		.children("td.salary")
		.text()
		.replace("$", "");
	$(this).closest("tr").remove();
	doTheMath(updateTotal, -1);
}

function doTheMath(addedValue, multiplier) {
	monthlyAverage += (addedValue / 12) * multiplier;
	$("#monthly-value").text(Math.round(monthlyAverage * 100) / 100);
	if (monthlyAverage < 20000) {
		$("#total-monthly").css("background-color", "green");
	} else {
		$("#total-monthly").css("background-color", "red");
	}
}
