$(document).ready(function(){
	$.validator.addMethod("notEqual", function(value, element, param) {
	  return this.optional(element) || value != param;
	}, "Please choose a value!");

	$.validator.addMethod("phoneUS", function(phone_number, element) {
	    phone_number = phone_number.replace(/\s+/g, ""); 
		return this.optional(element) || phone_number.length > 9 &&
			phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
	}, "Please specify a valid phone number");
	
	$("#booknow-form").validate({
		errorPlacement: function (error,element) {
	        if(element.attr("name") === "fname")
	        {
	            error.insertAfter($("#fname"));
	        }
	        else if(element.attr("name") === "lname")
	        {
	            error.insertAfter($("#lname"));
	        }
	        else if(element.attr("name") === "phone")
	        {
	            error.insertAfter($("#phone"));
	        }
	        else if(element.attr("name") === "email")
	        {
	            error.insertAfter($("#email"));
	        }
	        else if(element.attr("name") === "dot")
	        {
	            error.insertAfter($("#dot"));
	        }
	        else if(element.attr("name") === "PreferredTime")
	        {
	            error.insertAfter($("#PreferredTime"));
	        }
	        else if(element.attr("name") === "treatment")
	        {
	            error.insertAfter($("#treatment"));
	        }
	        else if(element.attr("name") === "persons")
	        {
	            error.insertAfter($("#persons"));
	        }
	      
	
		},
		onkeyup: false,
		rules:{ 
			fname:{required:true,minlength:3}
			,lname:{required:true,minlength:3}
			,phone:{required:true,phoneUS:true}
			,email:{required:true,email:true}
			,dot:{required:true,notEqual:" "}
			,PreferredTime:{required:true,notEqual:"Time"}
			,treatment:{required:true,notEqual:"Please Select a Treatment"}
			,persons:{required:true, number: true}
		},
		 messages: {
             fname: 'first name must be at least 3 characters long',
             lname: 'last name must be at least 3 characters long',
             phone:	'please provide phone number',
             email: 'please provide email address ',
             dot:	'please provide date of treatment',
             persons: 'please provide no of persons',
             PreferredTime: 'please provide preffered time',
             treatment:'please provide treatment name'
         }
	});
	
	$("#booknow-form").submit(function (){
		var action = $(this).attr('action');
		if(	$("[name='fname']").is('.valid') && $("[name='lname']").is('.valid') && $("[name='phone']").is('.valid') && $("[name='email']").is('.valid')
		&& $("[name='dot']").is('.valid')
		&& $("[name='PreferredTime']").is('.valid') && $("[name='treatment']").is('.valid') && $("[name='persons']").is('.valid') ){
			
			$("#ajax_message").slideUp(750, function () {
			$('#ajax_message').hide();

			$.post(action, {
				fname	: $("[name='fname']").val(),
				lname	: $("[name='lname']").val(),
				gender	: $("[name='Gender']").val(),
				phone	: $("[name='phone']").val(),
				email	: $("[name='email']").val(),
				address : $("[name='address']").val(),
				dot		: $("[name='dot']").val(),
				time: $("[name='PreferredTime']").val(),
				treatment: $("[name='treatment']").val(),
				persons: $("[name='persons']").val(),
				requests: $("[name='requests']").val(),
			}, function (data) {
				document.getElementById('ajax_message').innerHTML = data;
				$('#ajax_message').slideDown('slow');
				if (data.match('success') != null) $('#frmcontact').slideUp('slow');
			});
		});	
			
		}
		return false;
	});

});
