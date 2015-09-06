var pn1="Player1",pn2="Player2",pp1=60,pp2=60,pa1=60,pa2=60,pm1=3,pm2=3,b_list1="bomboption1",b_list2="bomboption2" ,pwithc=0;
var j=0,turn=1,angle=60,angle_final,angle_rad=3.14/3;
	alert("welcome "+localStorage.getItem("name"));
    //name and choosing 1 player or 2 playr
  //testing localstorage also for remember me
  //pwc means play with computer
 
  
  //hidenew function
    function hidenew( a)
  {$('#'+a).css('display','none');
	   
  }
  //unhiding the elements
  function unhide( a)
  {
	  $("#"+a).css('display','inline');
  }

  
  
  function pwc()
  {pwithc=1;
	 // alert("as");
	  hidenew("pwc");
  hidenew("p2");
  unhide("play");
	  unhide("pname1");
	  
  }
  //p2 means two player
  function p2()
  {
  hidenew("pwc");
  hidenew("p2");
  unhide("play");
	  unhide("pname1");
	  unhide("pname2"); 
  }
  
  
  
  //time for function play
    function play()
	{ $(".hide").css('display','inline');
		hidenew("play");
	hidenew("pname1");
	hidenew("pname2");
	pn1=$("#pl1").val();
	pn2=$("#pl2").val();
	$("#p_name").html(pn1);
	
		if(pwithc==1){
		alert("we are working on play with computer");
		if($("#chkbx").value==true)
		localStorage.setItem("name",pn1);}
		// alert(localStorage.getItem("name"));
	}
	
	
	
	
	
 var pow=60,pow_final=60;
function getPosition( a )
{
 var element =document.getElementById(a);
	var xPos=0;
var yPos=0;

while(element)
{
	xPos +=(element.offsetLeft - element.scrollLeft +element.clientLeft );
	yPos +=(element.offsetTop - element.scrollTop +element.clientTop );
	element=element.offsetParent;
}

	//alert("the position of icon is"+xPos+" and "+yPos);
	
	return{x:xPos,y:yPos};
}


//to hide  a image
function hide(){
	document.getElementById("bomboption2").style.display="inline";
	if(document.getElementById("icon").style.display=="none")
		document.getElementById("icon").style.display="inline";
	
	else
	document.getElementById("icon").style.display="none";	
}
//to move  right
function move_right(){
	
	var i, a="left_tank";
	
	if(((pm1>0)&&(turn==1))||((turn==2)&&(pm2>0)))
	 {	
	
	
	if((pm1>0)&&(turn==1))
	{ a="left_tank";
      // alert(pm1);
	   pm1=pm1-1;  
		   document.getElementById("move_no").innerHTML=pm1;
	   }
	else if((turn==2)&&(pm2>0))
	 {a="right_tank";
 pm2=pm2 -1;  
 //alert(pm2);
 document.getElementById("move_no").innerHTML=pm2;
 
	 }   
	var pos=getPosition(a);

	for(i=1;i<75;i++)
	
	{	setTimeout(	function(){
	
		pos.x+=0.6;
document.getElementById(a).style.left=pos.x+"px";
},i*10);}}}
	
	
	//to move  left
function move_left(){
	
	
		
	var i, a="left_tank";
	
	 
	 if(((pm1>0)&&(turn==1))||((turn==2)&&(pm2>0)))
	 {
		 
		 if((pm1>0)&&(turn==1))
	{ a="left_tank";
         // alert(pm1);
		  pm1=pm1-1; 
document.getElementById("move_no").innerHTML=pm1;		   }
	else if((turn==2)&&(pm2>0))
	 {a="right_tank";
 //alert(pm2);
 pm2=pm2-1; 
	 document.getElementById("move_no").innerHTML=pm2;   }
	var pos=getPosition(a);

	for(i=1;i<75;i++)
	
	{	setTimeout(	function(){
	
		pos.x-=0.6;
document.getElementById(a).style.left=pos.x+"px";
},i*10);}} }
	

