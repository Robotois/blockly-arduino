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

goog.provide('Blockly.Arduino.lineSensor');

goog.require('Blockly.Arduino');


/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include "DigitalIO.h"
 *               DigitalIO lineSensor1(A5, INPUT);
 *               loop  { lineSensor1.read(); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['lineSensor_read'] = function(block) {
  var input = block.getFieldValue('INPUT_PIN');
  var name = 'lineSensor_' + input;
  Blockly.Arduino.definitions_['lineSensor'] =  '#include <DigitalIO.h>';
  Blockly.Arduino.definitions_[name] = 'DigitalIO ' + name +'(' + input + ', INPUT);';

  var code = name + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};