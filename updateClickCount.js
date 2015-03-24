
var clickCount = 0;
var cat = {
	name: "",
	clickCount: 0,
	imgSrc=""
}





function startProcessing(){
	$('#catImg').click(updateClickCount);
}

var updateClickCount = function(){
	clickCount++;
	var label = document.getElementById('clickCount');
	label.textContent = clickCount;
};

$(document).ready(startProcessing);