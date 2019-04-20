$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		
		$('ul.tabs li').removeClass('selected');
		$('.content').removeClass('selected');

		$(this).addClass('selected');
		$("#"+tab_id).addClass('selected');
	})

})