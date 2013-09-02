var s = settings;
var $container;
var current_category = '';

var populate_grid = function (boxes) {

    var $row = '';

    $.each(boxes, function (i, b) {
        // prefix each rox
        if (i % 2 == 0) {
            $row = $('<div class="row-fluid">');
        }

        $box = $('<div id="' + b.id + '" data-category="' + b.category + '" class="span6 box clearfix">\
        <div class="inside">\
         <div class="thumb text-center">\
           <img class="" src="' + s.img_dir + '/' + b.id + '_thumb.png" alt="' + b.name + '" />\
         </div>\
         <h4 class="name text-center">' + b.name + '</h4>\
         <div class="box-footer text-center">\
         <div class="desktop-footer visible-desktop">\
          <a class="learn-more btn btn-primary btn-block" rel="leanModal" href="#modal-' + b.id + '"><i class="icon-help"></i> Learn more</a>\
          <a class="outbound btn btn-default btn-block" href="' + b.connect.url + '" target="_blank"><i class="icon-link"></i> Visit their website</a>\
         </div>\
         <div class="mobile-footer hidden-desktop">\
          <a class="learn-more btn btn-primary"><i class="icon-help"></i> Learn more</a>\
          <a class="outbound btn btn-default"><i class="icon-link"></i> Visit their website</a>\
          <div class="mobile-info"><h4>Description</h4>\
          ' + b.content.text + '<br/><a href="" class="close-info">(Close)</a></div>\
         </div>\
        </div>\
        </div>\
        </div>');

        $row.append($box);
        
        if(i % 2 == 1 || i == boxes.length-1) {
            $container.append($row);
        }
    });
    $('a.learn-more.visible-desktop').leanModal({closeButton: ".close"});
    $('.thumb a').leanModal({closeButton: ".close"});
};

var setup_events = function () {
    // FILTERS
    $('#filters li').click(function (e) {
        var category = $(this).find('a').attr('data-category');
        if (current_category == category) {
            return;
        }
        current_category = category;
        $('#filters li.active').toggleClass('active');
        // $('#filters').filter('[data-category=' + current_category + ']').toggleClass('active');
        $($('#filters [data-category=' + current_category + ']').parents()[0]).toggleClass('active');

        var active = _.filter(boxes, function (b) {
            return b.category == current_category || current_category == 'all';
        });

        $('.box').fadeOut(function () {
            $(this).remove();
        })

        populate_grid(active);

    });

    // MODALS
    $('.desktop-footer a.learn-more').leanModal({closeButton: ".close"});

    // MOBILE REPLACEMENT FOR MODALS
    $('.mobile-footer .learn-more').click(function(){
        $(this).siblings().filter('.mobile-info').slideDown();
    });
    $('.mobile-footer .close-info').click(function (e) {
        e.preventDefault();
        $(this).parents().filter('.mobile-info').slideUp();
    });
};

var populate_modals = function () {
    $.each(boxes, function (i, b) {
        create_modal(b).appendTo('body');
    });
};

var create_modal = function (b) {
    var $modal= '<div id="modal-' + b.id + '" class="mo">\
    <div class="modal-header">\
     <button type="button" class="close">×</button>\
     <h3 id="modal-' + b.id + '-header">' + b.name + '</h3>\
    </div>\
    <div class="modal-body">\
     <h4>Description</h4>\
     <p>' + b.content.text + '</p>\
    </div>\
    <div class="modal-footer">\
    ' + get_connect_icons(b) + '\
    </div>\
    </div>';

    return $($modal);
};

var get_connect_icons = function(b){
    var icons = '';

    if (b.connect.fb) {
        icons += '<a href="http://facebook.com/' + b.connect.fb + '"><i class="icon-facebook"></i></a>'
    }
    if (b.connect.twitter) {
        icons += '<a href="http://twitter.com/' + b.connect.twitter + '"><i class="icon-twitter"></i></a>'
    }
    if (b.connect.email) {
        icons += '<a href="mailto:' + b.connect.email + '"><i class="icon-mail"></i></a>'
    }

    if (icons) {
        icons = '<strong>Connect: </strong><span class="icons">' + icons + '</span>';
    }

    return icons;
}

var loaded = function () {
    $container = $('#main');

    populate_grid(boxes);
    populate_modals();
    setup_events();

};

window.onload = loaded;