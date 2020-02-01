$(() => {

    $('.navbar-toggler').on('click', e =>{

        let sidebar = $('.sidebar');
        let icon = $('.navbar > button > i');
        let shadow = document.querySelector('.screen-shadow');

        if(sidebar.hasClass('sidebar-open')){

            sidebar.removeClass('sidebar-open');
            sidebar.addClass('sidebar-close');
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');
            shadow.style.opacity= "0";
            shadow.style.display = "none";

        }
        else{

            sidebar.removeClass('sidebar-close');
            sidebar.addClass('sidebar-open');
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
            shadow.style.opacity= "1";
            shadow.style.display = "block";

        };

    });

    $('.title-item').on('mouseenter', (e) => {

        let item = $(e.currentTarget).children('.item-menu')[0];
        let img = $(e.currentTarget).children('img')[0];


            img.style.transition = "ease-in-out 0.2s all";
            item.style.transition = "ease-in-out 0.2s all";
            item.style.display = "block";
            item.style.opacity = "1";
            img.style.filter = "brightness(30%)";

        

    });
    $('.title-item').on('mouseleave', (e) => {

        let item = $(e.currentTarget).children('.item-menu')[0];
        let img = $(e.currentTarget).children('img')[0];

            item.style.display = "none";
            item.style.opacity = "0";
            img.style.filter = "brightness(100%)";           

    });

});