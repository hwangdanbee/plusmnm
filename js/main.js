$(function(){
	

	//object moving effect - v01

	var $body = $('body'),
	$panel = $('.panel'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col');

	function initTilt() {
		TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

		$body.mousemove(function(e) {
			tilt(e.pageX, e.pageY) 
		});
	};

	function tilt(cx, cy) {
		// var sxPos = cx / $panel.width() * 100 - 100;
		// var syPos = cy / $panel.height() * 100 - 100;
		var sxPos = (cx / $body.width()*100 - 50)*2 ;
		var syPos = (cy / $body.height()*100 - 50)*2;
		TweenMax.to($pContent, 2, {
			rotationY: -0.03 * sxPos,
			rotationX: 0.03 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -400",
			ease: Expo.easeOut
		});
		TweenMax.to($img, 2, {
			rotationY: -0.03 * sxPos,
			rotationX: 0.03 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -200",
			ease: Expo.easeOut
		});
	}

	$body.mouseleave(function() {
		tilt($body.width()/2, $body.height()/2);
	})

	initTilt();

	console.clear();



	//object moving effect - v02

	var $body3 = $('body'),
	$panel3 = $('.panel3'),
	$pContent3 = $('.panel__content3'),
	$img3 = $('.panel__img-col3');

	function initTilt3() {
		TweenMax.set([$pContent3, $img3], { transformStyle: "preserve-3d" });

		$body3.mousemove(function(e) {
			tilt3(e.pageX, e.pageY) 
		});
	};

	function tilt3(cx, cy) {
		// var sxPos = cx / $panel.width() * 100 - 100;
		// var syPos = cy / $panel.height() * 100 - 100;
		var sxPos = (cx / $body.width()*100 - 50)*2 ;
		var syPos = (cy / $body.height()*100 - 50)*2;
		TweenMax.to($pContent3, 2, {
			rotationY: -0.02 * sxPos,
			rotationX: 0.02 * syPos,
			transformPerspective: 1200,
			transformOrigin: "top center -400",
			ease: Expo.easeOut
		});
		TweenMax.to($img3, 2, {
			rotationY: -0.03 * sxPos,
			rotationX: 0.03 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -200",
			ease: Expo.easeOut
		});
	}

	$body3.mouseleave(function() {
		tilt($body3.width()/2, $body.height()/2);
	})

	initTilt3();

	console.clear();




	//스크롤 위치에 따른 로고 색상 변경 기능

	$(window).scroll(function(){
		var all_pos = $(this).scrollTop();
		var header_switch = $('#section02').offset().top;
		var header_switch2 = $('#section04').offset().top;
		
		if(all_pos > header_switch2){
			$('header .logo').removeClass('active-header');
			$('header .info-menu').removeClass('active-header2');
		}
		else if(all_pos > header_switch-50){
			$('header .logo').addClass('active-header');
			$('header .info-menu').addClass('active-header2');
		} else {
			$('header .logo').removeClass('active-header');
			$('header .info-menu').removeClass('active-header2');
		}

	});

	$(window).resize(function(){
		if (window.innerWidth < 500) { 
			
			$(window).scroll(function(){
				var all_pos = $(this).scrollTop();
				var header_switch = $('#section02').offset().top;
				var header_switch2 = $('#section04').offset().top;

				if(all_pos > header_switch-50){
					$('header .logo').addClass('active-header3');
				} else {
					$('header .logo').removeClass('active-header3');
				}
			});

			} else { 
			
			/* 스크립트내용*/ 
				
		} 
	}).resize();


	

	//메인 이벤트 [스크롤시 모양 변경 이벤틑]
	$(window).scroll(function(){
		var st_pos = $(this).scrollTop();
		var ht02 = $('#main-02').offset().top;
		var ht03 = $('#main-03').offset().top;

		//console.log(st_pos);
		
		if (st_pos > ht03-400){
			$('.panel-fix-bg').addClass('active2');
		}
		else if (st_pos > ht02-400){
			$('.panel-fix-bg').addClass('active');
			$('.panel-fix-bg').removeClass('active2');
		} else {
			$('.panel-fix-bg').removeClass('active');
		}
	});

	$(window).scroll(function(){
		var st_pos = $(this).scrollTop();
		var ht022 = $('#main-02-m').offset().top;
		var ht033 = $('#main-03-m').offset().top;
		var ht044 = $('#section02').offset().top;

		//console.log(st_pos);
		
		if (st_pos > ht044){

			$('.panel-fix-bg2').addClass('active3');

		}else if (st_pos > ht033-400){
			$('.panel-fix-bg2').addClass('active2');
			$('.panel-fix-bg2').removeClass('active3');
		}
		else if (st_pos > ht022-400){
			$('.panel-fix-bg2').addClass('active');
			$('.panel-fix-bg2').removeClass('active2');
			$('.panel-fix-bg2').removeClass('active3');
		} else {
			$('.panel-fix-bg2').removeClass('active');
			$('.panel-fix-bg2').removeClass('active3');
		}
	});


	
	// 탭		 
	$('.tab-contents').find('.tab').hide(); //가리는거 hide
	$('.tab-contents').find('.tab#insta').fadeIn(1000);


	$('.tab-menu').find('a').eq(0).addClass('active');

	$('.channel-section').find('.tab-menu').on('click','a',function(event){

		event.preventDefault();

		if($(this).hasClass('active')){

		  return;
		}

		var $index = $(this).parent('div').index(); //this를 누를때 몇번값을 인지하는지 알고싶을때 index 사용

		//콘텐츠가 바뀌어야 한다
		$('.tab-contents').find('.tab').hide();
		$($(this).attr('href')).show();

		$('.tab-menu').find('a').removeClass('active');
		$(this).addClass('active');

	});

	
	//햄버거
	var button = document.getElementById('hamburger-menu'),
    span = button.getElementsByTagName('span')[0];

	button.onclick =  function() {
	  span.classList.toggle('hamburger-menu-button-close');
	};

	$('#hamburger-menu').on('click', toggleOnClass);

	function toggleOnClass(event) {
	  var toggleElementId = '#' + $(this).data('toggle'),
	  element = $(toggleElementId);

	  element.toggleClass('on');

	}

	// close hamburger menu after click a
	$( '.menu li a' ).on("click", function(){
	  $('#hamburger-menu').click();
	});



	
}); //End