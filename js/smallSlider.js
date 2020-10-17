
  	var slider_content = document.getElementById('box');

  	// contain images in an array
    var image = ['images/smallSlide1',
    			'images/smallSlide2', 
    			'images/smallSlide3', 
    			'images/smallSlide4',
    			'images/smallSlide5'];

    var i = image.length;


    // function for next slide 

    function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".png>";
    }


    // function for prew slide

    function prewImage(){

    	if (i<image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".png>";

    }

  
  // script for auto image slider

  setInterval(nextImage , 2000);
