angular.module('CardsAgainstAssembly')
  .controller('cardsController', cardsController);

function cardsController($http, $scope){

   $http.get('http://localhost:5000/api/flashcards')
    .then(function(response, err) {
        if(err){
            console.log('error: ', err);
        }
    //success method:
    for(var i = 0; i < response.data.length; i++){
      $scope.cards.push(response.data[i]);

    }
  });

    $scope.hideMe = function(){
      console.log('hide me: ', this.card.answer);
    }
  // var self = this;
  $scope.cards = [
    {
      question: "What is Batman's guilty pleasure?",
      answer: "Robin",
      answerHidden: true
    },
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"}
  ]
}