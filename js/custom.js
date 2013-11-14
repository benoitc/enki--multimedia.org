/* -------------------- ParallaxContentSlider --------------------- */


$(function() {

	$('#da-slider').cslider({
		autoplay	: true,
		bgincrement	: 850
	});

});


/* -------------------- maps --------------------- */


$("#maps").gmap3({
    marker:{
      address: "54 rue Henri Pauquet 60100 Creil France"
      },
    map:{
      options:{
        zoom: 14
      }
    }
  });
