//Appointment

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();


var text =
  "** DO FULL CHECK-IN PROCESS WHEN BIKE IS DROPPED OFF **\n" +
  "Appointment Booked -- " + currentDate + ": \n" +
	"[[ REQUESTS ]] : \n" +
	"[[ DEPOSIT? ]] : \n" +
  "[[ ESTIMATE QUOTED ]] : \n" +
	"[[ OTHER ]] : \n"; 

hookInText = "APPT";
document.getElementById("hookInInputField").value += hookInText;

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
