jQuery&&function(a){var b=function(b){a(b).css("display","block").css("vertical-align","top")},c=function(b){var c,d,e=a(b).closest(".jtux-tabs").find(".jtux-tabs-left, .jtux-tabs-right");return e.length>0&&(c=a(e).first().css("height"),a(e).each(function(){d=a(this).css("height"),d>c&&(c=d)})),c};return{setup:function(){a(".jtux-tabs").each(function(){a(this).find(".jtux-frame").hide();var c=a(this).find(".jtux-frame").first();b(c);var d="*[href=#"+c.attr("id")+"]";a(d).addClass("active")}),a(".jtux-tabs *[href]").click(function(c){c.preventDefault(),a(this).closest(".jtux-tabs").find(".jtux-frame").hide(),a(this).closest(".jtux-tabs").parent().find(".jtux-tabs *[class*='jtux-tabs-'] .active").removeClass("active"),a(this).addClass("active");var d=a(this).attr("href");b(d)}),a(".jtux-tabs *[class*='jtux-tabs-'] *:not(*[title])").each(function(){var b=a(this).text();a(this).attr("title",b)}),a(".jtux-tabs .jtux-frame").each(function(){var b=a(this).closest(".jtux-tabs").find(".jtux-tabs-left, .jtux-tabs-right");if(b.length>0){var d=c(a(this));d=parseInt(d,10);var e=parseInt(a(this).css("height"),10);if(d>e){var f=a(this).find("td.header, thead, td.footer, tfoot");a(f).each(function(){d-=parseInt(a(this).innerHeight(),10)}),a(this).find("tbody td:not(.header, .footer)").css("height",d).css("vertical-align","top")}}}),a(".pocket-toggler").click(function(){a(this).closest(".jtux-pocket").toggleClass("pocket-collapsed")});var d=a(".jtux-menu");a(".js-toggle-nav").on("click",function(){a(this).parent().toggleClass("is-open")});var e=function(){var b=a(window).width(),c=a(".jtux-menu").find(".nav-wrap").width(),e=a(".jtux-brand").width()+100,f=b-e;c>f?d.addClass("overflow"):d.removeClass("overflow is-open")};e(),a(window).on("resize",function(){e()})}}}(jQuery).setup();