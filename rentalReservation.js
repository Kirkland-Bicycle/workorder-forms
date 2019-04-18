//Rental Reservation

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();

var text =
	"Reserved -- " + currentDate + ": \n" +
	"[[ REQUESTS ]] : \n" +
	"[[ DEPOSIT? ]] : \n" +
	"[[ OTHER ]] : \n"; 

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
document.getElementById("workorder_edit_status_field").value = 16;
merchantos.edit_workorder.updateStatusFieldTrigger(document.getElementById("workorder_edit_status_field"));
