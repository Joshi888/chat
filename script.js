var username = "";
function send_message(message)
{
	var prevState = $("#container").html();
		// console.log(prevState.length);

		if(prevState.length > 2)
		{
			prevState = prevState + "<br>" ;
		}
	$("#container").html(prevState +"<span class='current_message'>" + "<span class='bot'>Admin: </span>" + message + "</span>");
	$(".current_message").hide();
	$(".current_message").delay(500).fadeIn();
	$(".current_message").removeClass("current_message");
}

function get_username()
{
	send_message("Hello What Is your Name??");
	// $("#container").html("<span class='bot'>Chat: </span>Hello What is your name?");
}
function ai(message)
{
	if(username.length < 2)
	{
		username = message;
		send_message("Nice To Meet you " + username + ", How are You doing?");
	}
	else if(message.indexOf("how are you")>=0)
	{
		send_message("Thanks I am Good!");
	}
	else if((message.indexOf("hii")>=0))
	{
		send_message("Hii,How can I Help you??");
	}
	else if((message.indexOf("time")>=0))
	{
		var date = new Date();
		var h = date.getHours();
		var m = date.getMinutes();
		var ampm = h >= 12 ? 'pm' : 'am';
  		h = h % 12;
		h = h ? h : 12; // the hour '0' should be '12'
		m = m < 10 ? '0'+m : m;
		var strTime = h + ':' + m + ' ' + ampm;
		return send_message(strTime);
		// send_message("Current Time Is: " + h + ":" + m);
	}
	else if((message.indexOf("date")>=0))
	{
		var m_names = new Array("Jan", "Feb", "Mar", 
		"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
		"Oct", "Nov", "Dec");

		var d = new Date();
		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		send_message(curr_date + "-" + m_names[curr_month] + "-" + curr_year);
		/*document.write(curr_date + "-" + m_names[curr_month] 
		+ "-" + curr_year);*/
	}
	else if((message.indexOf("ok thanks")>=0) || (message.indexOf("cancel")>=0))
	{
		send_message("Sure,I will catch up soon!!");
	}
	else{
		send_message("Thank you bye !");	
	}
}

$(function()
{
	get_username();
	$("#textbox").keypress(function(event){
		if(event.which == 13)
		{
			if( $("#enter").prop("checked") )
			{
				// console.log("Enter pressed and keypress");
				$("#send").click()
				event.preventDefault();
			}
		}
	});
	$("#send").click(function(){
		var username =  "<span class='username'>You: </span>";
		var newMessage = $("#textbox").val();
		
		$("#textbox").val("");

		var prevState = $("#container").html();
		console.log(prevState.length);

		if(prevState.length > 2)
		{
			prevState = prevState + "<br>" ;
		}
		$("#container").html(prevState + username + newMessage);
		$("#container").scrollTop($("#container").prop("scrollHeight"));	

		ai(newMessage);
	});

});