(function() {

    $.ajax({
            type: 'GET',
            url: 'http://www.json-generator.com/api/json/get/coZFVTUieW?indent=2',
            dataType: 'json'
        }).done(function(data) {
            console.log("Hecho correcto!!");

            var persona = data;

            console.log(data);

            $("#picFoto").attr("src", persona.picture);
            $("#txtNombre").val(persona.name);
            $("#txtDireccion").val(persona.address);
            $("#txtTelefono").val(persona.phone);
            $("#txtGenero").val(persona.gender);

        })
        .fail(function() {
            console.log("Fallo");
        })
        .always(function() {
            console.log("Completo");
        });


})();