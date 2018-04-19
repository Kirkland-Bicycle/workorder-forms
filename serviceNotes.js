//Service Notes

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
  case "Heather Blood":
    employeeInitial = "HB";
    break;
  case "Garrett Stuart":
    employeeInitial = "GS";
    break;
  case "Tom Maurer":
    employeeInitial = "TM";
    break;
  case "James \"Kevin\" Matulis":
    employeeInitial = "JKM";
    break;
  case "Andy Cronin":
    employeeInitial = "AC";
    break;
  default:
    employeeInitial = "";
}

var text =
  "Servie -- " + employeeInitial + " " + currentDate + ":\n" +
	"[[ MECHANIC'S NOTES ]] : \n" +
	"[[ WHEELS ]] : (Front: psi; Rear: psi)\n" +
	"[[ BRAKES ]] : \n" +
	"[[ DRIVETRAIN ]] : \n" +
	"[[ CABLE KITS ]] : \n" +
	"[[ BEARINGS ]] : \n" +
	"[[ SUSPENSION ]] : (Fork: psi; Shock: psi)\n" +
 	"[[ GRIPS/BAR TAPE ]] : \n" +
        "[[ PARTS ALLOWANCE USED (Y/N) ]] : \n" +
        "[[ RECOMMENDATIONS ]] : \n" +
        "[[ CALLED (Y/N) ]] : \n" +
	"[[ OTHER ]] : \n";

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
