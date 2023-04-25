window.onload = function(){
	let windowHeight = window.innerHeight;
	let scrollPosi = (windowHeight / 14) * 13 ;	//14분의 13지점

    
	function fadeUp(){
		/*현재 스크롤 중간 위치 구하기*/
		//et	sPosi = window.pageYOffset;

		//console.log('sPosi : ' + sPosi)
		//let sBPosi = sPosi + winH; //스크롤의 현재 바텀 위치
		//let sMPosi = sPosi + winH_half;
		const fadeUpTarget = document.querySelectorAll('.fadeUp');

		if (fadeUpTarget) {
			for(let i = 0; i < fadeUpTarget.length; i++){
				let currentTarget =  fadeUpTarget[i];
				let currentTargetTop = fadeUpTarget[i].getBoundingClientRect().top;

				if(currentTargetTop < scrollPosi) {
					currentTarget.classList.add('active');
				} else {
					currentTarget.classList.remove('active');
				}
			}

		}
	}

	function fadeLeft(){
		const fadeLeftTarget = document.querySelectorAll('.fadeLeft');

		if (fadeLeftTarget) {
			for(let i = 0; i < fadeLeftTarget.length; i++){
				let currentTarget =  fadeLeftTarget[i];
				let currentTargetTop = fadeLeftTarget[i].getBoundingClientRect().top;

				if(currentTargetTop < scrollPosi) {
					currentTarget.classList.add('active');
				} else {
					currentTarget.classList.remove('active');
				}
			}

		}
	} 
	 
	function fadeRight(){
		const fadeRightTarget = document.querySelectorAll('.fadeRight');

		if (fadeRightTarget) {
			for(let i = 0; i < fadeRightTarget.length; i++){
				let currentTarget =  fadeRightTarget[i];
				let currentTargetTop = fadeRightTarget[i].getBoundingClientRect().top;

				if(currentTargetTop < scrollPosi) {
					currentTarget.classList.add('active');
				} else {
					currentTarget.classList.remove('active');
				}
			}

		}
	} 



	//로딩 시 이벤트 실행.
	fadeUp();
	fadeRight();
	fadeLeft();

	//스크롤 이벤트 실행
	window.addEventListener('scroll', function(){
		fadeUp();
		fadeRight();
		fadeLeft();
	});


	//반응형 대비
	window.addEventListener('resize',function(){
		let winH = window.innerHeight;
		let winH_half = winH / 2;
	});

	

	//타이틀 애니메이션
	// setTimeout(function() {
	// 	$('#worldSupportContWrap .card_box .objt').addClass('titleAni02');
	// }, 300);


	// setTimeout(function() {
	// 	$(".blurTxtAni i").each(function(echIdx){
	// 		$(this).delay(echIdx * 150).queue(function(next){
	// 			$(this).addClass("on");
	// 		});
	// 	});
	// }, 600);

	// setTimeout(function() {
	// 	$(".blurTxtAniFast.pc_only i").each(function(echIdx){
	// 		$(this).delay(echIdx * 80).queue(function(next){
	// 			$(this).addClass("on");
	// 		});
	// 	});
	// }, 1700);

	// setTimeout(function() {
	// 	$(".blurTxtAniFast.mob_only i").each(function(echIdx){
	// 		$(this).delay(echIdx * 90).queue(function(next){
	// 			$(this).addClass("on");
	// 		});
	// 	});
	// }, 1800);

};


