'use strict';

goog.provide('Blockly.Msg.es');

goog.require('Blockly.Msg');

Blockly.Msg.TITLE2 = " > editor de programación visual basado en web para arduino";

// toolbox categories name
Blockly.Msg.CAT_ARDUINO_BASE = "Entrada / Salida";
Blockly.Msg.CAT_SERVO = "Servo";
Blockly.Msg.CAT_GROVE = "Grove";
Blockly.Msg.CAT_GROVE_ANALOG = "Grove Analog";
Blockly.Msg.CAT_GROVE_LCD = "Grove LCD";
Blockly.Msg.CAT_GROVE_MOTOR = "Grove Motor";

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["ALTO", "HIGH"], ["BAJO", "LOW"]];

//Arduino base cateory blocks
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "Poner el LED integrado en estado ";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Apague o encienda el LED en la placa Arduino";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "Colocar el PIN Digital";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "en estado lógico";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "Escribir estado númerico 0 o 1 a una salida especifica";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "el estado lógico del PIN#";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "Leer el estado lógico 0 o 1 de un PIN digital";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "Escribir en el PIN Analógico";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "el valor de";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "Enviar un valor entre 0 y 255 a un PIN analógico";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "valor leido en el PIN Analógico";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "Devuelve un valor entre 0 y 1023";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "Esperar (en milisegundos)";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Especifique el tiempo de espera en milisegundos";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "angulo: ";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "angulo entre 0~180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "Emitir sonido en el PIN";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "con frecuencia(Hz) de";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "Emite sonido en el PIN especificado";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "Detener sonido en el PIN";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "Quita el sonido del PIN especificado";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "Enviar datos al puerto serial:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "Envía datos a través del puerto serie para la vigilancia por parte del monitor en ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";