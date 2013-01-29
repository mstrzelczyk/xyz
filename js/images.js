function arrayShuffle(oldArray) {
	var newArray = oldArray.slice();
 	var len = newArray.length;
	var i = len;
	 while (i--) {
	 	var p = parseInt(Math.random()*len);
		var t = newArray[i];
  		newArray[i] = newArray[p];
	  	newArray[p] = t;
 	}
	return newArray; 
};

function imgOnClick(){
	$("#theGoodBadGirls .imgContainer img").click(function(){
		alert($(this).attr('data-href'));
		return false;
	})
}

$(function(){
	$.getJSON('/js/homePage.json', function(data) {
		
		img = arrayShuffle(data.theGoodBadGirls);
		for(i in img){


			newImg = new Image();
			$(newImg).attr({
				src : img[i].originalSize,
				"data-href": '#',
				title: '',
				alt: ''
			}).css({				
				width: '100%',
				height: 'auto !important'
			});

			//ktory kontener
			containerNumber = (i % 4) + 1;	

			//dla 3 kolumny jest kolejka
			//jezeli mniejsze niz 400 px to dupa
			if(containerNumber == 3 && img[i].width<400){

			}else{
				$("#theGoodBadGirls .imgContainer .column"+containerNumber).append($(newImg).context.outerHTML);		
			}

			if(i == img.length -1){
				imgOnClick();
			}
		}			
	 }).error(function(jqXHR, textStatus, errorThrown) {
        console.log("error " + textStatus);
        console.log("incoming Text " + jqXHR.responseText);
    })

})