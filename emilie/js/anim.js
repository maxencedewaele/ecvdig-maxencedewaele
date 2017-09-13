// Variables globales
var stage;

// Initialisation de la scène
stage = new createjs.Stage("canvas");

// Variables des chemins des images
var hero;

// Variables des éléments sur la scène
var nbElement = 0;
var nbElementScene = 1;


// Variables de direction
var left, right ;


// Déplacement en y
var vy = 0 ;

// Déplacement en x
var vx = 0;

// Gravité
var gravity = 2;

// Variable pour le saut
var jumping = false

// Variable indiquant si le héros est dans les airs(true)
var inAir = false ;

// Variable permettant d'animer le héros
var animPersonnage = false ;

var hPlatform = 4.9 * (stage.canvas.height/6);
var lPlatform = stage.canvas.width;

// Plateformes
var plateformX = [0];
var plateformY = [hPlatform];
var plateformW = [lPlatform];


function init() {

    
    // Initialisation de la boucle mise à jour de l'affichage
   createjs.Ticker.addEventListener("tick", tick);

    //chargement de la source de l'image
    srcHero = new Image();
    srcHero.src = "img/lapinou.png";
    srcHero.onload = chargementImage;

    createjs.Ticker.addEventListener("tick", tick);

    //rafraichissement de la scene
    stage.update();
}


function chargementImage(evt)
{
	nbElement = nbElement + 1;
	if (nbElement == nbElementScene)
	{
		jouer();
	}
}


function jouer()  {
	// Création de l'objet hero
	hero = new Hero(srcHero);
	stage.addChild(hero);
	hero.x = stage.canvas.width/2;
    tiersCanvas = stage.canvas.height/6;
	hero.y = 4.9 * tiersCanvas;
    
    
    // Déclaration du tableau
	platforms = new Array();

	//Parcours et création
	for(i = 0; i < plateformW.length; i++)
	{
		unePlateform = new Platform(plateformW[i],20);
		unePlateform.x = plateformX[i];
		unePlateform.y = plateformY[i];
		stage.addChild(unePlateform);

		//Ajout de la création au tableauu platerforms
		platforms.push(unePlateform);
	}

	hero.gotoAndPlay("idle");
    
    window.onkeydown = handleKeyDown;
	window.onkeyup = handleKeyUp;
}


function handleKeyDown(evt) {
	var key = evt.keyCode; // Récupère dans la variable key le code de la touche appuyée
	console.log(key);

	if(key == 37)
	{
		left = true;
	}

	if(key == 39)
	{
		right = true;
	}

	if(key == 32)
	{
		jump();
	}
}

function jump() {
	if (jumping == false && inAir == false)
	{	
		hero.gotoAndPlay("jump");
		hero.y = hero.y-20;
		animPersonnage = false;
		vy = -25;
		jumping = true;
		inAir = true;
	}
}

function handleKeyUp(evt) {
	var key = evt.keyCode; // Récupère dans la variable key le code de la touche appuyée

	if(key == 37)
	{
		left = false;
		hero.gotoAndPlay("idle");
	}

	if(key == 39)
	{
		right = false;
		hero.gotoAndPlay("idle");
	}

	animPersonnage = false;
}

function gestionClavier(evt)
{
	var key=evt.keyCode; // Récupère dans la variable key le code de la touche appuyée
	console.log(key);
	if(key == 38)
	{
		hero.gotoAndPlay("jump");
	}

	if(key == 39)
	{
		hero.gotoAndPlay("walk");
	}
}



function tick(evt)
{
	// Mise à jour affichage 30*par seconde ici
	stage.update();

	deplacement();
    allCollisions();
}

function deplacement() {
	if(left == true)
	{
		vx = -20;
	}


	if(left && animPersonnage == false && inAir == false) {
		hero.gotoAndPlay("walk");
		hero.scaleX = -1;
		animPersonnage = true;
	}

	if(right == true)
	{
		vx = +20;
	}

	hero.x = hero.x + vx;

	if(right && animPersonnage == false && inAir == false) {
		hero.gotoAndPlay("walk");
		hero.scaleX = 1;
		animPersonnage = true;
	}

	vx=vx*0.5;

	vy = vy + gravity;
	if(inAir == true) {
		hero.y = hero.y + vy;
	}
}


function allCollisions() {
	inAir = true;

	for(i=0; i<plateformW.length; i++)
	{
		if(hero.y >= platforms[i].y &&
			hero.y <= (platforms[i].y + platforms[i].height) &&
			hero.x > platforms[i].x &&
			hero.x < (platforms[i].x + platforms[i].width)) {
				hero.y = platforms[i].y;
				vy = 0;
				inAir = false;
				if(jumping == true) {
					jumping = false;
					hero.gotoAndPlay("idle");
				}
		}
	}
}

window.onload=init;