function bomb_check(){
	var bomb=document.getElementById(b_list1);
	var current= bomb.options[bomb.selectedIndex].value;
	
	return(current);
	
	
}
   
   function enable_button()
   {
	  var b=  document .getElementsByClassName("button");  
	 for(i=0;i<b.length;i++)
 {
	  b[i].disabled=false; 
 }
	   
   }
  

   
    $(document).ready(function(){
		var n=0,i=0,v=0;
		//for angle button
	document.getElementById("pow-text").value=pp1;
	//	$("#bomboption2").css('display','none');
		
	
		
		
		//for button closure
		var old_x,old_y ,new_x=0,new_y=0;
		 $(document).click(function(){
	   if((n==1)&&(j==1))
	   {i=2; // alert("asd");
   n=2;
   j=0;
   if(v==1)
   pow_final=pow; 
if (v==2)
{angle_final=angle;
 $("#tracer").remove();

} }
	   
   });
   $("#angle").click(function(a){
	   $("#tracer").remove();
		i=1;n=1;
		//var a="left_tank",b="right_tank";
		// var pos=getPosition(a);
		// alert(pos.x);
		// pos.x+=20;
		// pos.y+=40;
		imagePositioning(2);
		//alert("as");

	//	alert("qw");
			document.getElementById("tracer").style.height=30+"px";
			//document.getElementById("tracer").style.top=pos.y-100+"px";
			//document.getElementById("tracer").style.left=pos.x+100+"px";
			v=2;
			old_x=a.pageX;
		old_y=a.pageY;
		});
   

		//for power button
	$("#pow").click(function(b){
	v=1;
		
			i=1;
		n=1;
		
		old_x=b.pageX;
		old_y=b.pageY;
		});
	
 
	
		
		
		
	$(document).mousemove(function(e){
		if((i==1)&&(v==1)){
			j=1;
			
	 new_x=e.pageX;
	new_y=e.pageY;
	//alert(new_x+"and"+old_x);	
		if((new_x<old_x))
		{ pow= pow-(old_x-new_x)/5;
	if(pow<0)
		pow=0;
	}
	else if((new_x>old_x))
	{pow= pow+(new_x-old_x)/5;
       if(pow>100)
		   pow=100;
	}
	old_x=new_x;  
	pow=Math.round(pow);
	document.getElementById("pow-text").value=pow;

	 
	 }
	 // alert(n);
	 	if((i==1)&&(v==2)){
		j=1;
		 new_x=e.pageX;
	new_y=e.pageY;
	//alert(new_x+"and"+old_x);	
		if((new_x<old_x))
		{ angle= angle-(old_x-new_x);
	if(angle<0)
		angle=0;
	}
	else if((new_x>old_x))
	{angle= angle+(new_x-old_x);
       if(angle>360)
		   angle=360;
	}
	old_x=new_x;  
	
	angle=Math.round(angle);
	document.getElementById("angle_text").value=angle;
 	angle_rad=angle*3.141/180;
	var a="left_tank",b="right_tank";
	var x=Math.cos(angle_rad);

var y=Math.sin(angle_rad);
y=100*y;

x=100*x;
	if(turn==1)
	{ var pos=getPosition(a);// for left
document.getElementById("tracer").style.top=pos.y-10-y+"px";

			document.getElementById("tracer").style.left=pos.x+25+x+"px";
		

	}
	 else
	 {	 var pos=getPosition(b);// for right tank
	document.getElementById("tracer").style.top=pos.y-10-y+"px";

			document.getElementById("tracer").style.left=pos.x+25-x+"px";
		
	}	 



	} 
		
	});
	});
		// to create and positoin any new  image
	function imagePositioning(  n){
var a="left_tank",b="right_tank";

	var pos1=getPosition(a);
	var pos2=getPosition(b);
	
	var x=pos1.x,y=pos1.y;
	if(n==1){
	
	var bomb= bomb_check();
	var c="bomb";
	//alert(bomb);
	var img= document.createElement("img");
		
	img.id="bomb";
	
	
	img.src= bomb+".png";
	//alert(img.src);
	document.getElementById("image").appendChild(img);
	 document.getElementById(c).style.position="absolute";
	  document.getElementById(c).style.top=pos1.y-5+"px";
  document.getElementById(c).style.left=pos1.x+20+"px";
	return(c);  }
	if(n==2)
	{  
var tracer= document.createElement("img");
	
	tracer.id="tracer";
	
	
	tracer.src= "tracer.png";
	document.getElementById("image").appendChild(tracer);
	 document.getElementById("tracer").style.position="absolute";
	//alert(tracer.src);
     }
	}	
	


