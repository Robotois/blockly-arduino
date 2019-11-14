/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Motors library blocks.
 *     The Arduino Servo library docs: http://robotois.com/docs/arduino/motor
 *
 */
'use strict';

goog.provide('Blockly.Arduino.motor');

goog.require('Blockly.Arduino');


/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Motors.h>
 *               setup { initializeMotors(); }
 *               loop  { turnRight();  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['motor_right'] = function (block) {
  var speed = block.getFieldValue('MOTOR_SPEED');
  Blockly.Arduino.definitions_['motors'] = '#include <Motors.h>';
  Blockly.Arduino.setups_['setup_motor_'] = 'initializeMotors();';

  var code = 'motorRight(' + speed + ');\n';
  return code;
};

/**

/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Motors.h>
 *               setup { initializeMotors(); }
 *               loop  { turnLeft();  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['motor_left'] = function (block) {
  var speed = block.getFieldValue('MOTOR_SPEED');
  Blockly.Arduino.definitions_['motors'] = '#include "Motors.h"';
  Blockly.Arduino.setups_['setup_motor_'] = 'initializeMotors();';

  var code = 'motorLeft(' + speed + ');\n';
  return code;
};

/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Motors.h>
 *               setup { initializeMotors(); }
 *               loop  { drive();  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['motor_drive'] = function (block) {
  var speedL = block.getFieldValue('MOTOR_SPEED_LEFT');
  var speedR = block.getFieldValue('MOTOR_SPEED_RIGHT');
  Blockly.Arduino.definitions_['motors'] = '#include <Motors.h>';
  Blockly.Arduino.setups_['setup_motor_'] = 'initializeMotors();';


  var code = 'drive(' + speedL + ', ' + speedR + ');\n';
  return code;
};
