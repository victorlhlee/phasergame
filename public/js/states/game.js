
(function(){
  
  var INITIAL_POSITIONS = [
  //player 1
  { x : 100, y : 100},
  //player 2
  { x : 600, y : 100}
];



JumpPunch.Game = function () {

  this.player_1;
  this.player_2;

};

JumpPunch.Game.prototype.create = function () {
  this.player_1 = new JumpPunch.Player(this.game, 0);
  this.player_2 = new JumpPunch.Player(this.game, 1);
  this.game.add.existing(this.player_1);
  this.game.add.existing(this.player_2);

  this.player_1.x = INITIAL_POSITIONS[0].x;
  this.player_1.y = INITIAL_POSITIONS[0].y;
  this.player_2.x = INITIAL_POSITIONS[1].x;
  this.player_2.y = INITIAL_POSITIONS[1].y;

};


JumpPunch.Game.prototype.update = function () {
  if(this.player_1.x < this.player_2.x){
    this.player_1.facing = JumpPunch.Player.FACING.RIGHT;
    this.player_2.facing = JumpPunch.Player.FACING.LEFT;
  }else{
    this.player_1.facing = JumpPunch.Player.FACING.LEFT;
    this.player_2.facing = JumpPunch.Player.FACING.RIGHT;
  }
};

JumpPunch.Game.prototype.shutdown = function () {

};

})();