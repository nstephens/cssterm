$(document).ready(function() {
  // these are the special characters the javascript will look for at the beginning of a line
  var rstr = /^#/gi;  // indicates a root prompt
  var ustr = /^\$/gi;  // indicates a user prompt
  var sstr = /^>/gi;  // indicates standard output

  var rprompt = "[root@localhost]# ";  // will replace occurrences of rstr
  var uprompt = "[user@localhost]$ ";  // will replace occurrences of ustr
  var stdout = "&nbsp;&nbsp;";  // will replace occurrences of sstr

  // the html that will be inserted to replace the shortened code
  // the terminal bar and body before the text is placed
	var termTop = '\
	<div id="terminal-window"> \
 	<div id="terminal-toolbar"> \
		<div class="terminal-top"> \
				<div class="terminal-menu"> \
				</div> \
			<div id="terminal-buttons"> \
				<div class="terminal-button terminal-close"> \
				<div class="terminal-close-icon">X</div> \
				</div> \
			</div> \
			<div id="terminal-title"> \
				Terminal: ~ \
			</div> \
		</div> \
	</div> \
	<div id="terminal-body"><p> \
';

	// closes the html that has been inserted, ends the terminal display
	var termBot = '\
	</p> \
		<div class="terminal-cursor"></div> \
	</div> \
</div> \
';

  // tell jQuery to search for each instance of the shortened code
  $(".cssterm").each(function() {
    var myContent = $(this).text();
    var arrayContent = myContent.split('\n');
    var newString = "";
    jQuery.each(arrayContent, function() {
      // make sure there's text to avoid blank spaces
      if (this.length != 0 ) {
        // is string a root command
        if (this.charAt(0) == "#") {
          newString += this.replace(rstr, rprompt).concat("<br>\n");
          // is string a comment (don't forget to close that div)
        } else if (this.charAt(0) == "$") {
          newString += this.replace(ustr, uprompt).concat("<br>\n");
        } else {
          newString += stdout + this + "<br>\n";
      }
    }
  });
  $(this).replaceWith( termTop + newString + termBot);
  });
});

