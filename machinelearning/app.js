/**
 * Machine Learning module
 *
 * @description :: Basically use the memories to create/modify skills
 */

module.exports = {
    /**
    * load function
    *
    * @description :: initialize machine learning module
    * @param {module} brainfs
    * @param {module} skills
    */
    load: function(brainfs, skills) {
      module.exports.brainfs = brainfs;
      module.exports.skills = skills;
      
      brainfs.events.on('cacheflushed', function(mem) {
        module.exports.createSkill(memory);
      });
    },
    createSkill: function(memory) {
      // TODO
    }
};