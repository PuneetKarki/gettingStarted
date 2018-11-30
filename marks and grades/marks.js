alert("inside");
		var marks1=parseInt(prompt("enter marks1","marks1"));
		var marks2=parseInt(prompt("enter marks2","marks2"));
		var marks3=parseInt(prompt("enter marks3","marks3"));
		
		var total=(marks1 + marks2 + marks3);
		
		var percent=(total * 100 / 300);
		alert(percent);
		
		 
		   if(percent >= 80)
		      {
			  alert ("grade A");
			  }
		   else if(percent >= 60)
		      {
			  alert("grade B");
		      }
		   else if(percent >= 40)
		      {
			  alert("grade C");
			  }
			
			else
			{
			alert("grade D");
			}