var CatModel = {
	numCats : 10,
    init: function() {
    	numCats=10;
    },
    getNumCats: function(){
    	return JSON.parse(numCats);
    }
};

var Octopus = {
    init: function() {
        CatModel.init();
        //CatNamesView.init();
        this.renderCatNames();
    },
    renderCatNames: function(){
    	var numCats = CatModel.getNumCats();
    	CatNamesView.render(numCats);
    },
    renderCatPicture: function(catNameLinkId){
    	CatPictureView.render(catNameLinkId);
    }
};

var CatNamesView = {
    init: function() {

    },
    render: function(numCats){
		for(var i=0; i < numCats; i++)
		{
	  		var lineBreak = document.createElement("br");
			var catDiv = document.getElementById("catList"); 
			var catNameLink = document.createElement("a"); 
			catNameLink.id = "cat" + i.toString();
			var linkText = document.createTextNode(catNameLink.id);
			catNameLink.appendChild(linkText);
			catNameLink.title = "Title of link";
			catNameLink.href = "#";
			catNameLink.className="catName";
			catNameLink.onclick = Octopus.renderCatPicture; // ?????same functionality as the displayCat function.
			/*var myCat = new Cat(catNameLink.id,"",0);
			catNameLink.catObj = myCat;*/
		  	catDiv.appendChild(catNameLink); //add the text node to the newly created div. 
		  	catNameLink.appendChild(lineBreak);
		}
	}
};

$(document).ready(Octopus.init());

