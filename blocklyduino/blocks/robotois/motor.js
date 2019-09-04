/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the Servo library.
 *     The Arduino Servo functions can be found in
 *     http://robotois.com/docs/arduino/motor
 *
 * TODO: Add angle selector instead of block input.
 */
'use strict';

goog.provide('Blockly.Blocks.motor');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.motor.HUE = '#334E68';

Blockly.Blocks['motor_right'] = {
  init: function() {
    this.setHelpUrl('http://robotois.com/docs/arduino/motor');
    this.setColour(Blockly.Blocks.motor.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTOIS_MOTOR_RIGHT)
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(64, -100, 100), "MOTOR_SPEED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTOIS_MOTOR_RIGHT_TIP);
  }
};

Blockly.Blocks['motor_left'] = {
  init: function() {
    this.setHelpUrl('http://robotois.com');
    this.setColour(Blockly.Blocks.motor.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTOIS_MOTOR_LEFT)
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(64, -100, 100), "MOTOR_SPEED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTOIS_MOTOR_LEFT_TIP);
  }
};

Blockly.Blocks['motor_drive'] = {
  init: function() {
    this.setHelpUrl('http://robotois.com');
    this.setColour(Blockly.Blocks.motor.HUE);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ROBOTOIS_MOTOR_DRIVE)
        this.appendDummyInput()
        .appendField("(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(64, -100, 100), "MOTOR_SPEED_LEFT");
    this.appendDummyInput()
        .appendField(",");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(64, -100, 100), "MOTOR_SPEED_RIGHT");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTOIS_MOTOR_DRIVE_TIP);
  }
};
