ʹ��jquery��װ��һ������
���placeholder���������⣬������IE6
ʹ�÷�����
1�������ļ�
   <script src="jquery-1.8.3.min.js"></script>
   <script src="jquery.placeholder.js"></script>

2��HTML��ע�⣺�ı���һ��Ҫ�ñ�ǩ������
  <div><input type="text" placeholder="�������ı�"></div>
  <div><textarea placeholder="����������"></textarea></div>

3��javascript����
  <script>
    $(function(){
      $.placeholder();
    });


     /*
      *������
      ***obj  Ŀ��Ԫ�أ��ı���ĸ��ࣩ
      ***color  ��ʾ���ֵ�Ĭ����ɫ
      ***fontSize  ��ʾ����Ĭ�������С
      */
      // $.placeholder({
      //   obj: $("input[placeholder], [placeholder], *[placeholder]").parent(),
      //   color: "#f00", 
      //   fontSize: "14px"
      // });
	
  </script>

