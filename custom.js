$(document).ready(function(){
	$("#name").keyup(function(){
		  
		  var name = $("#name").val();
		  
	
		var values = {
         'name' : name 
            };
		$.ajax({
	        url: "process.php",
	        type: "post",
	        data: values ,
	        success: function (response) {
	           // you will get response from your php page (what you echo or print)                 
	          $('#output').html(response);
	        },
	        error: function(response) {
	           
	           $('#output').html(response);
	        }
	    });
	});
	//if user tryies to submit
	$("#submit").click(function(e){
		e.preventDefault();
		var name = $("#name").val();
		if(name==''){
			$('#output').html("<span class='alert alert-info'>Add User Name Then Search</span>");
		}
	});
});