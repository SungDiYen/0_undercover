/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-10-08 23:32:18
 * @version $Id$
 */
$(function(){
      $('.order-process').hide();
      $('#center-content>div').hide();
      $('#center-content>div:first').show();
      $('.tab-btns ul li:first').addClass('tab-active');

      $('.tab-btns li a').click(function(){
      $('.tab-btns li').removeClass('tab-active');
      $(this).parent().addClass('tab-active');
      var currentTab = $(this).attr('href');
      $('#center-content>div').hide();
      $(currentTab).show();
      return false;
      });

      $('.fa-angle-down').click(function(){
        $($(this).attr('data-target')).slideToggle();
        $(this).toggleClass('rotate-up');
      });

      $('.s-tab li').each(function(i){
          var _i = i;
          $('.qa-info').children('section').hide();
          $('.qa-info').children('section:first-of-type').show();
          $('.bread-menu-list').children('dd').hide();
          $('.bread-menu-list').children('dd:first-of-type').show();
          $(this).click(function(){
            $(this).parent().children().removeClass('tab-active').eq(_i).addClass('tab-active');
            $('.qa-info').children('section').hide().eq(_i).show();
            $('.bread-menu-list').children('dd').hide().eq(_i).show();
          });
      });
    });