
# Another File Input Replacement

```html

..all styling by CSS
	...

	<link rel="stylesheet" href="jquery.afir.css"></link>
	<script src="jquery.js"></script>
	<script src="jquery.afir.js"></script>
	<script>
		(function(){
			$('input[type="file"]').afir();
		})()
	</script>

	...

	..or You can set your settings:

	...

	<script>
		(function(){
			$('input[type="file"]').afir({
				wrapperClass: 'afir-wrapper',
				fileNameClass: 'afir-file-name',
				buttonClass: 'afir-button',
				buttonChooseLabel: 'Choose File'
			});
		})()
	</script>

	...

	..or You can set your settings:

	...

	and methods:

	<script>
		(function(){
			$('.input-file22').afir('disableInput');
			$('.input-file22').afir('enableInput');
			$('.input-file22').afir('refreshInput');
		})()
	</script>
```

## Demo
[See demo page..](http://www.redsunmedia.pl/playground/afir/demo/)