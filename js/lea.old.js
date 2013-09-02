var s = settings
var x = { img_load : 0 
        }

var build_grid = function() {
    $container = $(s.box_container)
    // fitRows, fitColumns, masonry, masonryHorizontal
    $container.isotope({ itemSelector : '.box'
                       ///, masonry : { columnWidth: 275 }
                       , resizable : false
                       , masonry: { columnWidth: $container.width() / 4 }
                       //, masonryHorizontal: {rowHeight: 160}
                       , onLayout: laid_out
                       })  

    $.each(boxes, function(i, b) {
        var $box = $(" \
                <div class='box' data-name='" + b.name + "' id='" + b.id + "'> \
                    <img class='thumb' src='" + s.img_dir + "/" + b.id + "_thumb.png' />\
                </div> \
        ")
        $box.hide()
            .appendTo($container)
        b.el = $box
        var im = $box.find(".thumb")

        $("body").append(get_modal_box(b))
    })
}

// var position_thumb = function ($container) {
//     $container.each(function (i, b) {
//         var im = $(b).find('.thumb')
//         var box = im.parents().find('.box')
//         var ih, iw
//         ih = im.outerHeight()
//         iw = im.outerWidth()

//         var box_height = box.outerHeight()
//         var box_width = box.outerWidth()

//         im.animate({ 'top' : (box_height - ih) / 2 + 'px' 
//                    , 'left': (box_width - iw) / 2 + 'px'
//                    }, 300)
//     })
// }

var get_modal_box = function(b) {
    $thumb = $("<img class='thumb' src='" + s.img_dir + "/" + b.id + "_thumb.png' />")
    $modal = $("<div></div>")

    $left = $("<div></div>")
        .toggleClass('left')
        .append($thumb)
        .append(get_connect_box(b))

    $right = $("<div></div>")
        .toggleClass('right')
        .append(get_info_box(b))
    $modal.css({"display" : "none"})
        //.append($thumb)
        .append($left)
        .append($right)
        //.append(get_info_box(b))
        //.append(get_connect_box(b))
        .toggleClass("modal")
        .attr("id", "modal-" + b.id)
    return $modal
}

var get_connect_box = function(b) {
    var email = b.connect.email !== ""
    var twitter = b.connect.twitter !== ""
    var fb = b.connect.fb !== ""
    var twitter_url = "", fb_url = "", email_link = "", url = b.connect.url

    $connect_box = $(" \
        <div class='connect'> \
            <h2>Connect</h2> \
            <div class='icons'></div> \
            <div class='links'></div> \
        </div> \
    ")

    if (twitter) {
        if (typeof b.connect.twitter == "object") {
            for (var t in b.connect.twitter) {
                $twitter_link = $("<a href='https://twitter.com/" + b.connect.twitter[t] + "' class='twitter-follow-button' data-show-count='true' data-dnt='false'>Follow @" + b.connect.twitter[t] + "</a>")
                $connect_box.find('.icons').append($twitter_link)
            }
        } else {
            $twitter_link = $("<a href='https://twitter.com/" + b.connect.twitter + "' class='twitter-follow-button' data-show-count='true' data-dnt='false'>Follow @" + b.connect.twitter + "</a>")
            $connect_box.find('.icons').append($twitter_link)
        }
        if($("#twitter-wjs").length == 0) {
            $('body').append('<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>');
        }
    }

    if (fb) {
        fb_url = "http://facebook.com/" + b.connect.fb
        $fb_link = $(" \
            <iframe src='//www.facebook.com/plugins/like.php?href=" + encodeURI(fb_url) + "&amp;send=false&amp;layout=button_count&amp;width=200&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=21&amp;appId=130773073764825' scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:80px; height:21px; display: inline;' allowTransparency='true'></iframe> \
        ")
        $connect_box.find('.icons').append($fb_link)
    }

    if (email) {
        $email_link = $(" \
            <div class='email'> \
                <strong>Email:</strong> \
                <br /> \
                <a href='mailto:" + b.connect.email + "'>" + b.connect.email + "</a> <br /> \
            </div> \
        ")
        $connect_box.find('.links').append($email_link)
    }

    p_url = pretty_url(url)
    $url_link = $(" \
        <div class='link'> \
            <strong>Website:</strong> \
            <br /> \
            <a target='_blank' href='" + url + "'>" + p_url + "</a> <br /> \
        </div> \
    ")
    $connect_box.find('.links').append($url_link)

    return $connect_box
}

var get_info_box = function (b) {
    $info_box = $(" \
        <div class='info'> \
            <h1 class='name'>" + b.name + "</h1>  \
            <div class='text'>" + b.content.text + "</div> \
        </div> \
    ")
    return $info_box
}

var pretty_url = function (url) {
    var reg = /^(http|https)\:\/\/([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?)\/?([a-zA-Z0-9\-\._\?\,\'\/\\+&amp;%\$#\=~])*$/
    var match = reg.exec(url)
    var url = match[2].replace("www.", "")
        .replace("wwws.", "")
    return url
}

var handle_filters = function () {
    $('.filters').buttonset()
    $('.filters input:radio').change(function() {
        var $this = $(this)
        if ($this.id == 'all') {
            $('.filters input:radio').each(function(i, $c){
                console.log($c)
                $c.attr('checked', 'checked')
            })
        } else {
            $('.filters input:radio').attr('checked', false)
            console.log($('.filters input:radio'))
            // $this.checked = true;
            $this.attr('checked', 'checked')
        }
    })
}

var load = function () {
    handle_filters()
    build_grid()

    $.each(boxes, function(i, b) {
        var $box = $(b.el)

        $box.click(function(e) {
            $modal = $('#modal-' + b.id)
            $modal.modal()
            position_thumb($modal)
            $modal.find('.right').jScrollPane()
        })
    })

    $('.container').imagesLoaded(function () {
        $.each(boxes, function(i, b) {
            $box = $(b.el)
            //$box.show()
            $container.isotope('insert', $box)
            $box.show()
            position_thumb($box)
        })
    })

    $(window).smartresize(function() {
        $('.container').isotope({ itemSelector : '.box'
                                , resizable : false
                                , masonry: { columnWidth: $('.container').width() / 4 }
                                })
    })
}

var laid_out = function($elems, instance) {
    position_thumb($('.box'))
}

window.onload = load