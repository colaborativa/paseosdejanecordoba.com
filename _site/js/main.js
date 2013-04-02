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
$(document).ready(function(){
	$("#imprimir").delay(500).addClass('ensena');
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
});

