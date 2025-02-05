
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
// let Huevo;
let OffsetX = 50;
let huevoDrag = false;
let contador = 60;
//Tendría que ser pública???????? (seguro que no) 
// let huevoObject={
//   x,
//   y,
//   isDragging,
//   texturaHuevo
// };
//No tengo ni idea de como spawnear más de un huevo a la vez, se porque no se puede pero no se como solucionarlo,
//he intentado con arrays pero al hacer pop de un objeto y cambiar las posiciones de los valores mantener la lógica se complica mucho (no creo que la solución sea tan compleja)
//supongo que la solución es hacer un array de objetos con diferentes propiedades (hace mucho más dificil que las cosas cambien cuando se hace un pop ya que casi todas las variables
//relacionadas al huevo se almacenan dentro del objeto huevo y no de forma externa)
//aún no se como de buena sea la solución pero no quiero marear el código hasta que haya encontrado como hacerlo de forma correcta
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

crea.Huevo = crea.add.image(posInicial, -40, huevos[huevoSeed])
.setScale(.75)
.setInteractive({draggable:true});
console.log(crea.Huevo.texture.key);

crea.input.on('drag', function (pointer, object, x, y){
  crea.Huevo.x = x;
  crea.Huevo.y = y;
  crea.Huevo.setScale(.85);
  huevoDrag = true;
});
crea.input.on('dragend', function (pointer, object, x, y){
  crea.Huevo.setScale(.75);
  huevoDrag = false;

  //CREAR OBJETO 100% NECESARIO PARA NO HACER 128098 IFS
  if(Phaser.Geom.Intersects.RectangleToRectangle(crea.huevera_dragon.getBounds(), crea.Huevo.getBounds())){
      contador += 30;
      crea.Huevo.destroy();
  }
});


    // // this.input.on('drag', function (pointer, object, x, y){
    // //     object.x = x;
    // //     object.y = y;
    // //     object.setScale(.85);
    // //     huevoDrag = true;
    // // });
    // // this.input.on('dragend', function (pointer, object, x, y){
    // //     object.setScale(.75);
    // //     huevoDrag = false;
    // // });

    // //SOLO ME DEJA LLAMAR A LA FUNCIÓN DE CREAR UNA VEZ, SI LA LLAMO DOS VECES EN EL CREATE, EL HUEVO NO TIENE VELOCIDAD 

}

function creaHueveras(crea){
    crea.huevera_dragon = crea.add.image(150,75, 'huevera');
    crea.huevera_piece = crea.add.image(150,225, 'huevera');
    crea.huevera_base = crea.add.image(150,375,'huevera');

    crea.huevera_dragon.setTint(Phaser.Display.Color.GetColor(0,0,255));
    crea.huevera_dragon.setScale(.75);
    crea.huevera_piece.setTint(Phaser.Display.Color.GetColor(255,0,0));
    crea.huevera_piece.setScale(.75);
    crea.huevera_base.setTint(Phaser.Display.Color.GetColor(0,255,0));
    crea.huevera_base.setScale(.75);
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


function prueba(){
  console.log("Contador: ", contador);
  contador--;
  if(contador <= 0){
    // clearInterval(intervalo_contador);
    contador = 60;
    // setInterval(prueba, 1000);
  }
}

function crea (){
  intervalo_contador = setInterval(prueba, 1000);
  FondoBG = this.add.image(canvas_x/2,canvas_y/2, 'FondoBG');
  FondoBG.setTint(Phaser.Display.Color.GetColor(140,100,90));   //USAR setTint(Phaser.Display.Color.GetColor()) PARA CAMBIAR EL TONO DEL SPRITE
  teclas = this.input.keyboard.createCursorKeys();
  this.contadorText = this.add.text(canvas_x/2 + canvas_x/3, canvas_y/20, contador, { 
    fontFamily: 'sans-serif',
    fontSize: '60px' });
  creaHueveras(this)
  crearHuevos(this);
  // console.log(typeof intervalo_contador);
  // setTimeout(prueba, 5000);
  
}


function actualiza(){
  
  //DIFERENTES VELOCIDADES PARA CADA HUEVO
  if(this.Huevo.texture.key == huevos[0] && !huevoDrag){
    this.Huevo.y += 6;
  }
  if(this.Huevo.texture.key == huevos[1] && !huevoDrag){
    this.Huevo.y += 4;
  }
  if(this.Huevo.texture.key == huevos[2] && !huevoDrag){
    this.Huevo.y += 3;
  }

  // animateHuevos();

  if(this.Huevo.y >= canvas_y + 70){
    //PHASER TIENE UNA FUNCIÓN PARA DESTRUIR OBJETOS, PERO HAY GENTE QUE PREFIERE DESACTIVARLOS EN PANTALLA PARA PODER SEGUIR ACCEDIENDO A SU INFORMACIÓN, COMO NO ES NUESTRO CASO, USO DESTROY()
    this.Huevo.destroy();
      //CADA VEZ QUE UN HUEVO ES DESTRUIDO CREO OTRO
      crearHuevos(this);

    }

    if (Phaser.Geom.Intersects.RectangleToRectangle(this.huevera_dragon.getBounds(), this.Huevo.getBounds())){
      console.log("hueveraDragon");
    }
    else if (Phaser.Geom.Intersects.RectangleToRectangle(this.huevera_piece.getBounds(), this.Huevo.getBounds())){
      console.log("hueveraPiece");
    }
    else if (Phaser.Geom.Intersects.RectangleToRectangle(this.huevera_base.getBounds(), this.Huevo.getBounds())){
      console.log("hueveraBase");
    }

    this.contadorText.setText(contador);
    
  }
  