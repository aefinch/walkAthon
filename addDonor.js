var allPledges = (function(currentPledges){
	var pledgeList = [];
	currentPledges.addDonor = function(addPledge){
		// console.log(pledgeList);
		// console.log(addPledge.pledgeName);
		
		pledgeList.push(addPledge);
		// pledgeList[pledgeList.length] = addPledge;
		// console.log(pledgeList[0]);
		// console.log(pledgeList);
	};
	currentPledges.getList = function(){
		return pledgeList;
	};
	return currentPledges;
})(allPledges || {});