var b_11;var b_12;var b_13;var b_21;var b_22;var b_23;var b_31;var b_32;var b_33;
	
function addButton(){
	
	//This code snippet places my puzzle in the center of screen.
	var w = window.innerWidth;
	var h = window.innerHeight;
	document.getElementById('buttons').style.left = (w-320)/2;
	document.getElementById('buttons').style.top = (h-263)/2;
	document.getElementById('buttons').style.position = "relative";
	
	//There's a counter which counts button's IDs.
	var count = 0;
	
	//There's a counter which counts addresses of pictures.
	var picCount = 0;
	
	//Three DIVs are created and each includes three buttons.
	for(let i=1 ; i<=3 ; i++){
		
		//Previously mentioned DIVs are created here. 
		var div = document.createElement('div');
		div.id = "d"+i;
		document.getElementById('buttons').appendChild(div);
		
		//Previously mentioned buttons are created here with ID="b_i" . (i is '1,2,3').
		for(let j=1 ; j<=3 ;++j){
			picCount++;
			var button = document.createElement('button');
			button.id = "b_"+i+j;
			button.style.width = 100;
			button.style.height = 82;
			button.style.marginLeft = "5px";
			button.style.marginTop = "3.9px";
			button.value = "b_"+i+j;
			
			//This if statement makes button number 9 invisible. It should be invisible do that the other buttons could move.  
			if(j<3 || i<3){
				button.innerHTML = ++count;
				button.style.background = "url(pictures/pic"+picCount+".jpg) no-repeat";
			}
			else{
				button.innerHTML = 0;
				button.style.opacity = 0;
			}
			button.style.color = "red";
			
			//For making the buttons invisible
			button.style.fontSize = "0px";
			
			//This function detects whether the clicked button can move or not.
			//If it is true then it'll be replaced with adjacent buttons.
			button.onclick = function(){wichButtons(this)};
			
			document.getElementById('d'+i).appendChild(button);
		}
			
	}
	
//Buttons created are stored in these variables for ease of access	
b_11 = document.getElementById('b_11');
b_12 = document.getElementById('b_12');
b_13 = document.getElementById('b_13');
b_21 = document.getElementById('b_21');
b_22 = document.getElementById('b_22');
b_23 = document.getElementById('b_23');
b_31 = document.getElementById('b_31');
b_32 = document.getElementById('b_32');
b_33 = document.getElementById('b_33');
	
}




