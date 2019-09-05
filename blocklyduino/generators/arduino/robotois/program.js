/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for program (function) blocks.
 *
 */
'use strict';

goog.provide('Blockly.Arduino.program');

goog.require('Blockly.Arduino');

/**
 * Code generator to add code into the setup() and loop() functions.
 * Its use is not mandatory, but necessary to add manual code to setup().
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['arduino_program'] = function(block) {
  // Edited version of Blockly.Generator.prototype.statementToCode
  function statementToCodeNoTab(block, name) {
    var targetBlock = block.getInputTargetBlock(name);
    var code = Blockly.Arduino.blockToCode(targetBlock);
    if (!goog.isString(code)) {
      throw 'Expecting code from statement block "' + targetBlock.type + '".';
    }
    return code;
  }

  var setupBranch = Blockly.Arduino.statementToCode(block, 'SETUP_FUNC');
  //var setupCode = Blockly.Arduino.scrub_(block, setupBranch); No comment block
  if (setupBranch) {
    Blockly.Arduino.setups_['userSetupCode'] = setupBranch;
  }

  var loopBranch = statementToCodeNoTab(block, 'LOOP_FUNC');
  //var loopcode = Blockly.Arduino.scrub_(block, loopBranch); No comment block
  return loopBranch;
};