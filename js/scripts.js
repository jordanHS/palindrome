$(document).ready(function(){
  $(".mainform").submit(function(event){
    var palindrome = $("#userInput").val().split("");
    var backwards = new Array(palindrome.length);
    for(var i = 0; i<palindrome.length;i++){
      backwards[i] = palindrome[palindrome.length - (i + 1)];
    }
    alert(palindrome.toString() === backwards.toString());
    event.preventDefault();
  });
});
