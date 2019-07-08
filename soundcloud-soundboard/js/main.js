// A $( document ).ready() block.
$( document ).ready(function() {;

	// hide sonar-wave
	$(".sonar-wave").hide();

	// make infomation box draggable
    $( ".introduction-popup" ).draggable();

	// show and hide pop-up information
	$(".introduction-popup").hide();
	
	$(".menu-info").click(function(){
        $(".introduction-popup").toggle();
    });

	// close btn on introduction popup close
    $(".close-btn").click(function(){
    	$(".introduction-popup").hide();
	});

    // media player play and pause button

   	$(".menu-media-player .pause").hide();

	$(".menu-media-player .play").click(function() {
	    typebeats.play();
	    $(".menu-media-player .play").hide();
	    $(".menu-media-player .pause").show();
	    $(".sonar-wave").show();
  	});

	$(".menu-media-player .pause").click(function() {
		typebeats.pause();
		$(".menu-media-player .play").show();
		$(".menu-media-player .pause").hide();
		$(".sonar-wave").hide(); 
	});

	// media player type beats

	var typebeats = new Howl({
		src: ['sounds/typebeats.wav'],
		loop: true,
		volume: 0.7
	});

	// rapper adlib sounds

	// LIL PUMP
	var lilpump1 = new Howl({
		src: ['sounds/LP-Damn.wav'],
		volume: 1.5
	});

	var lilpump2 = new Howl({
		src: ['sounds/LP-Bird.wav'],
		volume: 2.0
	});

	var lilpump3 = new Howl({
		src: ['sounds/LP-GucciGang.wav'],
		volume: 1.5
	});

	var lilpump4 = new Howl({
		src: ['sounds/LP-Eskeddit.wav'],
		volume: 2.0
	});

	// SKI MASK
	var skimask1 = new Howl({
		src: ['sounds/SKI-Ayy.wav'],
		volume: 1.0
	});

	var skimask2 = new Howl({
		src: ['sounds/SKI-Bitch.wav'],
		volume: 1.0
	});

	var skimask3 = new Howl({
		src: ['sounds/SKI-Who.wav'],
		volume: 1.0
	});

	var skimask4 = new Howl({
		src: ['sounds/SKI-Yuh.wav'],
		volume: 1.0
	});

	// MADEINTYO
	var madeintyo1 = new Howl({
		src: ['sounds/TYO-Hey.wav'],
		volume: 1.0
	});

	var madeintyo2 = new Howl({
		src: ['sounds/TYO-Ouu.wav'],
		volume: 1.0
	});

	var madeintyo3 = new Howl({
		src: ['sounds/TYO-SkrSkr.wav'],
		volume: 1.0
	});

	// LIL YACHTY
	var lilyachty = new Howl({
		src: ['sounds/YACHTY-LilBoat.wav'],
		volume: 2.0
	});

	// FAMOUS DEX
	var famousdex1 = new Howl({
		src: ['sounds/DEX-Dexter.wav'],
		volume: 1.5
	});

	var famousdex2 = new Howl({
		src: ['sounds/DEX-Oou.wav'],
		volume: 1.5
	});

	var famousdex3 = new Howl({
		src: ['sounds/DEX-What.wav'],
		volume: 1.5
	});

	// 6IX9INE
	var SixNine = new Howl({
		src: ['sounds/69-ScumGang.wav'],
		volume: 1.0
	});

	//PLAYBOI CARTI
	var playboi = new Howl({
		src: ['sounds/PLAYBOI-What.wav'],
		volume: 1.5
	});

	//UGLY GOD
	var uglygod = new Howl({
		src: ['sounds/UGLYGOD-Thanks.wav'],
		volume: 1.0
	});

	//LIL UZI
	var liluzi = new Howl({
		src: ['sounds/UZI-Ya.wav'],
		volume: 1.5
	});


	// play rapper adlib sounds

	// LIL PUMP CLICK FUNCTIONS

	$(".lilpump1").on("click", function(){
		lilpump1.play();
	});

	$(".lilpump2").on("click", function(){
		lilpump2.play();
	});

	$(".lilpump3").on("click", function(){
		lilpump3.play();
	});

	$(".lilpump4").on("click", function(){
		lilpump4.play();
	});

	// SKI MASK CLICK FUNCTIONS

	$(".skimask1").on("click", function(){
		skimask1.play();
	});

	$(".skimask2").on("click", function(){
		skimask2.play();
	});

	$(".skimask3").on("click", function(){
		skimask3.play();
	});

	$(".skimask4").on("click", function(){
		skimask4.play();
	});

	// MADEINTYO CLICK FUNCTIONS

	$(".madeintyo1").on("click", function(){
		madeintyo1.play();
	});

	$(".madeintyo2").on("click", function(){
		madeintyo2.play();
	});

	$(".madeintyo3").on("click", function(){
		madeintyo3.play();
	});

	// FAMOUS DEX CLICK FUNCTIONS

	$(".famousdex1").on("click", function(){
		famousdex1.play();
	});

	$(".famousdex2").on("click", function(){
		famousdex2.play();
	});

	$(".famousdex3").on("click", function(){
		famousdex3.play();
	});

	$(".lilyachty").on("click", function(){
		lilyachty.play();
	});

	$(".playboi").on("click", function(){
		playboi.play();
	});

	$(".uglygod").on("click", function(){
		uglygod.play();
	});

	$(".liluzi").on("click", function(){
		liluzi.play();
	});

	$(".69").on("click", function(){
		SixNine.play();
	});

	
	// colorize function for HSL
	function colorize() {
  		var hue = Math.random() * 540;
  		return "HSL(" + hue + ",50%, 80%)";
	}

	//on animation colorize sonar-wave
	$(".sonar-wave").on("webkitAnimationIteration oanimationiteration animationiteration", function(){
  		$(this).css("background-color", colorize());
	});

	$(".sonar-emitter").on("webkitAnimationIteration oanimationiteration animationiteration", function(){
  		$(this).css("background-color", colorize());
	});
});