Todos.Router.map(function () {
    this.resource('todos', { path: '/' }, function () {

    });
})

Todos.TodosIndexRoute = Ember.Route.extend({
   model: function () {
       return Todos.Todo.find();
   }
});
