//Appointment

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();
var employeeName = document.getElementById("session_employee").textContent;
var employeeInitial;

switch (employeeName) {
  case "Parker Couch":
    employeeInitial = "PC";
    break;
  case "Joe Beyler":
    employeeInitial = "JB";
    break;
  case "Nick Miller":
    employeeInitial = "NM";
    break;
  case "Josh Harris":
    employeeInitial = "JRH";
    break;
  case "Matt Caracoglia":
    employeeInitial = "MC";
    break;
  case "Heather Blood":
    employeeInitial = "HB";
    break;
  case "Garrett Stuart":
    employeeInitial = "GS";
    break;
  case "Mike Clark":
    employeeInitial = "MEC";
    break;
  case "Devin Sweeney":
    employeeInitial = "DFS";
    break;
  case "Tom Maurer":
    employeeInitial = "TM";
    break;
  case "Zachary Holland":
    employeeInitial = "ZH";
    break;
  case "Ken Fitzpatrick":
    employeeInitial = "KF";
    break;
  case "Andy Cronin":
    employeeInitial = "AC";
    break;
  default:
    employeeInitial = "";
}

var text =
  "** DO FULL CHECK-IN PROCESS WHEN BIKE IS DROPPED OFF **\n" +
  "Appointment Booked -- " + employeeInitial + " " + currentDate + ": \n" +
	"[[ REQUESTS ]] : \n" +
	"[[ DEPOSIT? ]] : \n" +
  "[[ ESTIMATE QUOTED ]] : \n" +
	"[[ OTHER ]] : \n"; 

hookInText = "APPT - " + employeeInitial;
document.getElementById("hookInInputField").value += hookInText;

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;