$(document).ready(function(){
    //class that add and remove
    function add(){
        $('.copied').addClass("fade_effect")
    }
    function remove(){
        $('.copied').remove("fade_effect")
    }
    //copy when clicked
    $("#btn").click(function(){
        $("#text_area").select();
        document.execCommand("copy")
        add()
        setTimeout(remove,1000);
    })
})