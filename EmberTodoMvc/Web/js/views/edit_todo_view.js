Todos.EditTodoView = Ember.TextField.extend({
    classNames: ['edit'],

    _acceptChangesTimeout: null,

    insertNewline: function () {
        this._acceptChanges();
    },

    focusOut: function () {
        this._acceptChanges();
    },

    didInsertElement: function () {
        this.$().focus();
    },

    _acceptChanges: function () {
        if (this._acceptChangesTimeout) return;
        this._acceptChangesTimeout = setTimeout(function () {
            this.get('controller').acceptChanges();
        }.bind(this), 100)
    }
});