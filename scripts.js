$(document).ready(function(){
  $("form#vacationsurvey").submit(function(event){
    event.preventDefault();
    evalQuestion($("#weather").val());
    evalQuestion($("#food").val());
    evalQuestion($("#activity").val());
    evalQuestion($("#sport").val());
    evalQuestion($("#day").val());
    $("#result").text(returnResult());
  });
});

var mexicoCount=0;
var canadaCount=0;
var seattleCount=0;

var evalQuestion = function (res) {
  if (result="mexico") mexicoCount++;
  if (result="canada") canadaCount++;
  if (result="seattle") seattleCount++;
}

var returnResult = function () {
  if (mexicoCount>canadaCount && mexicoCount>seattleCount) {
    $("#mexico").show();
    $("#canada").hide();
    $("#seattle").show();
  } else if (canadaCount>mexicoCount && canadaCount>seattleCount) {
    $("#canada").show();
    $("#mexico").hide();
    $("#seattle").hide();
  } else if (seattleCount>mexicoCount && seattleCount>canadaCount) {
    $("#seattle").show();
    $("#mexico").hide();
    $("#canada") .hide();
  }
}
