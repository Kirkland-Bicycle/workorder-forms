//Intake

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();

var text =
  "Intake -- " + currentDate + ":\n" +
	"[[ REQUESTS ]] : \n" +
	"[[ LAST BIKE SERVICE? ]] : \n" +
	"[[ LAST SUSPENSION SERVICE? ]] : \n" +
	"[[ LAST SEALANT TOP-OFF? ]] : \n" +
	"[[ KEYS (Y/N)? ]] : \n" +
	"[[ CUSTOMER PROVIDED PARTS? ]] : \n" +
	"[[ OTHER ]] : \n"; 

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
