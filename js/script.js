$(function() {
	$("#start").html("Go!");
});

$("#menu").show();

$(function() {
	$("a").attr("href", "http://www.jquery.com");
});
$(function() {
	$("#demo").before("<i>Some title</i>");
	$("#demo").after("<i>Some title</i>");
});

var get = $("a").attr('href');
alert(get);

$("table").removeAttr("border");
$("table").removeAttr("class");
