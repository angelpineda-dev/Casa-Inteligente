const d = document,
  $contenedorAsistentesVoz = d.getElementById("contenedor-asistentes-voz"),
  $template = d.getElementById("template-producto"),
  $fragment = new DocumentFragment();

const asistentes = [
  {
    nombre: "Echo Dot (3ra generación)",
    descripcion: [
      "Para empezar a equipar tu casa con equipos inteligentes sin duda alguna te recomiendo el Echo Dot de tercera generación, con este dispositivo tendras todas las utilidades que te ofrece el asistente de Amazon Alexa.",
      "Podras preguntar la hora, agregar elementos a listas de compras, utilizar temporizadores y todas las demás herramientas que mencionamos en la sección “cualidades Alexa”.",
      "Claro que tambien puedes controlar la mayoria de los dispositivos como son focos, enchufes y más dispositivos inteligentes.",
      "Puedes encontrarlo en colores como: Negro, Gris Oscuro o Granate, de acuerdo a disponibilidad.",
    ],
    caracteristicas: [
      "Requiere de Wi-Fi ya sea de 2.4Ghz o 5 GHz, sin conexión a internet no podrá responderte ni la hora.",
      "El dispositivo es pequeño, sencillo y discreto, aun así su microfono y volumen son suficientes para una o hasta dos habitaciones.",
      "El dispositivo es pequeño, sencillo y discreto, aun así su microfono y volumen son suficientes para una o hasta dos habitaciones. ",
      "Cuenta con una bocina de 1.6” y una salida de audio de 3.5mm (solo salida).",
      "Compatible con Bluetooth para conectar tu celular o algún otro dispositivo de sonido y escuchar así tu música, series o videos.",
    ],
    imagen:
      "https://www.amazon.com.mx/images/G/33/kindle/dp/2018/3425522/ED/ED_MX_desktop_P9-image-techdetails_v2._CB480965845_.jpg",
    versiones: [
      {
        tituloProducto: "Echo Dot sin reloj",
        enlace:
          "https://www.amazon.com.mx/gp/product/B07PDHSVQ9/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07PDHSVQ9&linkCode=as2&tag=bebidas05-20&linkId=64dc52fda045c0fc2e41f4c84fda41d1",
        precio: "$1,299.00 MXN",
      },
    ],
  },
];

const cargarAsistentes = (e) => {
  let clone = $template.content.cloneNode(true);

  let titulo = clone.querySelector("h3"),
    descripcion = clone.querySelector(".descripcion"),
    caracteristicas = clone.querySelector(".caracteristicas"),
    imagen = clone.querySelector("img");

  asistentes.forEach((el) => {
    titulo.innerText = el.nombre;

    el.descripcion.forEach((el) => {
      let $p = d.createElement("p");
      $p.innerText = el;
      descripcion.appendChild($p);
    });

    el.caracteristicas.forEach((el) => {
      let $p = d.createElement("p");
      $p.innerText = el;
      caracteristicas.appendChild($p);
    });

    imagen.src = el.imagen;
    imagen.alt = el.titulo;
    $fragment.appendChild(clone);
  });

  $contenedorAsistentesVoz.appendChild($fragment);
};

export default cargarAsistentes;
