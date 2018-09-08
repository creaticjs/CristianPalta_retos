var selEquipos = document.getElementById("equipos");
var nomEquipo = document.getElementById("nombre");
var mostrarEquipo = document.getElementById("box_player")

mostrarEquipo.style.visibility = 'hidden';

var imagenEquipo = [];

imagenEquipo["Nacional"] = "assets/img/Logo/nacional.png";
imagenEquipo["America"] = "assets/img/Logo/america.png";
imagenEquipo["Medellin"] = "assets/img/Logo/medellin.png";
imagenEquipo["Tolima"] = "assets/img/Logo/tolima.png";
imagenEquipo["Millonarios"] = "assets/img/Logo/millonarios.png";
imagenEquipo["Pasto"] = "assets/img/Logo/pasto.png";

var playersNacional = [
    Fernando_Monetti,
    Juan_David_Ramirez,
    Christian_Vargas,
    Daniel_Bocanegra,
    Felipe_Aguilar,
    Diego_Braghieri,
    Alexis_Henriquez,
    Helibelton_Palacios,
    Deiver_Machado,
    Carlos_Cuesta,
    Christian_Mafla,
    Raul_Loaiza,
    Juan_Pablo_Ramirez,
    Vladimir_Hernandez,
    Yerson_Candelo,
    Jorman_Campuzano,
    Gonzalo_Castellani,
    Aldo_Ramirez,
    Andres_Perea,
    Gustavo_Torres,
    Omar_Duarte,
    Carlos_Rivas,
    Reinaldo_Lenis,
    Dayro_Moreno,
    Jeison_Lucumi
];

var playersAmerica = [
    Carlos_Bejarano,
    Neto_Volpi,
    John_Menses,
    Danilo_Arboleda,
    Anderson_Zapata,
    Diego_Herner,
    Pablo_Armero,
    Pedro_Franco,
    Haider_Borja,
    Jhonatan_Perez,
    Hector_Quinones,
    Larry_Vasquez,
    Alejandro_Bernal,
    Carlos_Lizarazo,
    Jonny_Mosquera,
    Yesus_Cabrera,
    Yamilson_Rivera,
    Avimiled_Rivas,
    Daniel_Buitrago,
    Cristian_Dajome,
    Joseph_Cox,
    Geimer_Balanta,
    Fernando_Aristeguieta,
    Jefferson_Cuero,
    Kevin_Viveros
];
var playersMedellin = [];
var playersTolima = [];
var playersMillonarios = [];
var playersPasto = [];


var equipo = [];
equipo.push(new Equipos("Nacional", "Hernan Dario Herrera", playersNacional, " es un club de fútbol de la ciudad de Medellín, Colombia, fundado el 7 de marzo de 1947 bajo el nombre de Club Atlético Municipal de Medellín, aunque por escritura pública esta sociedad fue constituida el 30 de abril de 1947", "Atanasio Girardot", "16 títulos oficiales"));
equipo.push(new Equipos("America", " Fernando Castro", playersAmerica, "El América de Cali S. A., conocido como América de Cali o simplemente América, es un club de fútbol colombiano de la ciudad de Cali. Es considerado uno de los clubes más grandes y populares de Colombia y uno de los más importantes de América del Sur.10​ ", "Olímpico Pascual Guerrero", "13 títulos oficiales"));
equipo.push(new Equipos("Medellin", "Octavio Zambrano", playersMedellin, "es un club de fútbol colombiano fundado bajo el nombre de «Medellín Football Club» el 14 de noviembre de 1913 por Alberto Uribe Piedrahíta", "Atanasio Girardot", "6 títulos oficiales"));
equipo.push(new Equipos("Tolima", "Alberto Gamero", playersTolima, "El Club Deportes Tolima S. A., comúnmente conocido como Deportes Tolima o Tolima, es un club de fútbol colombiano de la ciudad de Ibagué, fundado el 18 de diciembre de 1954", "Manuel Murillo Toro", "2 títulos oficiales"));
equipo.push(new Equipos("Millonarios", "Miguel Ángel Russo", playersMillonarios, "Millonarios Fútbol Club, oficialmente Azul y Blanco Millonarios Fútbol Club S. A.​, mejor conocido como Millonarios, ​ es un club de fútbol de la ciudad de Bogotá, capital de Colombia", "Nemesio Camacho El Campín", "15 títulos oficiales"));
equipo.push(new Equipos("Pasto", "Flabio Torres", playersPasto, "La asociación Deportivo Pasto es un club de fútbol colombiano de la ciudad de San Juan de Pasto, en el departamento de Nariño. Fue fundado el 12 de octubre de 1949.​​", "Estadio Departamental Libertad", "1 títulos oficiales"));

var auxE = "";
var posicion;
var muestra;



equipo.forEach(function (item, index) {
    
    equipo[index]
    item.mostrar(index);
    console.log(item);
    posicion = index;
    //auxE += "<div>" + item.nombre + "</div>"
});

//...
// var cTable = document.getElementById('cuerpoTabla')
// var auxT = "";
// equipos.forEach(function (equipo, index) {
//     auxT += "<tr><td>" + equipo.nombre + "</td><td>" + equipo.tecnico + "</td><tr>";
// })
// cTable.innerHTML = auxT;

// selEquipos.onchange = function () {
//     // console.log(this.value)
//     //document.getElementById("nombre").innerHTML = this.value;
//     this.selectedIndex;
//     nomEquipo.innerHTML = this.options[this.selectedIndex].text;
//     d.style.visibility = "visible";
//     // for (var muestra of equipo) {
//     //     muestra.mostrar();
//     // }


//     this.options[this.selectedIndex];
// }