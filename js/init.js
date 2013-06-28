$(document).ready(function() {

  //begin shapeshift
  $(".container").shapeshift({
    enableDrag: false, 
    animateOnInit: true
  });

  $('.container > div').each(function(){
    $type = $(this).attr('type');
    $(this).find('.r-head').text($type);
  });
  
  
  
  $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [140, 140]
    });
    
  $('.gridster ul > li').each(function(){
    $type = $(this).attr('type');
    $(this).find('.r-head').text($type);
  });    
  
  var gridster = $(".gridster ul").gridster().data('gridster');
  
/*
  $('#blog').click(function(){
    $('.gridster li').each(function(){
      if($(this).attr('type') == 'blog'){
        gridster.remove_widget( $('.gridster li').eq(0) );        
      }
    });
*/
    
  $('#blog').click(function(){
    $('.container > div').each(function(){
      if($(this).attr('type') != 'blog'){
        reseat($(this).attr('id'));
      }
    });
  });
  
  $('#marketing-doc').click(function(){
    $('.container > div').each(function(){
      if($(this).attr('type') != 'marketing-doc'){
        reseat($(this).attr('id'));
      }
    });
  });
  
  $('#video').click(function(){
    $('.container > div').each(function(){
      if($(this).attr('type') != 'video'){
        reseat($(this).attr('id'));
      }
    });
  });
  
  $('#whitepaper').click(function(){
    $('.container > div').each(function(){
      if($(this).attr('type') != 'whitepaper'){
        reseat($(this).attr('id'));
      }
    });
  });
  
  $('#reseat').click(function(){
    reseat();
    console.log('reseat');
  });

});



function reseat(id){ 
  if($('#'+id).is(':visible')){
    $('#'+id).hide();
  } else {
    $('#'+id).show();
  }
  $(".container").trigger('ss-rearrange');
}