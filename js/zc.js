let str;
$(".name").focus(function(){
    str = $(this).prop("placeholder");
    $(this).attr("placeholder","");
});

$(".name").blur(function(){
    $(this).attr("placeholder",str);
});