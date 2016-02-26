//Road Bike
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
  case "New Employee":
    employeeInitial = "";
    break;
  default:
    employeeInitial = "";
}

var text =
  "Check-in -- " + employeeInitial + " " + currentDate + ":\n" +
	"[[ REQUESTS ]] : \n" +
	"[[ WHEELS ]] : \n" +
	"[[ BRAKES ]] : \n" +
	"[[ DRIVETRAIN ]] : \n" +
	"[[ CABLE KITS ]] : \n" +
  "[[ BAR TAPE]] : \n" +
	"[[ BEARINGS ]] : \n" +
	"[[ OTHER ]] : "; 

document.getElementById("noteTextArea").value += text;