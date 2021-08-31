// variables of the sides of triangle and characteristics
let a = 0, b = 0, c = 0;
var area=0, base=0, perimetro=0, anguloA=0, anguloB=0, anguloC=0, s=0, altura=0;


function findTriangleType() {

	// will get the elements and parse them to INT
	a = parseInt(document.getElementById('sideA').value)
	b = parseInt(document.getElementById('sideB').value)
	c = parseInt(document.getElementById('sideC').value)

	//Always will reset the animation values to the default value.
	animationSet();

	//we call the method getTriangleType  and will get  a string value
    let resultText = getTriangleType();

		var anglesTriangle =getAngles();
		var base=getBase();
		var perimetro=getPerimeter();
		var area=getArea();
		var altura=getAltura();


    //Depending  on the return value of getTriangleType()
    //we will set the corresponding img to display the user
    var imgLink = "";
    var animationType = "animate__animated animate__flipInX";
    if(resultText == "equilatero"){
    	imgLink = 'https://image.flaticon.com/icons/png/512/2106/2106529.png'
    }else if(resultText == "escaleno"){
    	imgLink = 'https://image.flaticon.com/icons/png/512/2106/2106665.png'
    }else if(resultText == "isosceles"){
    	imgLink = 'https://image.flaticon.com/icons/png/512/2106/2106544.png';
    }else{
    	resultText = '¡Los lados son invalidos, triangulo imposible!'
    	animationType = 'animate__animated animate__tada ';
    	imgLink = 'https://image.flaticon.com/icons/png/512/675/675564.png';
    }


    //Will empty the inputs after the get the TriangleType.
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';

    //Set the img to the  triangleImg element.
    document.getElementById('triangleImg').src = imgLink;

		//Set the text value to the triangleType element.
    document.getElementById('triangleType').innerHTML = resultText;

		//Set the text value to the angles
		document.getElementById('anglesTriangle').innerHTML = anglesTriangle;

		//Set the text value para la base
		document.getElementById('baseText').innerHTML = base;

		//Set the text value for the perimeter
		document.getElementById('perimeterText').innerHTML = perimetro;

		//Set the text value for the area
		document.getElementById('areaText').innerHTML = area;

		//Set the text value for the altura
		document.getElementById('alturaText').innerHTML = altura;

    //set the animation  the cardId element.
    document.getElementById('cardId').className  = 'contentText shadow p-3 mb-5  rounded text-center ' + animationType;

}


/*This method will validate if the user enter correct values
and will return the type  of triangle*/
function getTriangleType() {

	if (a + b <= c || b + c <= a || c + a <= b || Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || a == "" || b == "" || c == ""){
  		return "invalido";
	}
	else if ((a > 0 && b >0 && c >0 ) && (a == b && b == c && c == a)){
  		return "equilatero";
	}
	else if ((a > 0 && b >0 && c >0 ) && (a == b || b == c || c == a)){
  		return "isosceles";
	}
	else {
 		return "escaleno";
	}
}


/*This is another method  to know wich type of triangle
we got, but this method is not call at the moment
is just for validate purposses.
*/
function getTriangleTypeMethodTwo() {
	let [a, b, c] = [sideA, sideb, sideC].map(sideA => +sideA || 0).sort((sideA,sideb) => sideA-sideb);

	let resultText = a + b <= c     ? "invalido"
           : a === c        ? "equilatero"
           : a < b && b < c ? "escaleno"
                            : "isosceles";

	getAngles();
	getBase();
	getPerimeter();
	getArea();
	getAltura();

    return resultText;
}

function getAngles(){

	anguloA=Math.acos((b*b+c*c-a*a)/(2*b*c));
	anguloB=Math.acos((a*a+c*c-b*b)/(2*a*c));
	anguloC=Math.acos((a*a+b*b-c*c)/(2*a*b));
	anguloA=anguloA*(180/Math.PI);
	anguloB=anguloB*(180/Math.PI);
	anguloC=anguloC*(180/Math.PI);
	anguloA=anguloA.toFixed(2);
	anguloB=Math.round(anguloB);
	anguloC=Math.round(anguloC);

var angles = "Lados ingresados A: "+a+", B: "+b+" y C: "+c+" Angulos:"+anguloA+"° "+ anguloB+"° "+ anguloC+"° ";

return angles;

}

function getBase(){

if(a>b&&a>c){
	base=a;
}
else if(b>a&&b>c){
	base=b;
}
else{
	base=c;
}

base="base mide "+base;

return base;

}

function getPerimeter(){
	perimetro="perimetro mide "+(a+b+c);
	return perimetro;
}

function getArea(){
	s=(a+b+c)/2;
	area=Math.sqrt(s*(s-a)*(s-b)*(s-c));

	area="altura mide "+area.toFixed(2);

	return area;
}

function getAltura(){
	if(a>b&&a>c){
		base=a;
	}
	else if(b>a&&b>c){
		base=b;
	}
	else{
		base=c;
	}
s=(a+b+c)/2;
area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
altura=(2*area)/base;
altura="altura mide "+altura.toFixed(2);

return altura;
}



function animationSet() {
	let animation = document.getElementById('cardId');
	animation.style.animation = 'none';
	animation.offsetHeight;
	animation.style.animation = null;
}
