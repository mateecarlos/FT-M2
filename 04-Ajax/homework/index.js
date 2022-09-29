const api_url = "http://localhost:5000/amigos/";

$("#boton").click(function(){
    $.get(api_url, function(respuesta) {
        respuesta.forEach((amigo) => {
            $("#lista").append("<li>" + amigo.name + "<li>")
        })
    })
})


$("#search").click(function() {
    var id = $('#input').val()
    if(id) {
        $.get(api_url + id, function(respuesta) {
            $("#amigo").text(respuesta.name)
        })
        $("#input").val('')
    } else {
        alert("Debes ingresar el ID de tu amigo")
    }
})

$("#delete").click(function(){
    var id = $("#inputDelete").val();
    if(id) {
        $.ajax({
            url: `http://localhost:5000/amigos/${id}`,
            type: 'DELETE',
            success: $("<a>Tu Amigo a sido borrado con exito</a>").appendTo("#success")
        });
    } else {
        alert("Debes de ingresar un ID para eliminar a tu amigo")
    }
})
