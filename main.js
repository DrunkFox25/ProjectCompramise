console.clear();

var $form = document.querySelector('[rel="favicon-form"]');
var $input = $form.querySelector('input');


function changeFavicon(urlToFavicon) {
  //var $icon = document.querySelector('link[rel="icon"]');
	// but this isn't always what it's called!
	var $icon = document.querySelector('[type="image/x-icon"]')

  if (urlToFavicon.length) { // there is some input
  	$icon.href = urlToFavicon;
  } else {
  	alert('Please add a favicon URL. Consider: \n https://perpetual.education/favicon.ico  as an example');
  }
}


$form.addEventListener('submit', function(event) {
	event.preventDefault();

	changeFavicon($input.value);
});


 /*
https://perpetual.education/favicon.ico  
https://sheriffderek.consulting/favicon.ico
https://thisisthegoldcollective.com/favicon.ico
*/
