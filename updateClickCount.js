var displayCat = function(){
	var id = this.id;
	var catObj = this.catObj;
	var catPicName = id + ".jpg";
	var catPicTable = document.getElementById("catPic"); 
	var catImg = document.createElement("img"); 
	catImg.src=catPicName;
	catImg.className="catImg";
	//catImg.onclick = clickHandler;
	catImg.id = "catImg" + id.toString();
	while(catPicTable.hasChildNodes())
	{
		// remove child 
		catPicTable.removeChild(catPicTable.childNodes[0]);
	}
	catImg.addEventListener("click", function(){clickHandler(id)} , false);
	catPicTable.appendChild(catImg);
	updateClickCountLabels(id,false);
};

function clickHandler(catNameLinkId){
	updateClickCountLabels(catNameLinkId,true);
};

var updateClickCountLabels = function(catNameLinkId,incClickCount){
	var catNameLink = document.getElementById(catNameLinkId);
	var catObj = catNameLink.catObj;
	var clkCount = document.getElementById("clickCount");
	var catName = document.getElementById("catName");
	if(incClickCount)
	{
		catObj.incrementClickCount();
	}
	catName.textContent = catObj.name;
	clkCount.textContent = catObj.clickCount;
};

function displayCatNames(numCats) { 
  // create a new div element 
  // and give it some content 
	for(var i=0; i < numCats; i++)
	{
  		var lineBreak = document.createElement("br");
		var catDiv = document.getElementById("catList"); 
		var catNameLink = document.createElement("a"); 
		catNameLink.id = "cat" + i.toString();
		//var catName = "good kitty";
		var linkText = document.createTextNode(catNameLink.id);
		catNameLink.appendChild(linkText);
		catNameLink.title = "Title of link";
		catNameLink.href = "#";
		catNameLink.className="catName";
		catNameLink.onclick = displayCat;
		var myCat = new Cat(catNameLink.id,"",0);
		catNameLink.catObj = myCat;
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



function createCats(numCats){
	var cats = [];
	for(var i=0; i < numCats; i++)
	{
		var nameOfCat = "Cat" + i.toString();
		var aCat = new Cat(nameOfCat,"",0);
		cats.push(aCat);
	}
	return cats;
}

$(document).ready(startProcessing);
