$(function(){
	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');
	var orderTemplate = ""+
	"<li>" +
	"<p><strong>name</strong>: {{name}}</p>"+
	"<p><strong>drink</strong>: {{drink}}</p>"+
	"<button data-id='{{id}}' class = 'remove'>X</button>"+
	"</li>";
	function addOrder(order){
		$orders.append(Mustache.render(orderTemplate, order));
	}

	$.ajax({
		type:'GET',
		url:'http://rest.learncode.academy/api/learncode/friendss',
		success: function(orders){
			$.each(orders, function(i,order){
				addOrder(order);
			});
		},
		error: function(){
			alert('error loading orders');
		}
	});
	$('#add-order').on('click', function(){
		var order = {
		name: $name.val(),
		drink: $drink.val(),
	};
	$.ajax({:''
		type:'POST',
		url:'http://rest.learncode.academy/api/learncode/friends',
		data: order,
		success: function(newOrder){
			addOrder(newOrder);

		},
		error: function(){
			alert('error Saving order');
			}
		});
	});
	$orders.delegate('.remove','click',function(){
		var $li = $(this).closest('li');
		$.ajax({
			type:'DELETE',
			url:'http://rest.learncode.academy/api/learncode/friends'+ $(this).attr('data-id'),
			success: function() {
				$li.fadeOut(300, function(){
					$(this).remove();
				});
			}
		});
	});
});
