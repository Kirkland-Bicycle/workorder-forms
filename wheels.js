//Wheel Build/Repair

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();

var text =
  "Check-in -- " + currentDate + ":\n" +
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
