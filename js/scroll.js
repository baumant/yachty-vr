	var b="";
	var pScroll = 0.0, currScroll = 0.0;
	var so = [];
	$(document).ready(function(){
		$('html,body').animate({ scrollTop : 0.0 } , 0);
		b = navigator.sayswho[0];

		initObjects();

		$( window ).scroll(function() {

			currScroll = $('body').scrollTop();

			updateScroll();

				pScroll = currScroll;

		});

	});


	function initObjects(){

		var height = window.innerHeight;

		for(var i = 0; i< 100; i++){

			var yPos = Math.random()*height;
			so.push( new scrollObjects(yPos, i) );

		}
	}

	function updateScroll(){
		for(var i = 0; i< so.length; i++){
			so[i].update();
		}
	}

	function scrollObjects(YPOS, ORD){

		this.y = YPOS;
		this.rndImg = Math.floor( Math.random()*11 );

		$("#foodItemHolder").append("<div class='foodItem' id='fi"+ORD+"'><img src='img/assets/"+this.rndImg+".png'/></div>");

		this.obj = $("#fi"+ORD+"");
		this.x = Math.random() * ( window.innerWidth - 100 );

		this.obj.css("left", this.x+"px");
		this.obj.css("top", this.y+"px");

		this.scl = .1+Math.random()*.2;

		this.obj.scale('' + ( this.scl ));
		// this.obj.rotate('' + ( Math.random()*360 ));
		this.mt = 0.0;

		this.update = function(){

			this.mt = ((currScroll-pScroll)*(this.scl*3.0))*0.3;
			this.y += this.mt;
			//this.obj.css("margin-top", +this.mt+"px")

			this.obj.css("top", this.y+"px");

			if(this.y < -100){
				this.y = window.innerHeight + 100;
				this.x = Math.random() * ( window.innerWidth - 100 );
				this.changeImage();
			}

			if(this.y > window.innerHeight + 100){
				this.y = -100;
				this.x = Math.random() * ( window.innerWidth - 100 );
				this.changeImage();

			}

		}

		this.changeImage = function(){
			this.rndImg = Math.floor( Math.random()*11 );
			this.obj.children("img").attr("src", "img/assets/"+this.rndImg+".png");
		}

	}
	navigator.sayswho= (function(){
		var N= navigator.appName, ua= navigator.userAgent, tem;
		var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
		if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
		M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
		return M;
	})();