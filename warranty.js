//Warranty

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();

var text =
  "Check-in -- " + currentDate + ":\n" +
  "[[ Item ]] : \n" +
  "[[ Serial Number ]] : \n" +
  "[[ Date of Purchase ]] : \n" +
  "[[ Proof of Purchase? ]]: \n" +
  "[[ Problem ]] : \n" +
  "[[ Other ]] : \n";

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
document.getElementById("workorder_edit_status_field").value = 12; //set workorder to warranty open
merchantos.edit_workorder.updateStatusFieldTrigger(document.getElementById("workorder_edit_status_field"))
