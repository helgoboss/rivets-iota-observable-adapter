define(["rivets"], function(rivets) {
  rivets.configure({
    adapter: {
      subscribe: function(obj, keypath, callback) {
        obj.on(keypath, callback);
      },

      unsubscribe: function(obj, keypath, callback) {
        obj.off(keypath, callback);
      },

      read: function(obj, keypath) {
        return obj.get(keypath);
      },

      publish: function(obj, keypath, value) {
        obj.set(keypath, value);
      }
    }
  });
});