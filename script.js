$(document).ready(function(){
	//Padajuci meni
	$('ul.parent > li').hover(function(){
		$(this).find('ul.child').show(300);
	}, function(){
		$(this).find('ul.child').hide(150);
	});
	
	//Search Bar
	$("#searchPic").click(function(){
		$(".searchToggle").show(300);
	});
	
	$("#tbSearch, #searchPic").blur(function(){
		$(".searchToggle").hide(500);
	});
	
	
	//Zoom in slike
    $('.slikaProsirujuca').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
	
	//Prikaz diva sa opisom
	$(".slikaProsirujuca").click(function(){
		var target = $(this).parent().children(".blokNovi");
		$(target).fadeToggle(300);
	});
	
	$(".bZatvori").click(function(){
		$(".blokNovi").fadeOut(200);
	});
	
	$(".logIn").click(function(){
		$(".logDiv").fadeToggle(300);
	});
	
	$(".logDiv").blur(function(){
        $(".logDiv").fadeOut(300);
    });
	
	$("#prijava").click(function(){
		$("#prijavaDiv").fadeToggle(300);
	});
	
	$("#registracija").click(function(){
		$("#regDiv").fadeToggle(300);
	});
	
	$("#bPrijava").click(function(){
		var greske = new Array();
		
		var korisnik = $('#prIme').val();
		var lozinka = $('#prLozinka').val();
		var korisnikReg = /^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/;
		var lozinkaReg = /^[a-zA-Z]\w{6,14}$/;
		
		if(!korisnik.match(korisnikReg)){
			greske.push(korisnik);
			$('#prIme').css("border", "1px solid red");
		}
		
		if(!lozinka.match(lozinkaReg)){
			greske.push(lozinka);
			$('#prLozinka').css("border", "1px solid red");
		}
		
		if(greske.length==0){
			$("#prijavaDiv").fadeOut(300);
		}
	});
	
	$("#bRegistracija").click(function(){
		var greske = new Array();
		
		var korisnik = $('#reIme').val();
		var lozinka = $('#reLozinka').val();
		var lozinka2 = $('#reLozinka2').val();
		var mejl = $('#reEmail').val();
		var korisnikReg = /^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/;
		var lozinkaReg = /^[a-zA-Z]\w{6,14}$/;
		var mejlReg = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
		
		if(!korisnik.match(korisnikReg)){
			greske.push(korisnik);
			$('#reIme').addClass("check");
		}
		else{
			$('#reIme').removeClass("check");
		}
		
		if(!lozinka.match(lozinkaReg)){
			greske.push(lozinka);
			$('#reLozinka').addClass("check");
		}
		else{
			$('#reLozinka').removeClass("check");
		}
		
		if(lozinka!=lozinka2 || lozinka.length==0){
			greske.push(lozinka2);
			$('#reLozinka2').addClass("check");
		}
		else{
			$('#reLozinka2').removeClass("check");
		}
		
		if(!mejl.match(mejlReg)){
			greske.push(mejl);
			$('#reEmail').addClass("check");
		}
		else{
			$('#reEmail').removeClass("check");
		}
		
		if(greske.length==0){
			$("#regDiv").fadeOut(300);
			alert("Congratulations, you have signed up!");
			document.getElementById("reIme").value="";
			document.getElementById("reLozinka").value="";
			document.getElementById("reLozinka2").value="";
			document.getElementById("reEmail").value="";
		}
	});
	
	$("#bResetuj").click(function(){
		$('#reIme, #reLozinka, #reLozinka2, #reEmail').removeClass("check");
	});
	
	
	//Slajder:
	$('#banner-fade').bjqs({
		height      : 450,
		width       : 1115,
		responsive  : true
	});
	
	//Anketa:
	$("#pollGlasaj").click(function(){
		var tekst = "";
		var r1=0; var r2=0;
		var r3=0; var r4=0;
		
		var anketaRez=$("[name='poll']:checked").val();
		if($("[name='poll']:checked").length!=0){
			if(anketaRez == "rez1"){
				r1+=1;
				tekst +="Jon Snow: <strong>"+r1+"</strong><br/>Tyrion Lannister: <strong>"+r2+"</strong><br/>Daenerys Targeryen: <strong>"+r3+"</strong><br/>Sansa Stark: <strong>"+r4+"</strong><br/>";
				$("#rezultatAnkete").html(tekst);
			}
			if(anketaRez == "rez2"){
				r2+=1;
				tekst +="Jon Snow: <strong>"+r1+"</strong><br/>Tyrion Lannister: <strong>"+r2+"</strong><br/>Daenerys Targeryen: <strong>"+r3+"</strong><br/>Sansa Stark: <strong>"+r4+"</strong><br/>";
				$("#rezultatAnkete").html(tekst);
			}
			if(anketaRez == "rez3"){
				r3+=1;
				tekst +="Jon Snow: <strong>"+r1+"</strong><br/>Tyrion Lannister: <strong>"+r2+"</strong><br/>Daenerys Targeryen: <strong>"+r3+"</strong><br/>Sansa Stark: <strong>"+r4+"</strong><br/>";
				$("#rezultatAnkete").html(tekst);
			}		
			if(anketaRez == "rez4"){
				r4+=1;
				tekst +="Jon Snow: <strong>"+r1+"</strong><br/>Tyrion Lannister: <strong>"+r2+"</strong><br/>Daenerys Targeryen: <strong>"+r3+"</strong><br/>Sansa Stark: <strong>"+r4+"</strong><br/>";
				$("#rezultatAnkete").html(tekst);
			}			
		}
		else{
			$("#rezultatAnkete").html("You have to choose one of the options.");
		}
	});
	
	
	$.ajax({
		type: "GET",
		url: "preview.xml",
		dataType: "xml",
		success: xmlParser
	});
	
}); 

