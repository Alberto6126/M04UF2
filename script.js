
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
let H_Mondongo;
let H_Luffy;
let H_Base;
let OffsetX = 50;
//let huevoMain

function detectarTeclas_huevoMain(){

//if(teclas.left.isDown){
  //  huevoMain.x -= rect_dir;
   // }
//if(teclas.right.isDown){
  //  huevoMain.x += rect_dir;
    //}
//if(teclas.up.isDown){
  //  huevoMain.y -= rect_dir;
    //}
//if(teclas.down.isDown){
  //  huevoMain.y += rect_dir;
    //}
}

function colisiones_huevoMain(){

//if(huevoMain.x <= 16){
  // huevoMain.x = 16;
//}
//if(huevoMain.x >= 784){
  //  huevoMain.x = 784;
//}
//if(huevoMain.y <= 16){
  //  huevoMain.y = 16;
//}
//if(huevoMain.y >= 434){
  //  huevoMain.y = 434;
//}

}

function propiedadesHuevo(huevo){
huevo.setScale(.75);
huevo.setInteractive({draggable:true});
}

function animaHuevos(huevo){
huevo.angle += rotate;
//console.log(H_Mondongo.angle)

if (huevo.angle < 40 &&  huevo.angle > -40){
rotate = rotate;
}else{
//console.log(H_Luffy.angle)
rotate = -rotate;
}

}

function precarga(){
this.load.image('FondoBG', 'img/Fondo.webp');
this.load.image('huevera','img/huevera.png');
this.load.image('huevoMondongo','img/HuevoMondongo128.png');
this.load.image('huevoLuffy','img/HuevoLuffy128.png');
this.load.image('huevoBase','img/HuevoBase128.png');
this.load.image('trigo', 'img/wheatTEMP.webp')
}

function crea (){
//rect = this.add.rectangle(400, 225, 32, 32, 0xffffff);
//huevoMain = this.add.image(400,225, 'huevoMondongo');
FondoBG = this.add.image(canvas_x/2,canvas_y/2, 'FondoBG');
FondoBG.setTint(Phaser.Display.Color.GetColor(140,100,90));
teclas = this.input.keyboard.createCursorKeys();
/*ROTAR IMAGENES O ELEMENTOS EN PHASER CON .angle*/
//Trigo = this.add.image(canvas_x/2, canvas_y/2, 'trigo');
//Trigo.angle = 360;
//Trigo.x = 100;
//Trigo.y = 100;
huevera_dragon = this.add.image(150,75, 'huevera');
huevera_piece = this.add.image(150,225, 'huevera');
huevera_base = this.add.image(150,375,'huevera');
//AÑADIR FILTRO DE TINTE:

huevera_dragon.setTint(Phaser.Display.Color.GetColor(0,0,255));
huevera_dragon.setScale(.75);
huevera_piece.setTint(Phaser.Display.Color.GetColor(255,0,0));
huevera_piece.setScale(.75);
huevera_base.setTint(Phaser.Display.Color.GetColor(0,255,0));
huevera_base.setScale(.75)

H_Mondongo = this.add.image(430 - OffsetX,200, 'huevoMondongo');
propiedadesHuevo(H_Mondongo);

H_Mondongo.on('pointerdown', function () {
	console.log("ClickMondongo")
	});

H_Luffy = this.add.image(580 - OffsetX,200, 'huevoLuffy');
propiedadesHuevo(H_Luffy);
      
			H_Luffy.on('pointerdown', function () {
        console.log("ClickLuffy")
        })

H_Base = this.add.image(720 - OffsetX,200, 'huevoBase');
propiedadesHuevo(H_Base);

        H_Base.on('pointerdown', function () {
        console.log("ClickBase")
        })


this.input.on('drag', function (pointer, object, x, y){
	object.x = x;
	object.y = y;
	object.setScale(.85);
});
this.input.on('dragend', function (pointer, object, x, y){
	object.setScale(.75);
});


}

let rotate = 1;

function actualiza(){
// detectarTeclas_huevoMain();
// colisiones_huevoMain();
// if(H_Base.y< canvas_y + 70){
  //   H_Base.y +=2;
// }
// else if(H_Base.y >= canvas_y){
  //   H_Base.y = -130;
// }
   //  H_Luffy.y +=1;
   //  H_Mondongo.y +=1;
//H_Mondongo.angle += rotate;
//console.log(H_Mondongo.angle)
//if (H_Mondongo.angle >= 40 || H_Mondongo.angle <= -40){
//rotate = -rotate;
//}

animaHuevos(H_Mondongo);
animaHuevos(H_Luffy);
animaHuevos(H_Base);

}
                
