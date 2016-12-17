var events = require('events');

/**
 * Brainfs module
 *
 * @description :: Operates the brain file system
 */

module.exports = {
    /**
    * load function
    *
    * @description :: initialize memories and makes it ready for the kernel to use
    */
    load: function() {
      module.exports.resetCache();
    },
    /**
    * resetCache function
    *
    * @description :: clean the memory cache. Should be called during the sleep cycle. May cause REM cycles due to data flushing.
    */
    resetCache: function() {
      
    },
    /**
    * flushCache function
    *
    * @description :: flush the memory cache. Proccesses and transfers cache to the main memory.
    */
    flushCache: function() {
      module.exports.events.emit('cacheflushed', module.exports.cache);
    },
    events: new events.EventEmitter(),
    cache: {}
};