(function () {
	if (!location.href.match(/\.css(?:\?|$)/) || document.body.querySelectorAll('*').length !== 1) {
		return;
	}

	var cssCode = document.getElementsByTagName('pre')[0];

	var panel = document.createElement("div");
		panel.className = "panel";
		panel.innerHTML = '<p>Format This Css File?<small>one property a line.</small></p><button id="btnFormat">format</button><button id="btnCancel">close</button>';
		
		document.body.appendChild(panel);

	document.getElementById("btnCancel").onclick = hidePanel;
	document.getElementById("btnFormat").onclick = codeBeautify;

	function codeBeautify(){
		cssCode.textContent = cssbeautify(cssCode.textContent, {
			indent: '    ',
			openbrace: 'end-of-line',
			autosemicolon: true
		});
		hidePanel();
	}

	function hidePanel(){
		document.body.removeChild(panel);
	}


}());
