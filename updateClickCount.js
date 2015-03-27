var ClickCount = function(clickCount1,clickCount2){
	this.clickCount1 = clickCount1;
	this.clickCount2 = clickCount2;
};

ClickCount.prototype.setClickCount1 = function(clickCount){
	this.clickCount1 = clickCount;
}

var clkCounts = new ClickCount(0,0);


var Cat = function(id,clickCount){
	// this.name= name; // name of the cat. - actually not needed since we have unique IDs.
	this.id = id; // id of the img tag with the cat's picturrre
	this.clickCount = clickCount; // number of times this cat has been clicked on. 
};

Cat.prototype.incrementClickCount= function(){
	this.clickCount++;
};


function startProcessing(clkCounts){
	$('#catImg1').on('click',clkCounts,clickHandler);
	$('#catImg2').on('click',clkCounts,clickHandler);	
}

var clickHandler = function(e){
	var catId = this.id;
	//clkCounts.clickCount1 = clkCounts.clickCount1 + 1;
	//clkCounts.clickCount2 = clkCounts.clickCount2 + 1;
	
	updateClickCountLabels(catId);
};

var updateClickCountLabels = function(catId){
	var text = "";
	var clk1, clk2;
	if(catId === "catImg1")
	{
		var label = document.getElementById("clickCount1");
		var clk1 = clkCounts.clickCount1;  // retrieve clickCount1 from global var.
		clkCounts.clickCount1 = clk1 + 1;
		text = "You clicked on Freddy " + clkCounts.clickCount1 + " times!";
		label.textContent = text;
	}
	else if (catId === "catImg2")
	{
		var label = document.getElementById("clickCount2");
		var clk2 = clkCounts.clickCount2;  // retrieve clickCount1 from global var.
		clkCounts.clickCount2 = clk2 + 1;
		text = "You clicked on Timmy " + clkCounts.clickCount2 + " times!";
		label.textContent = text;
	}
	
};


function createCats(){
	var cat1 = new Cat("",0);
	var cat2 = new Cat("",0);
    var cats = [cat1, cat2];
	return cats;
}

$(document).ready(startProcessing);
