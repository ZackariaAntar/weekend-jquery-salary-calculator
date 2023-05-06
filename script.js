$(document).ready(onReady)

function onReady(){
    $("#submit-btn").on("click", fillTable);
    $('#employee-data').on('click', '#removeRow', removeData)
    // removeData()


}
//============================== Outside onReady =========================================//
let monthlyAverage= 0;

function fillTable(event){
    event.preventDefault();

	let firstName = $('#em-first-name').val()
    let lastName = $('#em-last-name').val() ;
    let id = $('#em-id').val();
    let title = $('#em-title').val();
    let salary = Number($('#em-salary').val());
    let button = '<button id= "removeRow">❌</button>';

    $("table tbody").append(`<tr><td class= "name"> ${firstName} ${lastName}</td> <td class="id">${id}</td><td class="title">${title}</td><td class="salary">$${salary}</td><td>${button}</td></tr>`);
    doTheMath(salary);
    $("#total-monthly").append(`${monthlyAverage}`)



    $("#em-first-name").val('');
	$("#em-last-name").val('');
	$("#em-id").val('');
	$("#em-title").val('');
	$("#em-salary").val('');



}

function removeData(){
    $(this).closest('tr').remove()

}

function doTheMath(value){
	monthlyAverage += value/12

}