//changing turns and power,angle,bomb and all other things

function change(){
	if(turn==1){ //alert("aaa");
		pp1=pow;
		pow=pp2;
		pa1=angle;
		angle=pa2;
		$("#bomboption1 :selected").remove();
		$("#bomboption1").css('display','none');
			$("#bomboption2").css('display','inline');
		document.getElementById("angle_text").value=pa2;
		document.getElementById("pow-text").value=pp2;
			document.getElementById("p_name").innerHTML=pn2;
			document.getElementById("move_no").innerHTML=pm2;
		turn=2;
		
	}
	else if(turn==2){ // alert("assaa");
		pp2=pow;
		pow=pp1;
		pa2=angle;
		angle=pa1;
		$("#bomboption2 :selected").remove();
		$("#bomboption2").css('display','none');
			$("#bomboption1").css('display','inline');
		document.getElementById("angle_text").value=pa1;
		document.getElementById("pow-text").value=pp1;
			document.getElementById("p_name").innerHTML=pn1;
			document.getElementById("move_no").innerHTML=pm1;
		turn=1;
		
	}
	
}	
	
	

//for fire button
function fire()
{document.getElementById("icon").style.display="none";
  
	// $("#left_ta$nk").hide();
  var c=imagePositioning(1);
 //alert(c);
 //var  c="bomb";
 angle=document.getElementById("angle_text").value;
	pow_final=document.getElementById("pow-text").value;
	
 var a="left_tank",b="right_tank";
 
 if(turn==1)
 { var pos1=getPosition(a);
 var pos2=getPosition(b);  }
	
	if(turn==2)
 { var pos2=getPosition(a);
 var pos1=getPosition(b); 
  //angle=-angle;
 }
	
	
	var x=pos1.x,y=pos1.y;
	
	  var vx=2*pow_final*Math.cos(angle*3.14/180), vy=2*pow_final*Math.sin(angle*3.14/180),acc=10;
	  if(turn==2)
		  vx=-vx;
	 
	 var f=y,v2=vy;
	 for( var i=1;f<pos2.y+12;i++)
	 
		{// alert(v2);
		v2=v2-0.2;
		f=f-v2/100+acc/100;
		
	
			setTimeout(	function(){
				x=x+vx/100;
			vy=vy-0.2;
			
		y=y-vy/100+acc/100; 
		
document.getElementById(c).style.left=x+"px"; 
 document.getElementById(c).style.top=y+"px"; 
		 document.getElementById("fi").disabled=true; 
		 var b=document.getElementsByClassName('button');
 
  var i;
  
  for(i=0;i<b.length;i++)
 {
	  b[i].disabled=true; 
 }
	
		 if(y>pos2.y+12)
		 {enable_button();
 document.getElementById(c).remove();
 rolling(x);
 change();
 alert("as");
 //var e="'"+gola3+"'";
	
		 }},i*4);}
		
}

/* after bomb fall animations and effects */
function rolling(x ){
	var a="right_tank",b="left_tank";
	alert(x);
	if(turn==1)
		{//fun
			$(".lc").trigger('load');
		$(".lc").trigger('play');
		//	
			$(".lc").hide();
			
			var pos=getPosition(a);
	if((x-pos.x>0)&&(x-pos.x<=100))
	{		for(i=1;i<40;i++)
	{	setTimeout(	function(){
	
		pos.x-=0.6;
document.getElementById(a).style.left=pos.x+"px";
		},i*10);} }
		
		else if((x-pos.x<0)&&(x-pos.x>=-100))
	{		for(i=1;i<40;i++)
	{	setTimeout(	function(){
	
		pos.x+=0.6;
document.getElementById(a).style.left=pos.x+"px";
		},i*10);} }}
		//var x1=getPosition("right_tank");
	else 
	{  $(".lc").prop('currentTime',0);
$(".lc").trigger('pause');
		var x1=getPosition("left_tank");
	alert(x1.x);}
	//$("left_tank").css("transform","rotate(30deg)");
	document.getElementById("left_tank").style.transform="rotate(30deg)";

	
} 
//alert("asd");
	
	//localStorage.setItem("name","kk");
	//alert(localStorage.getItem("name"));
	//alert("asd");
//document.write(localStorage.name);