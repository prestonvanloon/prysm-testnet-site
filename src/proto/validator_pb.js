/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest', null, global);
goog.exportSymbol('proto.ethereum.beacon.rpc.v1.ValidatorStatus', null, global);
goog.exportSymbol('proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse', null, global);

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
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.displayName = 'proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64()
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
 * @return {!proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest}
 */
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest;
  return proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest}
 */
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
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
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {string}
 */
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.ethereum.beacon.rpc.v1.ValidatorIndexRequest.prototype.setPublicKey = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



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
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.displayName = 'proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eth1DepositBlockNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    depositInclusionSlot: jspb.Message.getFieldWithDefault(msg, 3, 0),
    activationEpoch: jspb.Message.getFieldWithDefault(msg, 4, 0),
    positionInActivationQueue: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse}
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse;
  return proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse}
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ethereum.beacon.rpc.v1.ValidatorStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEth1DepositBlockNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDepositInclusionSlot(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setActivationEpoch(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPositionInActivationQueue(value);
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
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEth1DepositBlockNumber();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDepositInclusionSlot();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getActivationEpoch();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPositionInActivationQueue();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional ValidatorStatus status = 1;
 * @return {!proto.ethereum.beacon.rpc.v1.ValidatorStatus}
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.getStatus = function() {
  return /** @type {!proto.ethereum.beacon.rpc.v1.ValidatorStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.ethereum.beacon.rpc.v1.ValidatorStatus} value */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint64 eth1_deposit_block_number = 2;
 * @return {number}
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.getEth1DepositBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.setEth1DepositBlockNumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 deposit_inclusion_slot = 3;
 * @return {number}
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.getDepositInclusionSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.setDepositInclusionSlot = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 activation_epoch = 4;
 * @return {number}
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.getActivationEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.setActivationEpoch = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 position_in_activation_queue = 5;
 * @return {number}
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.getPositionInActivationQueue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.ethereum.beacon.rpc.v1.ValidatorStatusResponse.prototype.setPositionInActivationQueue = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.ethereum.beacon.rpc.v1.ValidatorStatus = {
  UNKNOWN_STATUS: 0,
  PENDING_ACTIVE: 1,
  ACTIVE: 2,
  INITIATED_EXIT: 3,
  WITHDRAWABLE: 4,
  EXITED: 5,
  EXITED_SLASHED: 6
};

goog.object.extend(exports, proto.ethereum.beacon.rpc.v1);
