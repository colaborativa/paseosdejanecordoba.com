$('#twitter').sharrre({
  share: {
    twitter: true
  },
  enableHover: false,
  enableTracking: true,
  buttons: { twitter: {via: ''}},
  click: function(api, options){
    api.simulateClick();
    api.openPopup('twitter');
  }
});
$('#facebook').sharrre({
  share: {
    facebook: true
  },
  enableHover: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('facebook');
  }
});
twttr.anywhere(function (T) {
	T.hovercards();
});
$(document).ready(function(){
	$("#imprimir").delay(1000).addClass('ensena');
	//Simple spam protection
	$('#my-email').html(function(){
		var e = "mas";
		var a = "@";
		var d = "urbanismodebarrio";
		var c = ".com";
		var h = 'mailto:' + e + a + d + c;
		$(this).parent('a').attr('href', h);
		return e + a + d + c;
	});
	// track external links
	// Outbound Link Tracking with Google Analytics
	// Requires jQuery 1.7 or higher (use .live if using a lower version)
	$("a").on('click',function(e){
	    var url = $(this).attr("href");
	    if (e.currentTarget.host != window.location.host) {
	        _gaq.push(['_trackEvent', 'Outbound Links', e.currentTarget.host, url, 0]);
	        if (e.metaKey || e.ctrlKey) {
	             var newtab = true;
	        }
	        if (!newtab) {
	             e.preventDefault();
	             setTimeout('document.location = "' + url + '"', 100);
	        }
	    }
	});
});

