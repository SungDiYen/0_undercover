
$(function(){
  $(".cancel-btn").click(function(){
    var id=$(this).val();
    if(id == 1){
        $("#value1").slideUp();
    }
    else if(id == 2){ 
      $("#value2").slideUp();
    }
    else if(id == 3){ 
      $("#value3").slideUp();
    }
  });
});
/*--Step1-End-*/

/*--Step2-Start-*/
$(function(){
  $(".order-info-right").hide();//隱藏選單
  $(".res").hide(); 
  $(".order-item-pic").hide();


  $(".show-item").click(function(){
    $(".order-item-pic").slideToggle($(".order-item-pic:visible").length>0),
    $(".show-item i").toggleClass("fa-sort-asc");
  })
  $(".show-right").click(function(){ //用class呼叫 class
    $(".order-info-right").slideToggle($(".order-info-right:visible").length>0);
  });
  $(".hide-right").click(function(){ //用class呼叫 class
    $(".order-info-right").slideUp();
  });

  $(".credit").click(function(){
    $(".res").slideUp(),
    $(".pay-channel-area").removeClass("pay-act"),
    $(".pca-1").toggleClass("pay-act");
  });
  $(".atm").click(function(){
    $(".res").slideUp(),
    $(".pay-channel-area").removeClass("pay-act"),
    $(".pca-5").toggleClass("pay-act");
  });

  $(".chk3").click(function(){
    $("#res3").slideToggle($("#res3:visible").length>0),
    $(".pay-channel-area").removeClass("pay-act"),
    $(".pca-2").toggleClass("pay-act");
    var id=$(this).val(); //取得radio中的值
    if(id == 3){ //當取回的來值為3時, 就顯示欄位區塊
      $("#res6").slideUp(),
      $("#res12").slideUp();    
    }
  });
  $(".chk6").click(function(){
    $("#res6").slideToggle($("#res6:visible").length>0),
    $(".pay-channel-area").removeClass("pay-act"),
    $(".pca-3").toggleClass("pay-act");
    var id=$(this).val();
    if(id == 6){ 
      $("#res3").slideUp(),
      $("#res12").slideUp();    
    }
  });
  $(".chk12").click(function(){
    $("#res12").slideToggle($("#res12:visible").length>0),
    $(".pay-channel-area").removeClass("pay-act"),
    $(".pca-4").toggleClass("pay-act");
    var id=$(this).val();
    if(id == 12){ 
      $("#res3").slideUp(),
      $("#res6").slideUp();   
    }
  }); 

  $(".res button").click(function(){
    $(this).toggleClass("bank-unact"); 
    var id=$(this).val();
    if(id == 1){ 
      $(".bank-a").removeClass("bank-unact"),
      $(".bank-b").addClass("bank-unact"),
      $(".bank-c").addClass("bank-unact"),
      $(".bank-d").addClass("bank-unact"),
      $(".bank-e").addClass("bank-unact"); 
    }
    else if(id == 2){
      $(".bank-b").removeClass("bank-unact"),
      $(".bank-a").addClass("bank-unact"),
      $(".bank-c").addClass("bank-unact"),
      $(".bank-d").addClass("bank-unact"),
      $(".bank-e").addClass("bank-unact"); 
    }
    else if(id == 3){
      $(".bank-c").removeClass("bank-unact"),
      $(".bank-a").addClass("bank-unact"),
      $(".bank-b").addClass("bank-unact"),
      $(".bank-d").addClass("bank-unact"),
      $(".bank-e").addClass("bank-unact"); 
    }
    else if(id == 4){
      $(".bank-d").removeClass("bank-unact"),
      $(".bank-a").addClass("bank-unact"),
      $(".bank-b").addClass("bank-unact"),
      $(".bank-c").addClass("bank-unact"),
      $(".bank-e").addClass("bank-unact"); 
    }
    else if(id == 5){
      $(".bank-e").removeClass("bank-unact"),
      $(".bank-a").addClass("bank-unact"),
      $(".bank-b").addClass("bank-unact"),
      $(".bank-d").addClass("bank-unact"),
      $(".bank-d").addClass("bank-unact"); 
    }
  });
});
/*--Step2-End-*/
