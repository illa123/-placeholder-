使用jquery封装的一款插件；
解决placeholder兼容性问题，兼容至IE6
使用方法：
1、引入文件
   <script src="jquery-1.8.3.min.js"></script>
   <script src="jquery.placeholder.js"></script>

2、HTML（注意：文本框一定要用标签包裹）
  <div><input type="text" placeholder="请输入文本"></div>
  <div><textarea placeholder="请输入内容"></textarea></div>

3、javascript调用
  <script>
     $(function(){
	$.placeholder();
     });

     //有三个参数：obj,color,fontSize
     // $.placeholder({
     // obj: $("input[placeholder], [placeholder], *[placeholder]").parent(),//文本框的父类
     // color: "#f00", //提示文字的默认颜色
    // fontSize: "14px" //提示文字默认字体大小
    // });
	
  </script>

