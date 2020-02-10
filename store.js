class Store {
  constructor(updaters) {
    this.store = {};
    this.subscribers = [];
    this.updaters = updaters;
  }
  /*
    TODO: 
    1. Create a function to update the stores
    2. Notify all subscribers if an action is dispatched to the store
       Example
       ================
       store = {
          test1: ...
          test2: ...
       }
       subscribers = {
          test1: [],
          test2: []
       }
       Any updates on any "slice" (e.g. test1, test2) of the store will notify only the subscribers of that slice.
       ================
    3. Think about how updaters works
  */
}
