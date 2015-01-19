/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-10-08 23:32:18
 * @version $Id$
 */
$(function(){
  // 用 each 遍歷頁籤
  $(".nav-tab li").each(function(i){
    var _i = i;
    // 綁定 click 事件到頁籤上，若要改為滑鼠移入切換頁籤的話，將 click 改為 mouseenter
    $(this).click(function(){
      // 移除其他頁籤的 class，並將 class 新增至所選頁籤
      $(this).parent().children().removeClass("enable").eq(_i).addClass("enable");
      // 隱藏其他頁籤的內容，並顯示所選頁籤的內容
      $("#nav-tab-content").children("div").hide().eq(_i).show();
    });
  });
});

$(function(){
  // 用 each 遍歷頁籤
  $(".tabs li").each(function(i){
    var _i = i;
    // 綁定 click 事件到頁籤上，若要改為滑鼠移入切換頁籤的話，將 click 改為 mouseenter
    $(this).click(function(){
      // 移除其他頁籤的 class，並將 class 新增至所選頁籤
      $(this).parent().children().removeClass("enable").eq(_i).addClass("enable");
      // 隱藏其他頁籤的內容，並顯示所選頁籤的內容
      $(".reg-info").children("section").hide().eq(_i).show();
    });
  });
});

$(function(){
  // 用 each 遍歷頁籤
  $(".tabs li").each(function(i){
    var _i = i;// 綁定 click 事件到頁籤上，若要改為滑鼠移入切換頁籤的話，將 click 改為 mouseenter
    $(this).click(function(){
      // 移除其他頁籤的 class，並將 class 新增至所選頁籤
      $(this).parent().children().removeClass("enable").eq(_i).addClass("enable");
      // 隱藏其他頁籤的內容，並顯示所選頁籤的內容
      $(".bread-menu-list").children("dd").hide().eq(_i).show();
    });
  });
});


$('#tabs div').hide();
$('#center-content div:first').show();
$('#tabs ul li:first').addClass('active');
 
$('#tabs ul li a').click(function(){
$('#tabs ul li').removeClass('active');
$(this).parent().addClass('active');
var currentTab = $(this).attr('href');
$('#center-content div').hide();
$(currentTab).show();
return false;
});