/*XML dohvatanje podataka*/
function xmlParser(xml){
		$(xml).find("season").each(function(){
			$(".blokPreporuka").append('<div class="preporuka"><img src="slike/' + $(this).find("image").text() + '" width="150" height="220"</img>' +
			'<p><strong>Year: </strong>'+$(this).find("year").text()+'</p> </div>');
			$(".preporuka").fadeIn(500);
			$(".pr").append('<p>'+ $(this).find("desc").text()+'</p> <a class="ch" href="https://gameofthrones.000webhostapp.com/seasons.html"><strong>See more</strong></a>');
		});
}


/*Validacija kontakt forme*/
function provera(){
	var ime = document.getElementById("tIme");
	var mejl = document.getElementById("tMejl");
	var naslov = document.getElementById("tNaslov");
	var greskeID = new Array();
	var tekst=""; var tekst2=""; var tekst3="";
	
	var regIme = /^[A-Z][a-z]{2,19}$/;
	var regMejl = /^\w+([-_.]\w+)*\@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var regNaslov = /^[A-Z][a-z]{4,24}$/;
				 
	
	if(!ime.value.match(regIme)){
		greskeID.push(ime.id);
		tekst = "Wrong input!";
	}
	
	if (!mejl.value.match(regMejl)){
		greskeID.push(mejl.id);
		tekst2 = "Wrong input!";
	}
	
	if (!naslov.value.match(regNaslov)){
		greskeID.push(naslov.id);
		tekst3 = "Wrong input!";
	}
	
	for(var i=0;i<greskeID.length;i++){
		document.getElementById(greskeID[i]).style.border = "1px solid red";
		document.getElementById("info").innerHTML=tekst;
		document.getElementById("info2").innerHTML=tekst2;
		document.getElementById("info3").innerHTML=tekst3;
	}
	
	if(greskeID.length == 0){
		alert("The message has been sent!");
		ime.value = "";
		mejl.value= "";
		document.getElementById("taPoruka").value = "";
	}
}

function proveraReset(){
	document.getElementById("tIme").style.border = "1px solid grey";
	document.getElementById("tMejl").style.border = "1px solid grey";
	document.getElementById("tNaslov").style.border = "1px solid grey";
	document.getElementById("info").innerHTML="";
	document.getElementById("info2").innerHTML="";
	document.getElementById("info3").innerHTML="";
}

/*Cookies*/
function upis(){
	var korisnicko_ime = document.getElementById("prIme").value;
	var lozinka = document.getElementById("prLozinka").value;
	var korisnikReg = /^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/;
	var lozinkaReg = /^[a-zA-Z]\w{6,14}$/;
	if(korisnicko_ime.match(korisnikReg) && lozinka.match(lozinkaReg)){
		var datum = new Date();
		datum.setMonth(datum.getMonth() + 3);
		document.cookie = "Podaci="+korisnicko_ime+";expires="+datum.toGMTString();
	}
}
	
function ispis(){
	if(document.cookie != ""){
		var kolacic = document.cookie.split("=");
		var r = confirm("Do you want to save your Username and Password?");
		if(r==true){
			document.getElementById("prIme").value = kolacic[1];
		}
	}
} 


/*Pretraga*/
function pretraga(){

	 if(window.XMLHttpRequest){
		 xmlhttp=new XMLHttpRequest();
	}
	 else{
		 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	 xmlhttp.open("GET", "books.xml", false);
	 xmlhttp.send();
	 xmlDoc=xmlhttp.responseXML;
	 dohvatiPodatke1(xmlDoc);
}

function dohvatiPodatke1(xmlDoc){
  var tbPretraga = document.getElementById('tbSearch');
  var book = xmlDoc.getElementsByTagName('book');
  var tekst = "";
  if(tbPretraga.value!=""){
	  for(var i=0; i<book.length; i++){
			var ime=book[i].getElementsByTagName('name')[0].childNodes[0].nodeValue;
			var adresa=book[i].getElementsByTagName('link')[0].childNodes[0].nodeValue;
			  
			if(tbPretraga.value.toLowerCase().trim() == ime.toLowerCase().trim()){
					tekst+="<p>book: "+ime+", <a href='"+adresa+"'>link</a></p>";
					document.getElementById("rezultatPretrage").style.display = "block";
					document.getElementById("rezultatPretrage").innerHTML=tekst;
					break;
			}
	  }
	if (tbPretraga.value.toLowerCase().trim() != ime.toLowerCase().trim()){
				tekst+="<p>Content hasn't been found</p>";
				document.getElementById("rezultatPretrage").style.display = "block";
				document.getElementById("rezultatPretrage").innerHTML=tekst;
			}
	}
	else if(tbPretraga.value==""){
				tekst+="<p>You have to enter something</p>";
				document.getElementById("rezultatPretrage").style.display = "block";
				document.getElementById("rezultatPretrage").innerHTML=tekst;
			}
}
