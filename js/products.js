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
  {
    nombre: "Echo Dot (4ta generación)",
    descripcion: [
      "El Echo Dot de cuarta generación es la nueva versión del Echo Dot 3ra, el cual nos ofrece un sonido más potenten y esta vez con dirección de 360°, además si cuentas con 2 dispositivos o más puedes configurarlos para producir música al mismo tiempo.",
      "Actualmente hay 2 versiones, una de ellas cuenta con una pantalla display para mostrar la hora, temperatura, volumen actual, temporizador, entre otras.",
      "Puedes encontrarlo en colores como: Negro, Blanco o Azul, de acuerdo a disponibilidad.",
    ],
    caracteristicas: [
      "Requiere de Wi-Fi ya sea de 2.4Ghz o 5 GHz.",
      "La vesión con reloj muestra una mejor y más rapida respuesta tanto en velocidad como en respuestas de voz.",
      "Cuenta con una bocina de 1.6” y una salida de audio de 3.5mm (solo salida).",
      "Compatible con Bluetooth para conectar tu celular o algún otro dispositivo de sonido y escuchar así tu música, series o videos.",
    ],
    imagen:
      "https://www.amazon.com.mx/images/G/33/kindle/journeys/gcZ0qMk2FM8ednkhKyNNIelmWA2Cc5P8Cit3SObdPpTY3D/M2Q3MGMxOGYt._CB404331120_.jpg",
    versiones: [
      {
        tituloProducto: "Echo Dot 4ta generación",
        enlace:
          "https://www.amazon.com.mx/gp/product/B07XJ8C8F5/ref=as_li_tl?ie=UTF8&tag=bebidas05-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07XJ8C8F5&linkId=c5d3242bb437e30b01006e9089637e01",
        precio: "$1,499.00 MXN",
      },
      {
        tituloProducto: "Echo Dot 4ta con display",
        enlace:
          "https://www.amazon.com.mx/gp/product/B085M66LH1/ref=as_li_tl?ie=UTF8&tag=bebidas05-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B085M66LH1&linkId=0b3a9633cb24d5160a6e90a2586db9e2",
        precio: "$1,799.00 MXN",
      },
    ],
  },
  {
    nombre: "Nuevo Echo",
    descripcion: [
      "El Nuevo Echo incluye mejor sonido conformado por un Woofer y 2 tweeters, mejorando la calidad de sonido respecto a las versiones más economicas. ",
      "Un aspecto a diferenciar es el Hub Zigbee, el cual permite controlar mejor los dispositivos inteligentes del hogar que compartan esta tecnología, los cuales son muchos actualmente.",
      "Esta generación no incluye un display para mostrar la hora y lo podemos encontrar en colores como: Negro, Blanco, Azul y Rojo.",
    ],
    caracteristicas: [
      "Requiere de Wi-Fi ya sea de 2.4Ghz o 5 GHz.",
      "El tamaño es más pronunciado que las anteriores versiones por lo cual debes se notará más y es menos discreto.",
      'Cuenta con un woofer de 3" y 2 tweeters de 0.8" una salida/entrada de audio de 3.5mm y un procesador de audio Dolby audio.',
      "Compatible con Bluetooth para conectar tu celular o algún otro dispositivo de sonido y escuchar así tu música, series o videos.",
    ],
    imagen:
      "https://www.amazon.com.mx/images/G/33/kindle/journeys/1UFqLvqECQ312F9X28jo8VTokq6jVJeaaVdTPqvOtyPU3D/NTY2OTAxZjYt._CB404324366_.jpg",
    versiones: [
      {
        tituloProducto: "Nuevo Echo",
        enlace:
          "https://www.amazon.com.mx/gp/product/B07XKF5RM3/ref=as_li_tl?ie=UTF8&tag=bebidas05-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07XKF5RM3&linkId=f1f9273357fff17f881c1c3e3fa742e0",
        precio: "$2,999.00 MXN",
      },
    ],
  },
  {
    nombre: "Echo Studio",
    descripcion: [
      "El Echo Studio tiene la intención de generar un audio de calidad de estudio capaz de adaptarse y modificar su sonido de acuerdo a cada habitación esto lo realiza a través del microfono que tiene incluido.",
      "Es compatible con la tecnología Zigbee para poder controlar los dispositivos de casa inteligente que compartan esta tecnología de forma más sencilla.",
      "Un detalle a considerar es su tamaño y su peso de casi 3.5 kilogramos y solo se encuentra en un color: Negro",
    ],
    caracteristicas: [
      "Requiere de Wi-Fi ya sea de 2.4Ghz o 5 GHz.",
      "El tamaño es más pronunciado que las anteriores versiones por lo cual debes se notará más y es menos discreto.",
      "Cuenta con tres bocinas de rango medio de 2”, un tweeter de 1” y un woofer de 5.25” una salida de 3.5 mm o entrada de línea óptica mini Toslink y un procesador de sonido Dolby Atmos.",
      "Compatible con Bluetooth para conectar tu celular o algún otro dispositivo de sonido y escuchar tu música, series o videos.",
    ],
    imagen:
      "https://m.media-amazon.com/images/G/01/kindle/dp/2019/CXL-882/EStudio/Desktop/TechDetails_ES_V2._CB451320585_.jpg",
    versiones: [
      {
        tituloProducto: "Nuevo Echo",
        enlace:
          "https://www.amazon.com.mx/gp/product/B07XKF5RM3/ref=as_li_tl?ie=UTF8&tag=bebidas05-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07XKF5RM3&linkId=f1f9273357fff17f881c1c3e3fa742e0",
        precio: "$4,499.00 MXN",
      },
    ],
  },
];

const cargarAsistentes = (e) => {
  asistentes.forEach((el) => {
    let clone = $template.content.cloneNode(true);

    let $titulo = clone.querySelector("h3"),
      $descripcion = clone.querySelector(".descripcion"),
      $caracteristicas = clone.querySelector(".caracteristicas"),
      $imagen = clone.querySelector("img"),
      $versiones = clone.querySelector(".versiones");

    $titulo.innerText = el.nombre;

    el.descripcion.forEach((p) => {
      let $p = d.createElement("p");
      $p.innerText = p;
      $descripcion.appendChild($p);
    });

    el.caracteristicas.forEach((p) => {
      let $p = d.createElement("p");
      $p.innerText = p;
      $caracteristicas.appendChild($p);
    });

    $imagen.src = el.imagen;
    $imagen.alt = el.nombre;

    el.versiones.forEach((version) => {
      let $contenedor = d.createElement("div"),
        $titulo = d.createElement("h4"),
        $btn = d.createElement("div"),
        $enlace = d.createElement("a"),
        $precio = d.createElement("small");

      $contenedor.classList.add("product");
      $titulo.innerText = version.tituloProducto;
      $enlace.href = version.enlace;
      $enlace.innerHTML = "Comprar <i class='fas fa-shopping-cart'></i>";
      $enlace.target = "_blank";
      $enlace.rel = "noopener";
      $precio.innerText = version.precio;

      $btn.appendChild($enlace);
      $btn.appendChild($precio);
      $contenedor.appendChild($titulo);
      $contenedor.appendChild($btn);

      $versiones.appendChild($contenedor);
    });

    $fragment.appendChild(clone);
  });

  $contenedorAsistentesVoz.appendChild($fragment);
};

export default cargarAsistentes;
