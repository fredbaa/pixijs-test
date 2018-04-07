let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

//Create a Pixi Application
let app = new PIXI.Application({});
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

app = addMario(app);
app = addText(app);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

function addMario(app) {
  // create a new Sprite from an image path
  var mario = PIXI.Sprite.fromImage('assets/images/mario.png')

  // center the sprite's anchor point
  mario.anchor.set(0.5);
  mario.height = 50;
  mario.width = 50;

  // move the sprite to the center of the screen
  mario.x = app.screen.width / 2;
  mario.y = app.screen.height / 2;

  // Opt-in to interactivity
  mario.interactive = true;

  // Shows hand cursor
  mario.buttonMode = true;

  // Pointers normalize touch and mouse
  mario.on('pointerdown', function(){
      mario.scale.x *= 1.25;
      mario.scale.y *= 1.25;
  });

  app.stage.addChild(mario);

  return app;
}

function addText(app) {
  let texStyle = new PIXI.TextStyle({
    fontFamily: 'Press Start 2P, Arial',
    fontSize: 18,
    fill: ['#ffffff'],
    align: 'center'
  });

  let richText = new PIXI.Text('Mario Press', texStyle);
  richText.anchor.set(0.5);
  richText.x = (app.screen.width / 2);
  richText.y = 30;

  app.stage.addChild(richText);

  return app;
}
