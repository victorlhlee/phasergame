(function(){

  var ANIMATIONS = {
    IDLE : {
      name : 'title',
      frames : [0,1,2,3],
      fps : 5
    }
  };

var FACING_FACTOR = {
  LEFT: -1,
  RIGHT: 1
};

function select_sprite_row(player_id){
  return function(frame_id){
    return frame_id + player_id*JumpPunch.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
  };
}

// sprite class constructor
JumpPunch.Player = function (game, id, name) {
  this.game = game;
  this.id = id;
  this.name = name? name : 'Player '+(id+1);
  this.facing;

  // super constructor call
  Phaser.Sprite.call(this, game, 0, 0, JumpPunch.ASSETS.SPRITESHEET.PLAYER.name);

  this.anchor = { x : 0.5, y : 0.5 };

  this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

  this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
};

//extend Sprite prototype
JumpPunch.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constructor: {
    value: JumpPunch.Player
  }
});

JumpPunch.Player.FACING = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

JumpPunch.Player.prototype.update = function(){
  this.scale.x = FACING_FACTOR[ this.facing ] ;
};

})();