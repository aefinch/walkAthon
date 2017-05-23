var allPledges = (function(currentPledges){
	var tableString = "";
	pledgeArray = allPledges.getList();
	currentPledges.setupTable=function(){
		tableString=`<tr class="text-muted">
					<td>John Does</td>
					<td>john.doe@gmail.com</td>
					<td>$75</td>
					<td>lump sum</td>
				</tr>
				<tr class="text-muted">
					<td>Jane Smith</td>
					<td>jane.smith@hotmail.com</td>
					<td>$10</td>
					<td>per lap</td>
				</tr>`
				tableBody.innerHTML=tableString;
	};
	currentPledges.updateTable=function(){
	// console.log(pledgeArray);
		var newtableString="";
		for (var x=0; x<pledgeArray.length; x++){
			newtableString+=`<tr>
					<td>${pledgeArray[x].pledgeName}</td>
					<td>${pledgeArray[x].email}</td>
					<td>$${pledgeArray[x].donation}</td>
					<td>${pledgeArray[x].frequency}</td>
				</tr>`
		}
		tableBody.innerHTML=tableString + newtableString;
		
	}

	return currentPledges;

})(allPledges || {});