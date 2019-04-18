//Rental Out

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();

var text =
	"Sent Out -- " + currentDate + ": \n" +
	"[[ Helmet/Lock/Repair Kit ]] : \n" +
	"[[ OTHER ]] : \n"; 

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
document.getElementById("workorder_edit_status_field").value = 18;
merchantos.edit_workorder.updateStatusFieldTrigger(document.getElementById("workorder_edit_status_field"));
