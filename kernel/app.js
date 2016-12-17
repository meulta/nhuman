/**
 * Kernel module
 *
 * @description :: core of the brain
 */

module.exports = {
    /**
    * load function
    *
    * @description :: run brain kernel
    * @param {module} brainfs
    * @param {module} skills
    */
    run: function(brainfs, skills, devices, modules) {
      module.exports.brainfs = brainfs;
      module.exports.skills = skills;
      module.exports.devices = devices;
      module.exports.modules = modules;
      
      module.exports.boot();
    },
    boot: function() {
      // TODO
    },
    process: function() {
      return "Hello, I'm Doug";
    },
    sleep: function() {
      brainfs.resetCache();
    },
    activateModule: function(name) {
      // TODO
    }
};