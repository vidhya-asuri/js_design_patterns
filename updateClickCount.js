var displayCat = function(){
	var id = this.id;
	var catPicName = id + ".jpg";
	var catPicTable = document.getElementById("catPic"); 
	var catImg = document.createElement("img"); 
	catImg.src=catPicName;
	catImg.className="catImg";

	while(catPicTable.hasChildNodes())
	{
		// remove child 
		catPicTable.removeChild(catPicTable.childNodes[0]);
	}
	catPicTable.appendChild(catImg);
};


function displayCatNames(numCats) { 
  // create a new div element 
  // and give it some content 
	for(var i=0; i < numCats; i++)
	{
  		var lineBreak = document.createElement("br");
		var catDiv = document.getElementById("catList"); 
		var catNameLink = document.createElement("a"); 
		var catName = "good kitty";
		var linkText = document.createTextNode(catName);
		catNameLink.appendChild(linkText);
		catNameLink.title = "Title of link";
		catNameLink.href = "#";
		catNameLink.id = "cat" + i.toString();
		catNameLink.className="catName";
		catNameLink.onclick = displayCat;
	  	catDiv.appendChild(catNameLink); //add the text node to the newly created div. 
	  	catNameLink.appendChild(lineBreak);

	}
  	// add the newly created element and its content into the DOM 
}



var ClickCount = function(clickCount1,clickCount2){
	this.clickCount1 = clickCount1;
	this.clickCount2 = clickCount2;
};

/*ClickCount.prototype.setClickCount1 = function(clickCount){
	this.clickCount1 = clickCount;
};
*/

var clkCounts = new ClickCount(0,0);

var Cat = function(name,id,clickCount){
	this.name= name; // name of the cat. - actually not needed since we have unique IDs.
	this.id = id; // id of the img tag with the cat's picturrre
	this.clickCount = clickCount; // number of times this cat has been clicked on. 
};

Cat.prototype.incrementClickCount= function(){
	this.clickCount++;
};

var cats = createCats(2);

function startProcessing(clkCounts){
	$('#catImg1').on('click',clkCounts,clickHandler);
	$('#catImg2').on('click',clkCounts,clickHandler);	
	document.body.onload = displayCatNames(5);
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
		//var clk1 = clkCounts.clickCount1;  // retrieve clickCount1 from global var.
		//clkCounts.clickCount1 = clk1 + 1;
		
		//var clkCnt = cats[0].clickCount;
		//cats[0].clickCount = clkCnt + 1;
		//text = "You clicked on Freddy " + clkCounts.clickCount1 + " times!";
		cats[0].incrementClickCount();
		text = "You clicked on " + cats[0].name + " " + cats[0].clickCount + " times!";
		label.textContent = text;
	}
	else if (catId === "catImg2")
	{
		var label = document.getElementById("clickCount2");
		//var clk2 = clkCounts.clickCount2;  // retrieve clickCount1 from global var.
		//clkCounts.clickCount2 = clk2 + 1;
		//var clkCnt = cats[0].clickCount;
		//cats[0].clickCount = clkCnt + 1;
		cats[1].incrementClickCount();
		text = "You clicked on " + cats[1].name + " "  + cats[1].clickCount + " times!";
		label.textContent = text;
	}
	
};


function createCats(numCats){
	var cats = [];
	for(var i=0; i < numCats; i++)
	{
		var nameOfCat = "Cat" + i.toString();
		var aCat = new Cat(nameOfCat,"",0);
		cats.push(aCat);
	}
	/*var cat1 = new Cat("Timmy","",0);
	var cat2 = new Cat("Freddy","",0);
    var cats = [cat1, cat2];*/
	return cats;
}

$(document).ready(startProcessing);
