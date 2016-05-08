$(document).ready(function(){


  $more = $('span#moreinfo'),
  $more1 = $('span#moreinfo1'),
  $more2 = $('span#moreinfo2');
  $more3 = $('span#moreinfo3');

  function show(){
    $('div#appear').slideToggle();
    return false;
  }
  function show1(){
    $('div#appear1').slideToggle();
    return false;
  }
  function show2(){
    $('div#appear2').slideToggle();
    return false;
  }
  function show3(){
    $('div#appear3').slideToggle();
    return false;
  }

  $more.click(show);
  $more1.click(show1);
  $more2.click(show2);
  $more3.click(show3);
});
