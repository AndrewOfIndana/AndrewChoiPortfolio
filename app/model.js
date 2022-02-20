var aBoardGameSection = `
<div class="project">
  <h3>Missle Crisis (Board Game and Journal)</h3>
  <p>This is Missle Crisis a board game where two players must launch missle towards each other and destroy each others home city, the player must roll a die to move their missle. Players must juggle moving missles and intercepting enemy missles while strategicly planning out how they can destroy thier enemy's base.</p>
  <div class="boardgameImg1"></div>
  <div class="boardgameImg2"></div>
  <div class="boardgameImg3"></div>
  <h4>Journal 1</h4>
  <p></p>
</div>
`;
var cUnrealLevelSection = `
<div class="project">
  <h3>Unreal 4 Level</h3>
  <p>This is a level made in Unreal 4 by me, the level takes place in a destroyed city. The level feature many interactable including a teleporting volumn that will move the player back to the beggining of the level, as well as light that trun on when the player gets close</p>
  <div class="levelGif1"></div>
  <div class="levelGif2"></div>
  <div class="levelGif3"></div>
</div>
`;

var dGameDesignIdeasSection = `
<div class="project">
  <h3>10 Game Design Ideas</h3>
  <p>These are 10 game design ideas that I have thought of some of these ideas I am thinking of making game out of, some might be repurposed into other games, and some might flat out be shelved. However over the course of my game design career, I am hoping that some of these ideas see life in my games.</p>
  <h4>1.	Steampunk Climber</h4>
  <p>Inspired by Getting Over It, and Jump King, Steampunk Climber is a 2d pixel-based game where the player needs to jump, climb and parkour in a floating steampunk city to get to the top. The player would be able to move comfortably when on the ground but when in the air, the player would not be able to control their movement.</p>
  <div class="designIdeasImg1"></div>
  <h4>2.	Sunken Together</h4>
  <p>A first-person multiplayer or single player game where the player(s) manage a dysfunctional submarine and try their hardest to repair their ship as long as they can before their submarine explodes. Involves the player(s) prioritizing tasks that may come up.</p>
  <div class="designIdeasImg2"></div>
  <h4>3.	Shapeshifter</h4>
  <p>A multiplayer first-person shooter where the players would try to hunt down and kill a shape shifter in a spaceship. The shapeshifter is controlled by one player and could shapeshift as an object, or player; has elements of prop hunt and Among Us.</p>
  <div class="designIdeasImg3"></div>
  <h4>4.	Moon Trail</h4>
  <p>A small game where the player must use the moonlight to walk to the right path, perfect material for more story-based experience.</p>
  <div class="designIdeasImg4"></div>
  <h4>5.	Drifting White Sail</h4>
  <p>Rouge-like time tracking, rpg, move your ship to islands, random encounters, goal is to level up and buy really good equipment and fight the boss in the center in 30 in game days, all about time management, and getting the perfect run. </p>
  <div class="designIdeasImg5"></div>
  <h4>6.	Scurry Away</h4>
  <p>A game where the player is a rat in a house. The player must maintain their hunger, and thirst, while trying to survive in the house. As the game goes on the difficultly increases, with more traps, poisons, and cats may appear to kill the player.</p>
  <div class="designIdeasImg6"></div>
  <h4>7.	Gates</h4>
  <p>A real time strategy where the player must use teleporting gates to move their units across different micro-zones which may carry different resources and such. The player must either destroy all other players or obtain a victory through controlling all gates.</p>
  <div class="designIdeasImg7"></div>
  <h4>8.	Lithia: Sword of a broken reality</h4>
  <p>A role-playing game, inspired by many jrpgs, where the player lives in a floating world and must side with or without a faction. The battle system is a combination of real time action and turn based. is a 2d game and aesthetically is inspired by Octopath Traveler.</p>
  <div class="designIdeasImg8"></div>
  <h4>9.	 Bypass</h4>
  <p>A first-person horror game where the player must wiggle through a cave system avoiding monster and trying to avoid making sound. The player must explore a massive cave system and try to find their way up.</p>
  <div class="designIdeasImg9"></div>
  <h4>10.	Racecar Tycoon</h4>
  <p>A semi-idle game where the player controls a car, and every lap would produce money, money can be used to buy upgrades and other items that could increase the amount of money earned or give the player money every second. Since the game is an idle game, the game doesn't have an ending or goal to accomplish.</p>
  <div class="designIdeasImg10"></div>
  <div class="designIdeasProtoGif1"></div>
  <div class="designIdeasProtoGif2"></div>
  <div class="designIdeasProtoGif3"></div>
</div>
`;

var eMemorySection = `
<div class="project">
  <h3>Working Game of Memory</h3>
  <p>This is a working game of Memory I made in Unity. Though it was not required I decided to play around to post processing and lighting to get a good casino like enviroment for the game.</p>
  <div class="projectProof">
    <div class="memoryGif1"></div>
    <p>The player can click on a card and it will flip over</p>
    <div class="memoryGif2"></div>
    <p>The player will be prompted with a win screen with the time they finished when they win</p>
    <div class="memoryGif3"></div>
    <p>The player can play again, and the cards will change spots when they do</p>
  </div>
</div>
`;
var fprogrammingProjectSection = `
<div class="project">
  <h3>Seeds N' Scrap (Personal programming project)</h3>
  <p>This is Seeds N' Scrap a first person tower defense game where the player must defend their house with crops against a horde of bugs. This project was made with another colleague outside of school.</p>
  <div class="PersonalGif1"></div>
  <div class="PersonalGif2"></div>
  <div class="PersonalGif3"></div>
</div>
`;

export function getPageContent(pageID) {
    $("#app").html(eval(pageID));
}