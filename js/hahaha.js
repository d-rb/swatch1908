// $(".a1").mouseenter(function(){
//     $(".t1").slideDown(1000);
// });
// $(".a1").mouseleave(function(){
//     $(".t1").css("display","none");
// });
// $(".a2").mouseenter(function(){
//     $(".t2").slideDown(1000);
// });
// $(".a2").mouseleave(function(){
//     $(".t2").css("display","none");
// });
// $(".a3").mouseenter(function(){
//     $(".t3").slideDown(1000);
// });
// $(".a3").mouseleave(function(){
//     $(".t3").css("display","none");
// });
// $(".a4").mouseenter(function(){
//     $(".t4").slideDown(1000);
// });
// $(".a4").mouseleave(function(){
//     $(".t4").css("display","none");
// });

let myTimer=0;
$(".a1").mouseenter(function(){
	if($(".t1").css("display","block")){
		console.log("checkclass:mouseenter");
		$(".t1").slideDown();
	}
	
});

$(".a1").mouseleave(function(){
    myTimer=setTimeout(function(){
		$(".t1").slideUp();
		console.log(11111);
	},200);
});

$(".t1").mouseenter(function(){	
	clearInterval(myTimer);
	//$(this).show();	
});

$(".t1").mouseleave(function(){
	$(this).hide();	
})


$(".a2").mouseenter(function(){
	if($(".t2").css("display","block")){
		console.log("checkclass:mouseenter");
		$(".t2").slideDown();
	}
	
});

$(".a2").mouseleave(function(){
    myTimer=setTimeout(function(){
		$(".t2").slideUp();
		console.log(11111);
	},200);
});

$(".t2").mouseenter(function(){	
	clearInterval(myTimer);
	//$(this).show();	
});

$(".t2").mouseleave(function(){
	$(this).hide();	
})



$(".a3").mouseenter(function(){
	if($(".t3").css("display","block")){
		console.log("checkclass:mouseenter");
		$(".t3").slideDown();
	}
	
});

$(".a3").mouseleave(function(){
    myTimer=setTimeout(function(){
		$(".t3").slideUp();
		console.log(11111);
	},200);
});

$(".t3").mouseenter(function(){	
	clearInterval(myTimer);
	//$(this).show();	
});

$(".t3").mouseleave(function(){
	$(this).hide();	
})

$(".a4").mouseenter(function(){
	if($(".t4").css("display","block")){
		console.log("checkclass:mouseenter");
		$(".t4").slideDown();
	}
	
});

$(".a4").mouseleave(function(){
    myTimer=setTimeout(function(){
		$(".t4").slideUp();
		console.log(11111);
	},200);
});

$(".t4").mouseenter(function(){	
	clearInterval(myTimer);
	//$(this).show();	
});