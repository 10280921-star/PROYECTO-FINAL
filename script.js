/* =========================================================
   Innovación Y Tecnología 
   ARCHIVO: script.js
   ========================================================= */


/* =========================================================
   CAMBIAR ENTRE SECCIONES
   ========================================================= */

function mostrarSeccion(id) {


    /* Buscar todas las secciones */

    const secciones =
        document.querySelectorAll(".seccion");


    /* Ocultar todas */

    secciones.forEach(function(seccion) {

        seccion.classList.remove("activa");

    });


    /* Buscar la sección seleccionada */

    const seccionSeleccionada =
        document.getElementById(id);


    /* Mostrar la sección */

    if (seccionSeleccionada) {

        seccionSeleccionada.classList.add("activa");

    }


    /* Buscar los botones del menú */

    const botones =
        document.querySelectorAll(".menu button");


    /* Quitar clase activo */

    botones.forEach(function(boton) {

        boton.classList.remove("activo");

    });


    /* Identificar el botón seleccionado */

    botones.forEach(function(boton) {


        const texto =
            boton.textContent
                .trim()
                .toLowerCase();


        if (

            (id === "inicio" &&
                texto === "inicio")

            ||

            (id === "javascript" &&
                texto === "javascript")

            ||

            (id === "jquery" &&
                texto === "jquery")

            ||

            (id === "json" &&
                texto === "json")

            ||

            (id === "hosting" &&
                texto === "hosting")

            ||

            (id === "cuestionario" &&
                texto === "cuestionario")

        ) {

            boton.classList.add("activo");

        }

    });


    /* Llevar la pantalla arriba */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =========================================================
   EJEMPLO DE JAVASCRIPT
   ========================================================= */

function ejemploJavaScript() {


    /* Buscar el elemento */

    const resultado =
        document.getElementById("resultadoJS");


    /* Mostrarlo */

    resultado.style.display =
        "block";


    /* Cambiar su contenido */

    resultado.innerHTML =

        "<strong>¡JavaScript está funcionando!</strong>" +

        "<br><br>" +

        "La función ejemploJavaScript() " +

        "se ejecutó correctamente.";

}



/* =========================================================
   EFECTO TIPO SLIDE TOGGLE
   ========================================================= */

function simularJQuery() {


    const caja =
        document.getElementById("cajaJquery");


    /* Si está oculto */

    if (
        caja.style.display === "none"
        ||
        caja.style.display === ""
    ) {


        caja.style.display =
            "block";


        /* Animación de entrada */

        caja.animate(

            [

                {

                    opacity: 0,

                    transform:
                        "translateY(-20px)"

                },

                {

                    opacity: 1,

                    transform:
                        "translateY(0)"

                }

            ],

            {

                duration: 400,

                easing: "ease-out"

            }

        );

    }


    /* Si está visible */

    else {


        const animacion =
            caja.animate(

                [

                    {

                        opacity: 1,

                        transform:
                            "translateY(0)"

                    },

                    {

                        opacity: 0,

                        transform:
                            "translateY(-20px)"

                    }

                ],

                {

                    duration: 400,

                    easing: "ease-in"

                }

            );


        /* Ocultar después de la animación */

        animacion.onfinish =
            function() {

                caja.style.display =
                    "none";

            };

    }

}



/* =========================================================
   EVALUAR CUESTIONARIO
   ========================================================= */

function evaluarQuiz() {


    /* Buscar todas las preguntas */

    const preguntas =
        document.querySelectorAll(".pregunta");


    /* Contador */

    let puntos = 0;


    /* Recorrer preguntas */

    preguntas.forEach(function(pregunta) {


        /* Obtener respuesta correcta */

        const correcta =
            pregunta.dataset.correcta;


        /* Obtener explicación */

        const explicacion =
            pregunta.dataset.explicacion;


        /* Buscar opciones */

        const opciones =
            pregunta.querySelectorAll(".opcion");


        /* Buscar respuesta seleccionada */

        const seleccionada =
            pregunta.querySelector(
                "input:checked"
            );


        /* Limpiar resultados anteriores */

        opciones.forEach(function(opcion) {

            opcion.classList.remove(
                "correcta",
                "incorrecta"
            );

        });


        /* Marcar respuesta correcta */

        opciones.forEach(function(opcion) {


            const input =
                opcion.querySelector("input");


            if (
                input.value === correcta
            ) {

                opcion.classList.add(
                    "correcta"
                );

            }

        });


        /* Revisar respuesta */

        if (seleccionada) {


            if (
                seleccionada.value === correcta
            ) {


                puntos++;


            }


            else {


                const opcionIncorrecta =
                    seleccionada.closest(
                        ".opcion"
                    );


                opcionIncorrecta.classList.add(
                    "incorrecta"
                );

            }

        }


        /* Mostrar explicación */

        const cajaExplicacion =
            pregunta.querySelector(
                ".explicacion"
            );


        cajaExplicacion.style.display =
            "block";


        cajaExplicacion.innerHTML =

            "<strong>Explicación:</strong> " +

            explicacion;

    });


    /* =====================================================
       CALCULAR RESULTADO
       ===================================================== */


    const total =
        preguntas.length;


    const porcentaje =
        Math.round(
            (puntos / total) * 100
        );


    let mensaje;


    /* Mensajes según puntuación */

    if (porcentaje === 100) {


        mensaje =
            "🏆 ¡Excelente! Dominas los contenidos.";


    }

    else if (porcentaje >= 75) {


        mensaje =
            "👏 ¡Muy bien! Tienes un buen dominio del tema.";


    }

    else if (porcentaje >= 50) {


        mensaje =
            "📚 Buen trabajo. Te recomendamos repasar algunas secciones.";


    }

    else {


        mensaje =
            "💪 Sigue estudiando. Puedes volver a intentarlo.";

    }


    /* Mostrar resultado */

    const resultado =
        document.getElementById(
            "resultadoQuiz"
        );


    resultado.style.display =
        "block";


    resultado.innerHTML =

        "<strong>Resultado final</strong>" +

        "<br><br>" +

        puntos +

        "/" +

        total +

        " respuestas correctas" +

        "<br><br>" +

        "<strong>" +

        porcentaje +

        "%</strong>" +

        "<br><br>" +

        mensaje;


    /* Llevar al resultado */

    resultado.scrollIntoView({

        behavior:
            "smooth",

        block:
            "center"

    });

}



/* =========================================================
   CUANDO CARGA LA PÁGINA
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* Botón JavaScript */

        const botonJS =
            document.getElementById(
                "botonJS"
            );


        if (botonJS) {

            botonJS.addEventListener(
                "click",
                ejemploJavaScript
            );

        }


        /* Botón jQuery */

        const botonJquery =
            document.getElementById(
                "botonJquery"
            );


        if (botonJquery) {

            botonJquery.addEventListener(
                "click",
                simularJQuery
            );

        }


        /* Botón cuestionario */

        const botonQuiz =
            document.getElementById(
                "botonQuiz"
            );


        if (botonQuiz) {

            botonQuiz.addEventListener(
                "click",
                evaluarQuiz
            );

        }


    }
);