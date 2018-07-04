var btnGo = document.getElementsByClassName("btn-go");
for (var i=0; i<btnGo.length; i++) {
	btnGo[i].onclick = function() {
		var src = this.getAttribute("data-url");
		if (src != null) window.location.href = src;
	}
}