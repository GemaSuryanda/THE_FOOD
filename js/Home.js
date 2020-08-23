$('.modal').modal();
$('.fixed-action-btn').floatingActionButton();



  
  $("#publish").click(function(){
    var a = $("#input_bantuan").val();
    var b = $("#abc").html();
    var imagesource = $("#image-preview").attr('src');
    
   

    $("#abc").html(b + `<p> ${a} </p>`);
    $("#Gambar").attr('src', imagesource);
  });

  $('#photo').imageReader({
    renderType: 'canvas',
    onload: function(canvas) { 
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = "orange";
      ctx.font = "12px Verdana";
      ctx.fillText("Filename : "+ this.name, 10, 20, canvas.width - 10);
      $(canvas).css({
        width: '100%',
        marginBottom: '-10px'
      });
    }
  });







