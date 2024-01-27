var today = new Date();
var currentDate = `${(today.getMonth() + 1)}`.padStart(2, "0") + "/" + today.getDate();
var employee = window.merchantos.session.getEmployee();
var employeeName = `${employee.firstName} ${employee.lastName.slice(0, 1)}`;

var text =
	"===== INTAKE =====\n" +
	"= " + currentDate + " (" + employeeName + ") =\n" +
	"[[ REQUESTS ]] : \n" +
	"[[ LAST BIKE SERVICE? ]] : \n" +
	"[[ CUSTOMER PROVIDED PARTS? ]] : \n" +
	"[[ DEPOSIT (Y/N)? ]] : \n" +
	"[[ OTHER ]] : \n";

var textArea = document.getElementById("noteTextArea");
textArea.value = text + textArea.value;
textArea.onchange();