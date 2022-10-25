$(document).ready(function(){
	var botao = $('.projetos');
	var dropDown = $('.submenu-projetos');
	
	
	botao.on('click',function(event){
		dropDown.stop(true, true).slideToggle();
		event.stopPropagation();
	
	});
});