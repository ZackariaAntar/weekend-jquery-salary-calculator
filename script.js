$(document).ready(onReady)

function onReady(){
    $("#submit-btn").on("click", fillTable);
    // $('#!table!').on('click', '.table-button', removeData)
    // removeData()


}
//============================== Outside onReady =========================================//
let monthlyAverage= 0;

function fillTable(event){
    event.preventDefault();
    console.log('heyyyy');


	let firstName = $('#em-first-name').val()
    let lastName = $('#em-last-name').val() ;
    let id = $('#em-id').val();
    let title = $('#em-title').val();
    let salary = $('#em-salary').val();
    let button = '<button id= "removeRow">❌</button>';

    $("table tbody").append(`<tr><td class= "name"> ${firstName} ${lastName}</td> <td class="id">${id}</td><td class="title">${title}</td><td class="salary">$${salary}</td><td>${button}</td></tr>`);




    // TR
	// TD name
	// TD id
	// TD title
	// TD salary
    // TD button
	// TR
    // <input placeholder="First Name" class="text-field" id="em-first-name" type="text">

    //     <input placeholder="Last Name" class="text-field" id="em-last-name" type="text">

    //     <input placeholder="ID" class="text-field" id="em-id" type="text">

    //     <input placeholder="Title" class="text-field" id="em-title" type="text">

    //     <input placeholder="Annual Salary" class="text-field" id="em-salary" type="text"></input>

}

function removeData(){


}

function doTheMath(){
	// monthlyAverage += salary
	// console.log($(".salary").val());
	// return monthlyAverage/12
}
