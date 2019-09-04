/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the Ultrasonic library.
 *     The Arduino Ultrasonic functions can be found in
 *     http://robotois.com/docs/arduino/ultrasonic
 *
 */
'use strict';

goog.provide('Blockly.Blocks.ultrasonic');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.ultrasonic.HUE = '#8888FC';

Blockly.Blocks['ultrasonic_read'] = {
  /**
   * Block for writing an angle value into a ultrasonic pin.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://robotois.com/docs/arduino/ultrasonic');
    this.setColour(Blockly.Blocks.ultrasonic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTOIS_ULTRASONIC);
    this.appendDummyInput()
        .appendField("(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), 'TIGGER_PIN');
    this.appendDummyInput()
            .appendField(",");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), 'ECHO_PIN');
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ROBOTOIS_ULTRASONIC_TIP);
  },
   
  /** @return {string} The type of return value for the block, an decimal. */
   getBlockType: function() {
    return 'Number';
  },

  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'TIGGER_PIN', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'ECHO_PIN', 'digitalPins');
  }
};