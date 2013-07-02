Todos.TodosController = Ember.ArrayController.extend({
    createTodo: function() {
        var title = this.get('newTitle');
        if (!title.trim()) { return; }

        var todo = Todos.Todo.createRecord({
            title: title,
            isCompleted: false
        });

        todo.save();

        this.set('newTitle', '');
    }
});
