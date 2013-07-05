Todos.TodosController = Ember.ArrayController.extend({
    createTodo: function () {
        var title = this.get('newTitle');
        if (!title.trim()) return;
        var todo = Todos.Todo.createRecord({
            title: title,
            isCompleted: false
        });
        todo.save();
        this.set('newTitle', '');
    },

    remaining: function () {
        return this.filterProperty('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function () {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items';
    }.property('remaining'),

    completed: function () {
        return this.filterProperty('isCompleted', true).get('length');
    }.property('@each.isCompleted'),

    hasCompleted: function () {
        return this.get('completed') > 0;
    }.property('completed'),

    clearCompleted: function () {
        var completed = this.filterProperty('isCompleted', true);
        completed.invoke('deleteRecord');
        this.get('store').save();
    },

    areAllDone: function (key, value) {
        if (value === undefined) {
            return this.get('remaining') === 0;
        }
        else {
            this.setEach('isCompleted', value);
            this.get('store').save();
            return value;
        }
    }.property('remaining')
});
