var arr= new Array(7,2,8,1,3,4); 
		     var i,j=0;
			 document.write("before sorting"+ "<br/>");
			 for( i=0;i<6;i++)
			 {
			 document.write(arr[i] +"<br/>");
			 }
			 //for bubble sorting - n*n-1   1,2,3,4,5,6,7
			 for( i=0;i<6;i++)
			    {
				for( j=0;j<5;j++)
				  {
				  if(arr[j]>arr[j+1])
				    {
					temp=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
					}
				  }
				 }
			 document.write("after sorting" +"<br/>");
			
			for(i=0; i<6; i++)
			{
			document.write(arr[i] +"<br/>")
			}