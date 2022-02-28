$(function(){
	if (window.matchMedia('(max-width: 576px)').matches) {
		$('#page-top').show()
	} else {
		$('#page-top').hide()
	}
})