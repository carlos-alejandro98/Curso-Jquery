(function () {

    $.bigbox = function (opciones, callback) {
        opciones = $.extend({

            fa: "fa-thumbs-up",
            titulo: undefined,
            contenido: undefined,
            boton: "Aceptar"

        }, opciones);

        if (opciones.titulo === undefined) {
            alert('El titulo es necesario.');
            return;
        }

        if (opciones.contenido === undefined) {
            alert('El contenido es necesario.');
            return;
        }

        var contenido = "";
        contenido = '<div class="bigBox-Fondo"></div>';

        contenido += '<div class="bigBox-contenedor" align="center">';
        contenido += '<div class="bigBox-Cerrar"><i class="fa fa-times"></i></div>';
        contenido += '<div class="bigBox-Circulo"><i class="fab ' + opciones.fa + ' fa-3x"></i></div>';
        contenido += '<div class="bigBox-Contenido">';
        contenido += '<span class="bigBox-Titulo">' + opciones.titulo + '</span>';
        contenido += '<span class="bigBox-Texto">' + opciones.contenido + '</span></div>';
        contenido += '<button class="bigBox-Botton">' + opciones.boton + '</button>';
        contenido += '</div>';

        $("body").append(contenido);


        animar_entrada();


        //Función del Botón Cerrar
        $(".bigBox-Cerrar").on("click", function () {

            animar_salida();

            if (typeof callback == 'function') {
                callback('boton-cerrar');
            }
        });

        //Función del Botón Principal
        $(".bigBox-Botton").on("click", function () {

            animar_salida();

            if (typeof callback == 'function') {
                callback('boton-principal');
            }
        });


        //Animar la Entrada
        function animar_entrada() {

            var $fondo = $(".bigBox-Fondo");
            //$fondo.fadeIn(300);

            var $bigBox = $(".bigBox-contenedor");

            var anchoP = $(window).width();
            var altoP = $(window).height();

            var anchoB = $bigBox.width();
            var altoB = $bigBox.height();

            $bigBox.css({
                top: (altoP / 2) - (altoB / 2),
                left: (anchoP / 2) - (anchoB / 2),
            });




            $fondo.show();
            $bigBox.show();

            var tl = new TimelineMax();
            tl.to($fondo, 0.5, { opacity: 0.3 }) //Que queremos animar, cuanto quiere que tarde, y que queremos hacer?
                .to($bigBox, 0.5, { opacity: 1 }, "-=0.5")
                .from($bigBox, 0.8, { y: "-500", ease: "bounce.out" }, "-=0.5");
        }


        function animar_salida() {
            var $fondo = $(".bigBox-Fondo");
            var $bigBox = $(".bigBox-contenedor");

            var tl = new TimelineMax();
            tl.to($fondo, 0.3, { opacity: 0 }) //Que queremos animar, cuanto quiere que tarde, y que queremos hacer?
                .to($bigBox, 0.3, { opacity: 0, onComplete: remover_bigBox }, "-=0.5");
        }

        function remover_bigBox() {
            var $fondo = $(".bigBox-Fondo");
            var $bigBox = $(".bigBox-contenedor");

            $fondo.remove();
            $bigBox.remove();
        }


    }

})();