$(document).ready(onReady)

function onReady(){
    $("#submit-btn").on("submit", fillTable);
    $('#!table!').on('click', '.table-button', removeData)
    removeData()


}
//============================== Outside onReady =========================================//
let monthlyAverage= 0;

function fillTable(event){
	let name = (`${$('em-first-name').val()} ${$('em-last-name')}`) ;
    let id = $('em-id').val();
    let title = $('em-title').val();
    let salary = $('em-salary').val();
    let button = <button id= 'removeRow'>❌</button>;

    $("#table").append(`<tr> <td class = "name"> ${name}</td> <td class = "id"> ${id} </td> <td class = "title> ${title}</td> <td class='salary'>${Number(salary)}</td> <td>>${button}</td></tr>`);



doTheMath()

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
    event.preventDefault()
}

function removeData(){


}

function doTheMath(){
	// monthlyAverage += salary
	// console.log($(".salary").val());
	// return monthlyAverage/12
}