function wichButtons(btn){
	
	//If button number 1 is selected (clicked).
	if(btn.value === 'b_11')
	{
		if(b_12.innerText === '0')
		{
			b_12.innerHTML = btn.innerText;
			b_12.style.background =  b_11.style.background;
			b_11.style.background = "";
			btn.innerHTML = 0;
		}
		else if(b_21.innerText === "0")
		{
			b_21.innerHTML = btn.innerText;
			b_21.style.background =  b_11.style.background;
			b_11.style.background = "";
			btn.innerHTML = 0;
		}
		
		//This function checks whether a number is 0 or not. If yes, they're disappeared.
		isVisible();
	}
	
	
	//If button number 2 is selected (clicked).
	else if(btn.value === 'b_12')
	{
		if(b_11.innerText === '0')
		{
			b_11.innerHTML = btn.innerText;
			b_11.style.background = b_12.style.background;
			b_12.style.background = "";
			btn.innerHTML = 0;
		}
		else if(b_13.innerText === "0")
		{
			b_13.innerHTML = btn.innerText;
			b_13.style.background = b_12.style.background;
			b_12.style.background = "";
			btn.innerHTML = 0;
		}	
		else if(b_22.innerText === "0")
		{
			b_22.innerHTML = btn.innerText;
			b_22.style.background = b_12.style.background;
			b_12.style.background = "";
			btn.innerHTML = 0;
		}	
		
		isVisible();
	}
	
	
	//If button number 3 is selected (clicked).
	else if(btn.value === 'b_13')
	{
		if(b_12.innerText === '0')
		{
			b_12.innerHTML = btn.innerText;
			b_12.style.background = b_13.style.background;
			b_13.style.background = "";
			btn.innerHTML = 0;
		}
		else if(b_23.innerText === "0")
		{
			b_23.innerHTML = btn.innerText;
			b_23.style.background = b_13.style.background;
			b_13.style.background = "";
			btn.innerHTML = 0;
		}
		
		isVisible();
	}
	
	
	//If button number 4 is selected (clicked).
	else if(btn.value === 'b_21')
	{
		if(b_11.innerText === '0')
		{
			b_11.innerHTML = btn.innerText;
			btn.innerHTML = 0;
			b_11.style.background = b_21.style.background;
			b_21.style.background = "";			
		}
		else if(b_22.innerText === "0")
		{
			b_22.innerHTML = btn.innerText;
			b_22.style.background = b_21.style.background;
			b_21.style.background = "";				
			btn.innerHTML = 0;
		}	
		else if(b_31.innerText === "0")
		{
			b_31.innerHTML = btn.innerText;
			b_31.style.background = b_21.style.background;
			b_21.style.background = "";				
			btn.innerHTML = 0;
		}	
		
		isVisible();
	}
	
	
	//If button number 5 is selected (clicked).
	else if(btn.value === 'b_22')
	{
		if(b_12.innerText === '0')
		{
			b_12.innerHTML = btn.innerText;
			b_12.style.background = b_22.style.background;
			b_22.style.background = "";				
			btn.innerHTML = 0;
		}
		else if(b_21.innerText === "0")
		{
			b_21.innerHTML = btn.innerText;
			b_21.style.background = b_22.style.background;
			b_22.style.background = "";				
			btn.innerHTML = 0;
		}	
		else if(b_23.innerText === "0")
		{
			b_23.innerHTML = btn.innerText;
			b_23.style.background = b_22.style.background;
			b_22.style.background = "";				
			btn.innerHTML = 0;
		}	
		else if(b_32.innerText === "0")
		{
			b_32.innerHTML = btn.innerText;
			b_32.style.background = b_22.style.background;
			b_22.style.background = "";				
			btn.innerHTML = 0;
		}	
		
		isVisible();
	}
	
	
	//If button number 6 is selected (clicked).
	else if(btn.value === 'b_23')
	{
		if(b_13.innerText === '0')
		{
			b_13.innerHTML = btn.innerText;
			b_13.style.background = b_23.style.background;
			b_23.style.background = "";				
			btn.innerHTML = 0;
		}
		else if(b_22.innerText === "0")
		{
			b_22.innerHTML = btn.innerText;
			b_22.style.background = b_23.style.background;
			b_23.style.background = "";				
			btn.innerHTML = 0;
		}	
		else if(b_33.innerText === "0")
		{
			b_33.innerHTML = btn.innerText;
			b_33.style.background = b_23.style.background;
			b_23.style.background = "";					
			btn.innerHTML = 0;
		}	
		
		isVisible();	
	}
	
	
	//If button number 7 is selected (clicked).
	else if(btn.value === 'b_31')
	{
		if(b_21.innerText === '0')
		{
			b_21.innerHTML = btn.innerText;
			b_21.style.background = b_31.style.background;
			b_31.style.background = "";				
			btn.innerHTML = 0;			
		}
		else if(b_32.innerText === "0")
		{
			b_32.innerHTML = btn.innerText;
			b_32.style.background = b_31.style.background;
			b_31.style.background = "";					
			btn.innerHTML = 0;
		}
		
		isVisible();
	}
	
	
	//If button number 8 is selected (clicked).
	else if(btn.value === 'b_32')
	{
		if(b_22.innerText === '0')
		{
			b_22.innerHTML = btn.innerText;
			btn.innerHTML = 0;
			b_22.style.background = b_32.style.background;
			b_32.style.background = "";	
		}
		else if(b_31.innerText === "0")
		{
			b_31.innerHTML = btn.innerText;
			b_31.style.background = b_32.style.background;
			b_32.style.background = "";	
			btn.innerHTML = 0;
		}	
		else if(b_33.innerText === "0")
		{
			b_33.innerHTML = btn.innerText;
			b_33.style.background = b_32.style.background;
			b_32.style.background = "";				
			btn.innerHTML = 0;
		}	
		
		isVisible();	
	}
	
	
	//If button number 9 is selected (clicked).
	else if(btn.value === 'b_33')
	{
		if(b_23.innerText === '0')
		{
			b_23.innerHTML = btn.innerText;
			b_23.style.background = b_33.style.background;
			b_33.style.background = "";		
			btn.innerHTML = 0;
		}
		else if(b_32.innerText === "0")
		{
			b_32.innerHTML = btn.innerText;
			b_32.style.background = b_33.style.background;	
			b_33.style.background = "";
			btn.innerHTML = 0;
		}
		
		
		isVisible();	
	}
}

 
//This function checks whether a number is 0 or not. If yes, they're disappeared.
function isVisible(){
	
	if(b_11.innerText === '0'){
		b_11.style.opacity = 0;
   }
	else{
		b_11.style.opacity = 100;
	}
	
	if(b_12.innerText === '0'){
		b_12.style.opacity = 0;
   }
	else{
		b_12.style.opacity = 100;
	}
	
	if(b_13.innerText === '0'){
		b_13.style.opacity = 0;
   }
	else{
		b_13.style.opacity = 100;
	}
	
	if(b_21.innerText === '0'){
		b_21.style.opacity = 0;
   }
	else{
		b_21.style.opacity = 100;
	}
	
	if(b_22.innerText === '0'){
		b_22.style.opacity = 0;
   }
	else{
		b_22.style.opacity = 100;
	}
	
	if(b_23.innerText === '0'){
		b_23.style.opacity = 0;
   }
	else{
		b_23.style.opacity = 100;
	}
	
	if(b_31.innerText === '0'){
		b_31.style.opacity = 0;
   }
	else{
		b_31.style.opacity = 100;
	}
	
	if(b_32.innerText === '0'){
		b_32.style.opacity = 0;
   }
	else{
		b_32.style.opacity = 100;
	}
	
	if(b_33.innerText === '0'){
		b_33.style.opacity = 0;
   }
	else{
		b_33.style.opacity = 100;
	}
}












