var menu = document.getElementsByClassName("menu")[0].getElementsByTagName("li");
for (var i=0; i<menu.length; i++) {
	menu[i].onclick = function() {
		var src = this.getAttribute("data-url");
		if (src != null) window.location.href = src;
	}
}