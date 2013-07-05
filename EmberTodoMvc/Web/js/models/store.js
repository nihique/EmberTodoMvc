Todos.Store = DS.Store.extend({
//    adapter: 'DS.FixtureAdapter'
    adapter: 'Todos.LSAdapter'
});

Todos.LSAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});