var pledgeName = document.getElementById("pledgeName");
var email = document.getElementById("email");
var donation = document.getElementById("donation");
// var frequency = document.getElementsByClassName("frequency");
var perLap=document.getElementById("perLap");
var lumpSum=document.getElementById("lumpSum");
// console.log(frequency);
var buttons = document.getElementsByTagName("button");
var donorForm = document.getElementById("donorForm");
var tableBody = document.getElementById("tableBody");

allPledges.setupTable();

function createPledgeObject(){
	
	var pledge = {};
	pledge["pledgeName"]=pledgeName.value;
	pledge["email"]=email.value;
	pledge["donation"]=donation.value;
	if (perLap.checked===true){
		pledge["frequency"]="per lap";
	} else if (lumpSum.checked===true){
		pledge["frequency"]="lump sum";
	} 
	// pledge["frequency"]=frequency.selected.value;
	// console.log(pledge);
	allPledges.addDonor(pledge);
	// var test = allPledges.getList();
	// console.log(test);
	allPledges.updateTable();
}

function whichButton (event){
	// console.log(event.target.textContent);
	if (event.target.textContent==="Cancel"){
		donorForm.reset();
	} else {
		createPledgeObject();
		donorForm.reset();
	}
}

for(var i=0; i<buttons.length; i++) {
	buttons[i].addEventListener("click", whichButton);
}