

$.fn.clickup=function()
{
	$(this).click(function(){
		$(this).parent().slideUp().siblings().slideDown('fast');
		$(this).siblings('li').css('right', '-100%');
	});
}
$.fn.clickdown=function()
{
	$(this).click(function()
	{
		$(this).siblings('.list-se').slideToggle('fast').siblings().slideToggle('fast');
		$(this).parent().siblings().children('.list-se').slideUp('fast').siblings().slideDown('fast');
		var li = $(this).siblings('.list-se').children('li');
		for(var i=0;i<li.length;i++){
			li.eq(i).animate({right:'0'},i*25);
		}
		$(this).parent().siblings().children('.list-se').children('li').css('right', '-100%');
	})
}


$.fn.ad=function()
{
	var t = $(this);
	for(var i = 0 ; i<t.length ; i++)
	{
		var count = t.eq(i).children().children().length;
		if (count>1) 
		{
			t.eq(i).children('p[class=title]').append('<span>+</span>');
			t.eq(i).children('.list-se').children('p[class=title]').append('<span>-</span>');
		}
	}
}

$.fn.liclickdown = function(){
	var li = $(this).siblings('.list-se').children('li');
	for( var i=0;i<li.length;i++ ){
		li.eq(i).click(function(){
			addTab($(this),'index2.html');
		})
	}
	$('#tabs ').on('click', 'a.tab',function() {
                // Get the tab name
                var contentname = $(this).attr("id") + "i";
//				alert(contentname);
                // hide all other tabs
                $("#content iframe").hide();
                $("#tabs li").removeClass("current");

                // show current tab
               // $("#" + contentname).show();
                $(this).parent().addClass("current");
                 $('#'+contentname).show();
          
            });

            $('#tabs ').on('click','a.remove', function() {
                // Get the tab name
                var tabid = $(this).parent().find(".tab").attr("id");
                // remove tab and related content
                var contentname = tabid + "i";
                $("#" + contentname).remove();
                $(this).parent().remove();

                // if there is no current tab and if there are still tabs left, show the first one
                if ($("#tabs li.current").length == 0 && $("#tabs li").length > 0) {

                    // find the first tab    
                    var firsttab = $("#tabs li:first-child");
                    firsttab.addClass("current");

                    // get its link name and show related content
                    var firsttabid = $(firsttab).find("a.tab").attr("id");
                    $("#" + firsttabid + "i").show();
                }
            });
}



function addTab(link,val) {
            // If tab already exist in the list, return
            if ($("#" + $(link).text()).length != 0)
                return;
            // hide other tabs
            $("#tabs li").removeClass("current");
            $("#content iframe").hide();
            var id = link.text()+"i";
            // add new tab and related content
            $("#tabs").append("<li class='current'><a class='tab' id='" +
                $(link).text() + "' href='#'>" + $(link).text() + 
                "</a><a href='#' class='remove'>x</a></li>");
                
           		$('#content').append("<iframe id='"+id+"' src='"+val+"' scrolling='no'></iframe>");

            // set the newly added tab as current
            $("#" + $(link).text() + "i").show();
 }

