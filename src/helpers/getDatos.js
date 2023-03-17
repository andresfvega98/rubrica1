const datos = [
    { id: 1,
      linkImagen: "https://i.ytimg.com/vi/Zjs_UKSxni0/maxresdefault.jpg",
      titulo: "Ping Pong",
      descripcion: "Es un deporte de raqueta en el que dos jugadores o dos parejas juegan en una mesa dividida por una red. El objetivo es golpear la pelota con la raqueta para que rebote en la mesa del oponente y sea imposible de devolver.",
      equipo: "Borussia Düsseldorf",
      url: "https://www.borussia-duesseldorf.com/tischtennis/",
      categoria: "Deportes de mesa",
      liked: false
    },
    { id: 2,
      linkImagen: "https://mundorompecabezas.com/wp-content/uploads/2019/05/Rompecabezas-para-Blog.jpg",
      titulo: "Dominó",
      descripcion: "Es un juego de mesa en el que se utilizan fichas rectangulares divididas en dos cuadrados, cada uno con un número de puntos entre cero y seis. Los jugadores colocan las fichas en línea tratando de emparejar el número de puntos con las fichas previas. El objetivo es ser el primero en quedarse sin fichas.",
      equipo: "CD Amigos del Dominó",
      url: "https://roquetasdemar.es/el-cd-amigos-del-domino-de-roquetas-de-mar-subcampeones-de-andalucia/",
      categoria: "Deportes de mesa",
      liked: false
    },
    { id: 3,
      linkImagen: "https://www.eleconomista.com.mx/__export/1660625420654/sites/eleconomista/img/2022/08/15/shutterstock_1784519930.jpg_1902800913.jpg",
      titulo: "Ajedrez",
      descripcion: "Es un juego de mesa estratégico para dos jugadores en el que se mueven piezas en un tablero cuadriculado. Cada jugador tiene 16 piezas que incluyen peones, torres, caballos, alfiles, la reina y el rey. El objetivo es capturar la pieza del rey del oponente, lo que se conoce como jaque mate.",
      equipo: "Chess Club and Scholastic Center of Saint Louis",
      url: "https://saintlouischessclub.org/",
      categoria: "Deportes de mesa",
      liked: false
    },
    { id: 4,
      linkImagen: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/02/25/8b06d85e-9883-4810-b0c8-c04de05f5b9f/alexey-kolesnikov-red-bull-atleta-freestyle-motocross",
      titulo: "Freestyle motocross",
      descripcion: "Es un deporte extremo en el que los pilotos realizan acrobacias y trucos en motocicletas en un circuito especialmente diseñado. El objetivo es impresionar al público y a los jueces con saltos y maniobras espectaculares.",
      equipo: "Red Bull X-Fighters",
      url: "https://www.redbull.com/int-en/events/red-bull-x-fighters",
      categoria: "Deportes de motor",
      liked: false
    },
    { id: 5,
      linkImagen: "https://guiafitness.com/wp-content/uploads/ventajas-del-esqui-acuatico-1200x800.jpg",
      titulo: "Esquí acuático",
      descripcion: "Es un deporte acuático en el que una persona es arrastrada sobre la superficie del agua por una lancha rápida. El esquiador se agarra de una cuerda y esquía sobre un par de esquís o una tabla, realizando acrobacias y trucos.",
      equipo: "Ski Nautique Club de France",
      url: "https://www.tripadvisor.es/Attraction_Review-g635792-d23280076-Reviews-Ski_Nautique_Club_De_Saint_Maur-Saint_Maur_des_Fosses_Val_de_Marne_Ile_de_France.html",
      categoria: "Deportes de motor",
      liked: false
    },
    { id: 6,
      linkImagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/valentino-rossi-of-italy-and-petronas-yamaha-srt-rolls-into-news-photo-1628173809.jpg?crop=1xw:0.7501xh;center,top&resize=1200:*",
      titulo: "MotoGP",
      descripcion: "Es una competición de motociclismo de velocidad que se celebra en diferentes países del mundo. Los mejores pilotos de motocicletas compiten en una serie de carreras en circuitos de carreras. La categoría principal es la de MotoGP, en la que los pilotos compiten en motocicletas de alta cilindrada a velocidades de hasta 350 km/h. El objetivo es completar la carrera en el menor tiempo posible.",
      equipo: "Monster Energy Yamaha",
      url: "https://www.yamahamotogp.com/",
      categoria: "Deportes de motor",
      liked: false
    },
    { id: 7,
      linkImagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/6E4FXIPVQFE2JHWSBLKU6YWGTA.jpg",
      titulo: "Fútbol",
      descripcion: "Es un deporte de equipo en el que dos equipos de once jugadores cada uno compiten por marcar goles en la portería del equipo contrario. El juego se desarrolla en un campo de hierba rectangular y el objetivo es marcar más goles que el equipo contrario.",
      equipo: "Liverpool FC",
      url: "https://www.liverpoolfc.com/",
      categoria: "Deportes por equipos",
      liked: false
    },
    { id: 8,
      linkImagen: "https://e00-especiales-marca.uecdn.es/juegos-olimpicos/images/enciclopedia/rugby/foto-grande.jpg",
      titulo: "Rugby",
      descripcion: "Es un deporte de contacto en el que dos equipos de quince jugadores cada uno compiten por llevar un balón ovalado al área de anotación del equipo contrario. El juego se desarrolla en un campo de hierba rectangular y el objetivo es marcar más puntos que el equipo contrario mediante la anotación de ensayos, conversiones y penales.",
      equipo: "England Rugby",
      url: "https://www.englandrugby.com/",
      categoria: "Deportes por equipos",
      liked: false
    },
    { id: 9,
      linkImagen: "https://e00-mx-marca.uecdn.es/mx/assets/multimedia/imagenes/2023/03/14/16788273363813.jpg",
      titulo: "Béisbol",
      descripcion: "Es un deporte de equipo en el que dos equipos de nueve jugadores cada uno compiten por anotar carreras en un campo de juego en forma de diamante. El juego consiste en lanzar y batear una pelota con un bate para enviarla a un campo de juego. El objetivo es anotar más carreras que el equipo contrario durante un determinado número de entradas.",
      equipo: "New York Yankees",
      url: "https://www.mlb.com/yankees",
      categoria: "Deportes por equipos",
      liked: false
    }
];

const datosJSON = JSON.stringify(datos);
  

export const getDatos = () => {
    if ( localStorage.getItem('datos') ) {
        return JSON.parse(localStorage.getItem('datos'));
    }

    localStorage.setItem('datos', datosJSON);
    return JSON.parse(datosJSON);
};

export const changeData = ( id, value ) => {
  const arr = getDatos();

  arr[arr.findIndex( e => e.id === id )].liked = value;
  localStorage.setItem('datos', JSON.stringify(arr));
}

export const getCategorias = () => {
  const arr = getDatos();

  return [...new Set( arr.map( e => e.categoria ) )];
}

export const getCategory = ( name = "" ) => {
  const arr = getDatos();

  return name === "" ? getDatos() : arr.filter( e => e.categoria === name );
}
