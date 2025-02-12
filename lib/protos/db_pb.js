'use strict';

// source: db.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.bc.DbValue', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bc.DbValue = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bc.DbValue, jspb.Message);
if (true || goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bc.DbValue.displayName = 'proto.bc.DbValue';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bc.DbValue.prototype.toObject = function (opt_includeInstance) {
    return proto.bc.DbValue.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bc.DbValue} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bc.DbValue.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      type: jspb.Message.getFieldWithDefault(msg, 1, ""),
      data: msg.getData_asB64(),
      version: jspb.Message.getFieldWithDefault(msg, 3, 0),
      isNative: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bc.DbValue}
 */
proto.bc.DbValue.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bc.DbValue();
  return proto.bc.DbValue.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bc.DbValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bc.DbValue}
 */
proto.bc.DbValue.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */reader.readString();
        msg.setType(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */reader.readBytes();
        msg.setData(value);
        break;
      case 3:
        var value = /** @type {number} */reader.readInt32();
        msg.setVersion(value);
        break;
      case 4:
        var value = /** @type {boolean} */reader.readBool();
        msg.setIsNative(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bc.DbValue.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.bc.DbValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bc.DbValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.DbValue.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(3, f);
  }
  f = message.getIsNative();
  if (f) {
    writer.writeBool(4, f);
  }
};

/**
 * optional string type = 1;
 * @return {string}
 */
proto.bc.DbValue.prototype.getType = function () {
  return (/** @type {string} */jspb.Message.getFieldWithDefault(this, 1, "")
  );
};

/**
 * @param {string} value
 * @return {!proto.bc.DbValue} returns this
 */
proto.bc.DbValue.prototype.setType = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bc.DbValue.prototype.getData = function () {
  return (/** @type {!(string|Uint8Array)} */jspb.Message.getFieldWithDefault(this, 2, "")
  );
};

/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.bc.DbValue.prototype.getData_asB64 = function () {
  return (/** @type {string} */jspb.Message.bytesAsB64(this.getData())
  );
};

/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.bc.DbValue.prototype.getData_asU8 = function () {
  return (/** @type {!Uint8Array} */jspb.Message.bytesAsU8(this.getData())
  );
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bc.DbValue} returns this
 */
proto.bc.DbValue.prototype.setData = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional int32 version = 3;
 * @return {number}
 */
proto.bc.DbValue.prototype.getVersion = function () {
  return (/** @type {number} */jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};

/**
 * @param {number} value
 * @return {!proto.bc.DbValue} returns this
 */
proto.bc.DbValue.prototype.setVersion = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional bool is_native = 4;
 * @return {boolean}
 */
proto.bc.DbValue.prototype.getIsNative = function () {
  return (/** @type {boolean} */jspb.Message.getBooleanFieldWithDefault(this, 4, false)
  );
};

/**
 * @param {boolean} value
 * @return {!proto.bc.DbValue} returns this
 */
proto.bc.DbValue.prototype.setIsNative = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

goog.object.extend(exports, proto.bc);