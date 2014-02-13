
// Setando um objeto master
var App = window.App || {};

// Aqui vou vou "setar" alguns objetos, como meus Behaviors e Functions
App.Behaviors = {}
App.Functions = {}

// Aqui ele vai ler o documento/DOM (ou até mesmo inserções via ajax no DOM) e procurar por um "data-behavior"
// Inicializa uma nova instância do método, se caso for encontrado, passando o elemento que tem o atributo
App.LoadBehavior = function(context){
  if(context === undefined){
    context = $(document);
  }

  context.find("*[data-behavior]").each(function(){
    var that = $(this);
    var behaviors = that.attr('data-behavior');

    $.each(behaviors.split(" "), function(index,behaviorName){
      try {
        var BehaviorClass = App.Behaviors[behaviorName];
        var initializedBehavior = new BehaviorClass(that);
      }
      catch(e){
        // Aqui, se preferir, mostre uma mensagem de erro ;)
      }
    });
  });
};

// Configura e aciona nossa App quando o DOM for lido
App.onReady = function(){
  App.LoadBehavior();
};

$(document).ready(function(){
  App.onReady();
});