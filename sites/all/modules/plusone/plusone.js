if(Drupal.jsEnabled)
{
	// Run the code when the DOM has been fully loaded
	$(document).ready(function(){
		// Attach the code to click plusone-click
		$('a.plusone-link').click(function(){
			var voteSaved = function(data){
				$('div.score').html(data.total_votes);
				$('div.vote').html(data.voted);
			};
			alert(this.href);
			$.ajax({
				type: 'POST',
				url: this.href,
				dataType: 'json',
				success: votedSaved,
				data: 'js=1'
			});
			return false;
		});
	});
}
