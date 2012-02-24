/**
 * bind.js
 * bind dom events to handler
 */

function bindEvents(){
	$("#submitZendesk").bind("click",function(){
		var subject=$("#subject").val();
		var description=$("#des").val();
		var email=$("#email").val();

		zendesk.newRequest(subject,description,email);
	});

	$("#getRequests").bind("click",function(){
		var email=$("#emailCheck").val();
		zendesk.listUserRequests(email);
	});

	$("#submitMortgage").bind("click",function(){
		var years=$("#years").val();
		var interest=$("#interest").val();
		var loanAmount=$("#loanAmount").val();
		var tax=$("#tax").val();
		var insurance=$("#insurance").val();

		mortgage.getMortgage(years,interest,loanAmount,tax,insurance);
	});

	$("#submitStock").bind("click",function(){
		var companyName=$("#companyName").val();
		stock.getStockInfo(companyName);
	});

	$("#nav_stock").bind("click",function(){
		changePage("stock");
	});

	$("#nav_mortgage").bind("click",function(){
		changePage("mortgage");
	});

	$("#nav_support").bind("click",function(){
		changePage("zendesk");
	});
	changePage("stock");
}


$(document).ready(bindEvents);
