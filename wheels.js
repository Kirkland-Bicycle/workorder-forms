//Wheel Build/Repair

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();
var employeeName = document.querySelector("span[data-automation='sidebar-session-employee-name']").textContent;
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
  case "Mich Shearer":
    employeeInitial = "MS";
    break;
  case "Chase Stockwell":
    employeeInitial = "CS";
    break;
  case "Tom Maurer":
    employeeInitial = "TM";
    break;
  case "Andy Cronin":
    employeeInitial = "AC";
    break;
  case "Gavin Haynes":
    employeeInitial = "GH";
    break;
  default:
    employeeInitial = "";
}

var text =
  "Check-in -- " + employeeInitial + " " + currentDate + ":\n" +
	"[[ REQUESTS ]] : \n" +
	"[[ RIM ]] : \n" +
	"[[ HUB ]] : \n" +
	"[[ SPOKES ]] : \n" +
	"[[ NIPPLES ]] : \n" +
        "[[ SPOKE CALC (ND/D) ]] : ( F: / ) ( R: / ) \n" +
        "[[ TIRE/QR/CASSETTE/ROTOR ]] : \n" +
        "[[ TIRE PRESSURE (F/R) ]] : \n" +
	"[[ OTHER ]] : \n"; 

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
