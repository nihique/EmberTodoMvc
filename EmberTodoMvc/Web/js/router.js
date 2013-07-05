Todos.Router.map(function () {
    this.resource('todos', { path: '/' }, function () {
        this.route('active');
    });
})

Todos.TodosIndexRoute = Ember.Route.extend({
   model: function () {
       return Todos.Todo.find();
   }
});

Todos.TodosActiveRoute = Ember.Route.extend({
    model: function () {
        return Todos.Todo.filter(function (todo) {
           return todo.get('isCompleted') !== true;
        })
    },
    renderTemplate: function(controller) {
        this.render('todos/index', { controller: controller });
    }
});