//Fit Appointment

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();

var text =
	"Appointment Booked -- " + currentDate + ": \n" +
	"[[ Main Issues ]] : \n" +
	"[[ Type of Bike ]] : \n" +
	"[[ OTHER ]] : \n"; 

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
document.getElementById("workorder_edit_status_field").value = 24;
merchantos.edit_workorder.updateStatusFieldTrigger(document.getElementById("workorder_edit_status_field"));
