var btnBack = document.getElementsByClassName("btn-back");
for (var i=0; i<btnBack.length; i++) {
	btnBack[i].onclick = function() { history.go(-1); }
}