$(document).ready(function(){
	var botao = $('.bt');
	var dropDown = $('.ul2');
	
	botao.on('click',function(event){
		dropDown.stop(true, true).slideToggle();
		event.stopPropagation();
	
	});
});