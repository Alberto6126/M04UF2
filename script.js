
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


function precarga(){
this.load.image('FondoBG', 'img/Fondo.webp');
this.load.image('huevera','img/huevera.png');
this.load.image('huevoMondongo','img/HuevoMondongo128.png');
this.load.image('huevoLuffy','img/HuevoLuffy128.png');
this.load.image('huevoBase','img/HuevoBase128.png');
}

function crea (){
//rect = this.add.rectangle(400, 225, 32, 32, 0xffffff);
//huevoMain = this.add.image(400,225, 'huevoMondongo');
FondoBG = this.add.image(canvas_x/2,canvas_y/2, 'FondoBG');
FondoBG.setTint(Phaser.Display.Color.GetColor(140,100,90));
teclas = this.input.keyboard.createCursorKeys();

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
H_Mondongo.setScale(.75);
H_Mondongo.setInteractive();
	H_Mondongo.on('pointerdown', () => {
	console.log("ClickMondongo")
	})

H_Luffy = this.add.image(580 - OffsetX,200, 'huevoLuffy');
H_Luffy.setScale(.75);
H_Luffy.setInteractive();
        H_Luffy.on('pointerdown', () => {
        console.log("ClickLuffy")
        })

H_Base = this.add.image(720 - OffsetX,200, 'huevoBase');
H_Base.setScale(.75);
H_Base.setInteractive();
        H_Base.on('pointerdown', () => {
        console.log("ClickBase")
        })

}

function actualiza(){
// detectarTeclas_huevoMain();
// colisiones_huevoMain();
// if(H_Base.y< canvas_y + 70){
//     H_Base.y +=2;
// }
// else if(H_Base.y >= canvas_y){
//     H_Base.y = -130;
// }
    // H_Luffy.y +=1;
    // H_Mondongo.y +=1;

                
}
                