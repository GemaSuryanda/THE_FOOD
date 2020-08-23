$('.modal').modal();
$('.fixed-action-btn').floatingActionButton();
$('#join').click(function(){
    var a = $("#input_name").val();
    var b = $("#email").val();
    var c = $("#jenis_kelamin").val();
    if(a === "" || b === "" || c === ""){
    alert("isi data dulu");
}
else{
    $('#join').attr("href", "html/Home.html")
}
})
$('.parallax').parallax();

$(function(){
    $("#file").change(function(){
        $("#message").empty();
        var file = this.files[0];
        var imagefile = file.type;
        var match = ["image/jpeg", "image/png", "image/jpg"];

        if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
        {
            $("#file").css("color", "red");
            $("#previewing").attr('src', "image/tangan.png");
            $("#message").html("pilih file lain");
            return false;
        }else{
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);

            var limit = 2097152;
            if(this.files[0].size > limit){
                
            }
        }
    });
});

function imageIsLoaded(e){
    $("#file").css("color","green", "visibility", "hidden");
    $("#image_preview").css("display", "block");
    $("#previewing").attr('src', e.target.result);
    $('#previewing').attr('width', '150px');
    $("previewing").attr('height', '150px');
}

$('#publish').click(function(){
    var a = $('#input_bantuan').val();
    var b = $('#abc').html(); 
    
    $('#abc').html(b + `<p> ${a} </p>`);
    $(function(){
        $("#fila").change(function(){
            $("#message").empty();
            var file = this.files[0];
            var imagefile = file.type;
            var match = ["image/jpeg", "image/png", "image/jpg"];
    
            if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
            {
                $("#fila").css("color", "red");
                $("#Image").attr('src', "image/tangan.png");
                $("#message").html("pilih file lain");
                return false;
            }else{
                var reader = new FileReader();
                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
    
                var limit = 2097152;
                if(this.files[0].size > limit){
                    
                }
            }
        });
    });
    
    function imageIsLoaded(e){
        $("#fila").css("color","green", "visibility", "hidden");
        $("#Gambar").css("display", "block");
        $("#Gambar").attr('src', e.target.result);
        $('#Gambar').attr('width', '150px');
        $("#Gambar").attr('height', '150px');
    }
 });