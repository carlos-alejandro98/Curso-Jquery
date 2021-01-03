(function() {

    $.smallBox = function(opciones) {

        opciones = $.extend({

            titulo: undefined,
            subtitulo: undefined,
            contenido: undefined,
            fa: "fa-envelope",
            img: undefined,
            timeOut: 3000,

        }, opciones);


        var html = "";


        html += '<div class="smallBox-contenedor">';
        html += '    <div class="smallBox-foto">';
        html += '        <img src="' + opciones.img + '" alt="foto" />';
        html += '    </div>';
        html += '    <div class="smallBox-pico"></div>';
        html += '    <div class="smallBox-contenido" align="center">';
        html += '        <div class="smallBox-textoContenedor" align="left">';
        html += '            <span class="smallBox-titulo">' + opciones.titulo + '</span>';
        html += '            <span class="smallBox-subTitulo"></span>' + opciones.subtitulo + '</span>';
        html += '        </div>';
        html += '        <div class="smallBox-cajaColor">';
        html += '            <div class="smallBox-colorTexto">';
        html += opciones.contenido;
        html += '            </div>';
        html += '            <div class="smallBox-colorIcon">';
        html += '                <i class="far ' + opciones.fa + ' fa-2x"></i>';
        html += '            </div>';
        html += '        </div>';
        html += '        <div class="smallBox-sombra">';
        html += '        </div>';
        html += '    </div>';
        html += '</div>';

        $("body").append(html);

        animar_entrada();

        setTimeout(function() {
            animar_salida();
        }, opciones.timeOut)

    };

    function animar_salida() {
        var $smallBox = $(".smallBox-contenedor");

        var tl = new TimelineMax();
        tl.to($smallBox, 1, { x: "+=100px" })
            .to($smallBox, 1, { opacity: 0, onComplete: remover_smallBox }, "-=1");
    }

    function remover_smallBox() {
        $(".smallBox-contenedor").remove();
    }

    function animar_entrada() {
        var $smallBox = $(".smallBox-contenedor");

        var tl = new TimelineMax();
        tl.from($smallBox, 1.6, { x: "+=300px", ease: "bounce.out" })
            .from($smallBox, 1, { opacity: 0 }, "-=1.3");

    }

})();