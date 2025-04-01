//used to toggle sidebar;

const togglesidebar = () => {

    if($(".nav-content").is(":visible")){
        $(".nav-content").css("display", "none");   
    }
    else{
        $(".nav-content").css("display", "block");
        $(".nav-content").css("border", "2px solid white");
        $(".nav-content").css("padding", "20px");
    }
}