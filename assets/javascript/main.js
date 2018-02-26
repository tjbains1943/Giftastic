$(document).ready(function() {

var reaction;
var newButton;
var btnClick;
var event;
var imageData;
var imageGif;
var picClick;
var info;
var topics = ["Applause", "WTF", "SMH", "Yes", "Congratulations"];
var subBtn;

for (var i = 0; i < topics.length; i++) {
	newButton = $("<button>");
	newButton.text(topics[i]);
	newButton.addClass("btn mr-1 btn-primary");
	$("#buttonDump").append(newButton);
}

$("#buttonDump").on("click", "button", function() {
	btnClick = $(this).text();
	console.log(btnClick);
	var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + btnClick + "&api_key=OnNXOUudgF9qoRvz5F6c5BITwHPaY2Wb&limit=10";
	$.ajax({

		url : queryUrl,
		method : "GET"
	}).then(function(response) {
		 event = response.data;
		 console.log(response.data);
		for (var i = 0; i < event.length; i++) {
			imageData = event[i].images.downsized_still.url;
			imageGif = event[i].images.downsized.url;
			imageRating = $("<p>").text(event[i].rating);
			reaction = $("<img>");
			reaction.attr("src", imageData);
			reaction.attr("gif", imageGif);
			reaction.addClass("mr-1 mb-1");
			$("#gifDump").append(reaction, imageRating);
	    }
		})
		
})

function makeImg () {
			reaction = $("<img>");
			reaction.attr("src", imageData);
			reaction.attr("gif", imageGif);
			reaction.addClass("mr-1 mb-1");
			$("#gifDump").append(reaction);
}

$("#gifDump").on("click", "img", function() {
		picClick = $(this).attr("src");
	  if (picClick === $(this).attr("src")) {
        $(this).attr("src", $(this).attr("gif"));
        $(this).attr("gif", picClick);
      } else {
        $(this).attr("src", picClick);
        $(this).attr("gif", $(this).attr("gif"));
      }

})
	
$("#submit").on("click", function() {
		info = $("#input").val();
		if (info === "") {return;}
		subBtn = $("<button>");
		subBtn.text(info);
		subBtn.addClass("btn btn-primary mr-1 mb-1");
		$("#buttonDump").append(subBtn);
		$("#input").val("");



})

});