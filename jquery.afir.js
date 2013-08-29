/*!
* jQuery Another File Input Replacement
* Original author: Julian Ćwirko
* Website: https://github.com/juliancwirko/afir
* Licensed under the MIT license
*/

;(function ( $, window, document, undefined ) {
	'use strict';
		var pluginName = 'afir',
			defaults = {
				wrapperClass: 'afir-wrapper',
				fileNameClass: 'afir-file-name',
				buttonClass: 'afir-button',
				buttonChooseLabel: 'Choose File'
			};
		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;

				this.wrapper = '<div class="'+this.settings.wrapperClass+'" />';
				this.fileName = '<div class="'+this.settings.fileNameClass+'" />';
				this.button = '<button class="'+this.settings.buttonClass+'" />';

				this.init();
		}
		Plugin.prototype = {
				init: function () {
					var that = this;
					$(this.element).wrap(this.wrapper);
					this.buildElems(this.element, this.settings);
					$(this.element).siblings().on('click', function(){that.chooseFile(that.element, that.settings);});
				},
				buildElems: function(el, settings) {
					var that = this;
					$(el).parent('.'+settings.wrapperClass).append(that.fileName);
					$(el).parent('.'+settings.wrapperClass).append(that.button);
					$(el).siblings('.'+settings.buttonClass).text(settings.buttonChooseLabel);
				},
				chooseFile: function (el, settings) {
					var fileValue;
					$(el).click();
					$(el).on('change', function(){
						fileValue = $(this).val();
						$(this).siblings('.'+settings.fileNameClass).text(fileValue);
					});
				},
				disableInput: function() {
					if ($(this.element).parent('.'+this.settings.wrapperClass).length) {
						$(this.element).siblings().remove();
						$(this.element).unwrap();
					}
				},
				enableInput: function() {
					if ($(this.element).parent('.'+this.settings.wrapperClass).length <= 0) {
						this.init();
					}
				},
				refreshInput: function () {
					this.disableInput();
					this.enableInput();
				}
				
		};
		$.fn[pluginName] = function ( options ) {
		        if (typeof options === 'string') {
		            var args = Array.prototype.slice.call(arguments, 1);
		            this.each(function() {
		                var plugin = $.data(this, 'plugin_' + pluginName);
		            plugin[options].apply(plugin, args);
		           });
		        }
		        else {
		        return this.each(function () {
		            if (!$.data(this, 'plugin_' + pluginName)) {
		                $.data(this, 'plugin_' + pluginName,
		                new Plugin( this, options ));
		            }
		        });
		    }
		};
})( jQuery, window, document );
