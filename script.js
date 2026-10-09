
/* =========================================
   INNOVACIÓN Y TÉCNÓLOGÍA — JAVASCRIPT
========================================= */

/* NAVEGACIÓN ENTRE SECCIONES */
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  const seleccionada = document.getElementById(id);

  if (!seleccionada) return;

  secciones.forEach(seccion => seccion.classList.remove("activa"));
  seleccionada.classList.add("activa");

  document.querySelectorAll(".nav-links .nav-link").forEach(boton => {
    boton.classList.remove("active");
    const accion = boton.getAttribute("onclick") || "";

    if (accion.includes("'" + id + "'")) {
      boton.classList.add("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  const menu = document.getElementById("menuPrincipal");

  if (menu && menu.classList.contains("show") && window.bootstrap) {
    bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }
}

/* MODO CLARO Y OSCURO */
function alternarModoOscuro() {
  document.body.classList.toggle("modo-oscuro");

  const activado = document.body.classList.contains("modo-oscuro");

  try {
    localStorage.setItem("modoOscuro", String(activado));
  } catch (error) {}

  actualizarBotonTema();
}

function actualizarBotonTema() {
  const boton = document.getElementById("modoOscuro");
  if (!boton) return;

  const oscuro = document.body.classList.contains("modo-oscuro");

  boton.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
  boton.setAttribute(
    "aria-label",
    oscuro ? "Activar modo claro" : "Activar modo oscuro"
  );
}

function cargarModoOscuro() {
  try {
    if (localStorage.getItem("modoOscuro") === "true") {
      document.body.classList.add("modo-oscuro");
    }
  } catch (error) {}

  actualizarBotonTema();
}

/* EJEMPLO DE JAVASCRIPT */
function ejemploJavaScript() {
  const mensaje = document.getElementById("mensajeJS");
  if (!mensaje) return;

  mensaje.textContent =
    "¡Hola! Este mensaje fue cambiado utilizando JavaScript.";

  mensaje.classList.add("demo-highlight");
}

/* EJEMPLO DE JQUERY */
function ejemploJquery() {
  const mensaje = document.getElementById("mensajeJquery");
  if (!mensaje) return;

  if (window.jQuery) {
    $("#mensajeJquery").stop(true, true).slideToggle(250);
  } else {
    mensaje.classList.toggle("mensaje-oculto");
  }
}

/* CUESTIONARIO */
function evaluarQuiz() {
  const correctas = {
    p1: "A",
    p2: "A",
    p3: "C",
    p4: "B",
    p5: "A",
    p6: "C",
    p7: "B",
    p8: "A"
  };

  let puntos = 0;
  let respondidas = 0;

  Object.entries(correctas).forEach(([nombre, correcta], indice) => {
    const seleccion = document.querySelector(
      `input[name="${nombre}"]:checked`
    );

    const tarjeta = document.getElementById(`pregunta${indice + 1}`);

    if (tarjeta) {
      tarjeta.classList.remove("correcta", "incorrecta");
    }

    if (seleccion) {
      respondidas++;

      if (seleccion.value === correcta) {
        puntos++;
        if (tarjeta) tarjeta.classList.add("correcta");
      } else if (tarjeta) {
        tarjeta.classList.add("incorrecta");
      }
    } else if (tarjeta) {
      tarjeta.classList.add("incorrecta");
    }
  });

  const resultado = document.getElementById("resultado");
  if (!resultado) return;

  if (respondidas < 8) {
    resultado.textContent =
      `Has respondido ${respondidas} de 8 preguntas. Completa todas para obtener tu resultado final.`;
    return;
  }

  const porcentaje = Math.round((puntos / 8) * 100);

  let mensaje = puntos === 8
    ? "¡Excelente trabajo!"
    : puntos >= 5
      ? "¡Buen trabajo! Sigue repasando."
      : "Te recomendamos repasar los temas e intentarlo de nuevo.";

  resultado.textContent =
    `Tu resultado: ${puntos} de 8 (${porcentaje}%). ${mensaje}`;
}

function limpiarQuiz() {
  document.querySelectorAll(".pregunta").forEach(pregunta => {
    pregunta.classList.remove("correcta", "incorrecta");
  });

  const resultado = document.getElementById("resultado");

  if (resultado) {
    resultado.textContent = "";
  }
}

/* VOLVER AL INICIO */
function irAlInicio() {
  mostrarSeccion("inicio");
}

/* INICIALIZACIÓN */
document.addEventListener("DOMContentLoaded", () => {
  cargarModoOscuro();
  mostrarSeccion("inicio");
});