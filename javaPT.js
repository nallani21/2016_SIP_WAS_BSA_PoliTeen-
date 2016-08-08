$(document).ready(function(){
  $('#map').usmap({

    'mouseoverState':{
      'HI': function(event,data) {
        // body...
      }
    },
    'click' : function(event, data){
      $('#alert')
        .text('Click '+ data.name+'')
        .stop()
        .css('backgroundColor', '#ffffff')
      }
    });
  });