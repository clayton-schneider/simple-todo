//Check of todos by clicking
$("ul").on('click', 'li', function() {
    $(this).toggleClass("completed");
})

//Check if xs are clicked to delete
$("ul").on('click', 'span', function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropogation();
})

//Add todos
$("input[type='text']").on('keypress', function(e) {
    if(e.which === 13) {
        todoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val('');
    }   
})

//Toggle the input box
$(".fa-plus").on('click', function() {
    $("input[type='text']").fadeToggle();
})