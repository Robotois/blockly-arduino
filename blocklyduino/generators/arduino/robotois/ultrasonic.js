/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Motors library blocks.
 *     The Arduino Servo library docs: http://robotois.com/docs/arduino/ultrasonic
 *
 */
'use strict';

goog.provide('Blockly.Arduino.ultrasonic');

goog.require('Blockly.Arduino');


/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Ultrasonic.h>
 *               Ultrasonic usonic(13, 12);
 *               loop  { usonic.read(); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['ultrasonic_read'] = function (block) {
  var trigger = block.getFieldValue('TIGGER_PIN');
  var echo = block.getFieldValue('ECHO_PIN');
  var name = 'usonic_' + trigger + '_' + echo;
  Blockly.Arduino.definitions_['ultrasonic'] = '#include "Ultrasonic.h"';
  Blockly.Arduino.definitions_[name] = 'Ultrasonic ' + name + '(' + trigger + ', ' + echo + ');';

  var code = name + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};