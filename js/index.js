let estudiantes= [
    {nombre: "Luis", semestre: 5, nota:15},
    {nombre: "María", semestre: 6, nota:7},
    {nombre: "Paola", semestre: 1, nota:6},
    {nombre: "Eva", semestre: 4, nota:14},
    {nombre: "Daniel", semestre: 5, nota:18},
    {nombre: "José", semestre: 3, nota:20},
    {nombre: "Alejandro", semestre: 5, nota:17},
    {nombre: "Sergio", semestre: 8, nota:1},
    {nombre: "Johel", semestre: 1, nota:9},
    {nombre: "Patricia", semestre: 6, nota:10}
];

let estudiantesSemestre = (estudiantes, semestre) =>{
    let estudiantesFiltrados=[];
    estudiantes.forEach((estudiante) =>{
       if(estudiante.semestre==semestre){
            estudiantesFiltrados.push(estudiante);
       } 
    });
    return estudiantesFiltrados;
};

let salida= document.getElementById("salida");
let estudiantes5= estudiantesSemestre(estudiantes, 5);
salida.innerHTML= `Estudiantes del 5to semestre:<br><br>`;
estudiantes5.forEach((estudiante) =>{
    salida.innerHTML+=`Nombre: ${estudiante.nombre}<br> Semestre: ${estudiante.semestre}<br> Nota: ${estudiante.nota}<br><br>`;
});