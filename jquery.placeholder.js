/*
*date:2016-03-20
*author:illa
*version:1.0
*参数：
***obj  目标元素（文本框的父类）
***color  提示文字的默认颜色
***fontSize  提示文字默认字体大小
*/
;(function() {
	$.extend({
		"placeholder": function(options) {
			var opts = $.extend({}, defaults, options);
			var obj = opts.obj;
			var color = opts.color;
			var fontSize = opts.fontSize;

			if (!("placeholder" in document.createElement("input")) || !("placeholder" in document.createElement("textarea"))) {
				obj.css({
					"position": "relative"
				});
				obj.each(function(index, ele) {
					var inp = $(this).find("input[placeholder],textarea[placeholder]");
					var width = inp.width(); //文本框的宽度
					var height = inp.outerHeight(); //文本框的高度（包括边框和内边距）
					var pd_left = inp.css("padding-left"); //文本框的左边距
					var pd_top = inp.css("padding-top"); //文本框的上边距
					var bd_width = inp.css("border-width"); //文本框的边框宽度
					var tarea = $(this).find("textarea");
					var text = inp.attr('placeholder');//placeholder文本

					inp.before("<span class='placeholder-tips'></span>");

					$(this).find(".placeholder-tips").css({
						display: "block",
						color: color,
						maxWidth: width,
						height: height,
						lineHeight: height + "px",
						paddingLeft: parseInt(pd_left) + parseInt(bd_width),
						position: "absolute",
						top: 0,
						left: 0,
						overflow: "hidden",
						whiteSpace: "nowrap",
						fontSize: fontSize
					});

					/*
					 *判断是不是textarea，是的话执行以下代码
					 */
					if (tarea.length) {
						tarea.siblings(".placeholder-tips").css({
							height: parseInt(height) - parseInt(pd_top) + "px",
							lineHeight: "1.1",
							top: parseInt(pd_top) + parseInt(bd_width),
							whiteSpace: "normal"
						});
					}

					
					if (inp.val() === "") {
						inp.siblings("span.placeholder-tips").text(text);
					}
					$("span.placeholder-tips").click(function(e) {
						$(this).siblings("input,textarea").focus();
					});

					$(this).keyup(function(e) {
							Event();
						})
						.click(function(e) {
							Event();
						})
						.blur(function(e) {
							Event();
						});

					function Event() {
						if (inp.val() === "") {
							inp.siblings("span.placeholder-tips").show();
						} else {
							inp.siblings("span.placeholder-tips").hide();
						}
					}
				});
			}
		}
	});
	//默认值
	var defaults = {
		obj: $("input[placeholder], [placeholder], *[placeholder]").parent(),
		color: "#f00", 
		fontSize: "14px" 
	}
})(jQuery);