let canvas_x = 800;
let canvas_y = 450;
let rect_dir = 2;
let teclas;
let config = {
        width: canvas_x,
        height: canvas_y,
        scene:{
                preload: precarga,
                create: crea,
                update: actualiza
        }
}

let game = new Phaser.Game(config)
let huevera_dragon, huevera_piece, huevera_base;
let Huevo;
let OffsetX = 50;
//GENERO UN ARRAY (EN JS LOS ARRAYS SON DINÁMICOS PUEDO TENER UN ARRAY CON DIFERENTES TIPOS DE DATOS Y CON UNA LONGITUD DINÁMICA , SE ACCEDE DE LA MISMA FORMA QUE EN C++)
let huevos=['huevoMondongo', 'huevoLuffy', 'huevoBase']

//NO HE LLEGADO A ENTENDER COMO SE USA TIMER NI DONDE
// let timer = this.time.addEvent({
//   delay: 500,
//   callback: crearHuevos(this),
//   callbackScope: this,
//   loop: true,
// })

function precarga(){
    this.load.image('FondoBG', 'img/Fondo.webp');
    this.load.image('huevera','img/huevera.png');
    this.load.image('huevoMondongo','img/HuevoMondongo128.png');
    this.load.image('huevoLuffy','img/HuevoLuffy128.png');
    this.load.image('huevoBase','img/HuevoBase128.png');
    this.load.image('trigo', 'img/wheatTEMP.webp')
}

//tengo que pasar el parametro this (el objeto this.crea no es el mismo miembro que this.crearHuevos, si no pasamos el contexto javascript interpreta al huevo dentro de una función sin significado para phaser)
function crearHuevos(crea) {
  //EN ESTA FUNCIÓN ME GENERO UN NÚMERO RANDOM CON EL CUÁL VOY A DISTINGUIR LOS HUEVOS Y ASOCIARLOS CON LOS NOMBRES DE LAS IMAGENES QUE TENGO EN EL ARRAY DE ARRIBA
let huevoSeed = Phaser.Math.Between(0,2);
let posInicial = Phaser.Math.Between(380,760);
//TAMBIÉN GENERO UN RÁNDOM PARA COLOCAR LOS HUEVOS EN UN RANGO ENTRE EL 380 Y 760

Huevo = crea.add.image(posInicial, -40, huevos[huevoSeed]);
Huevo.setScale(.75);
Huevo.setInteractive({draggable:true});
console.log(Huevo.texture.key);


// console.log(huevoSeed);
// if (Huevo.texture.key === huevos[huevoSeed]){ console.log("SON LO MISMO TIO")} // AHORA SE QUE CON .texture.key puedo acceder a la string de la imagen, por lo tanto puedo identificar a los diferentes huevos
// Huevo.on('pointerdown', function () {
//
//       console.log(""huevos[huevoSeed])
//       });
}

// function animateHuevos(){
//   let rotationSpeed = 2;
//   let direction = 1; // 1 para girar a la derecha, -1 para girar a la izquierda
  
//   if (Huevo.angle == 40) {
//     direction = -1; // Cambia de dirección hacia la izquierda
//   }
//   if (Huevo.angle == -40) {
//     direction = 1; // Cambia de dirección hacia la derecha
//   }
//   Huevo.angle += rotationSpeed * direction;
// }


function crea (){
    FondoBG = this.add.image(canvas_x/2,canvas_y/2, 'FondoBG');
    FondoBG.setTint(Phaser.Display.Color.GetColor(140,100,90));   //USAR setTint(Phaser.Display.Color.GetColor()) PARA CAMBIAR EL TONO DEL SPRITE
    teclas = this.input.keyboard.createCursorKeys();

    huevera_dragon = this.add.image(150,75, 'huevera');
    huevera_piece = this.add.image(150,225, 'huevera');
    huevera_base = this.add.image(150,375,'huevera');
    
    huevera_dragon.setTint(Phaser.Display.Color.GetColor(0,0,255));
    huevera_dragon.setScale(.75);
    huevera_piece.setTint(Phaser.Display.Color.GetColor(255,0,0));
    huevera_piece.setScale(.75);
    huevera_base.setTint(Phaser.Display.Color.GetColor(0,255,0));
    huevera_base.setScale(.75);

    this.input.on('drag', function (pointer, object, x, y){
        object.x = x;
        object.y = y;
        object.setScale(.85);
    });
    this.input.on('dragend', function (pointer, object, x, y){
        object.setScale(.75);
    });

    //SOLO ME DEJA LLAMAR A LA FUNCIÓN DE CREAR UNA VEZ, SI LA LLAMO DOS VECES EN EL CREATE, EL HUEVO NO TIENE VELOCIDAD 
    crearHuevos(this);

}


function actualiza(){

//DIFERENTES VELOCIDADES PARA CADA HUEVO
  if(Huevo.texture.key == huevos[0]){
    Huevo.y += 6;
  }
  if(Huevo.texture.key == huevos[1]){
    Huevo.y += 4;
  }
  if(Huevo.texture.key == huevos[2]){
    Huevo.y += 3;
  }

  // animateHuevos();

  if(Huevo.y >= canvas_y + 70){
    //PHASER TIENE UNA FUNCIÓN PARA DESTRUIR OBJETOS, PERO HAY GENTE QUE PREFIERE DESACTIVARLOS EN PANTALLA PARA PODER SEGUIR ACCEDIENDO A SU INFORMACIÓN, COMO NO ES NUESTRO CASO, USO DESTROY()
      Huevo.destroy();
      //CADA VEZ QUE UN HUEVO ES DESTRUIDO CREO OTRO
      crearHuevos(this);

    }

  

}
