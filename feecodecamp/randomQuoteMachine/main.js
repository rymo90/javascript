
$(function(){
	var quote;
	var auther;
	function getnewQuote(){
		$.ajax({
			url:'https://api.forismatic.com/api/1.0/',
			jsonp:'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format : 'jsonp'
			},
			success: function(data){
				quote = data.quoteText;
				auther = data.quoteAuthor;
				$(".quote").text(quote);
				if (auther) {
					$(".auther").text("said by "+ auther);
				}else {
					$(".auther").text("- unknown ");

				}
			}
		});

	}
	getnewQuote();
	$('#getQuote').on('click',function(event){

		getnewQuote()
	});
	$('#share').on('click',function(event){
		event.preventDefault();
		window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(quote +'--'+auther));
	})
});
