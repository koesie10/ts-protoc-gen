"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var repeated_primitive_message_pb_1 = require("../generated/examplecom/repeated_primitive_message_pb");
describe("repeated primitives", function () {
    it("should allow getting repeated primitive fields", function () {
        var msg = new repeated_primitive_message_pb_1.RepeatedPrimitiveMessage();
        chai_1.assert.deepEqual(msg.getMyDoubleList(), []);
        chai_1.assert.deepEqual(msg.getMyFloatList(), []);
        chai_1.assert.deepEqual(msg.getMyInt32List(), []);
        chai_1.assert.deepEqual(msg.getMyInt64List(), []);
        chai_1.assert.deepEqual(msg.getMyUint32List(), []);
        chai_1.assert.deepEqual(msg.getMyUint64List(), []);
        chai_1.assert.deepEqual(msg.getMySint32List(), []);
        chai_1.assert.deepEqual(msg.getMySint64List(), []);
        chai_1.assert.deepEqual(msg.getMyFixed32List(), []);
        chai_1.assert.deepEqual(msg.getMyFixed64List(), []);
        chai_1.assert.deepEqual(msg.getMySfixed32List(), []);
        chai_1.assert.deepEqual(msg.getMySfixed64List(), []);
        chai_1.assert.deepEqual(msg.getMyBoolList(), []);
        chai_1.assert.deepEqual(msg.getMyStringList(), []);
        chai_1.assert.deepEqual(msg.getMyBytesList(), []);
    });
    it("should allow setting and getting repeated primitive fields", function () {
        var msg = new repeated_primitive_message_pb_1.RepeatedPrimitiveMessage();
        msg.setMyDoubleList([123, 456]);
        chai_1.assert.deepEqual(msg.getMyDoubleList(), [123, 456]);
        msg.setMyFloatList([123, 456]);
        chai_1.assert.deepEqual(msg.getMyFloatList(), [123, 456]);
        msg.setMyInt32List([123, 456]);
        chai_1.assert.deepEqual(msg.getMyInt32List(), [123, 456]);
        msg.setMyInt64List([123, 456]);
        chai_1.assert.deepEqual(msg.getMyInt64List(), [123, 456]);
        msg.setMyUint32List([123, 456]);
        chai_1.assert.deepEqual(msg.getMyUint32List(), [123, 456]);
        msg.setMyUint64List([123, 456]);
        chai_1.assert.deepEqual(msg.getMyUint64List(), [123, 456]);
        msg.setMySint32List([123, 456]);
        chai_1.assert.deepEqual(msg.getMySint32List(), [123, 456]);
        msg.setMySint64List([123, 456]);
        chai_1.assert.deepEqual(msg.getMySint64List(), [123, 456]);
        msg.setMyFixed32List([123, 456]);
        chai_1.assert.deepEqual(msg.getMyFixed32List(), [123, 456]);
        msg.setMyFixed64List([123, 456]);
        chai_1.assert.deepEqual(msg.getMyFixed64List(), [123, 456]);
        msg.setMySfixed32List([123, 456]);
        chai_1.assert.deepEqual(msg.getMySfixed32List(), [123, 456]);
        msg.setMySfixed64List([123, 456]);
        chai_1.assert.deepEqual(msg.getMySfixed64List(), [123, 456]);
        msg.setMyBoolList([true, false]);
        chai_1.assert.deepEqual(msg.getMyBoolList(), [true, false]);
        msg.setMyStringList(["one", "two"]);
        chai_1.assert.deepEqual(msg.getMyStringList(), ["one", "two"]);
        msg.setMyBytesList(["AAECAwQFBgcICQ=="]);
        chai_1.assert.deepEqual(msg.getMyBytesList(), ["AAECAwQFBgcICQ=="]);
    });
    it("should allow setting and getting byte values", function () {
        var asUint8ArrayOne = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        var asUint8ArrayTwo = new Uint8Array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
        var asStringOne = "AAECAwQFBgcICQ==";
        var asStringTwo = "CQgHBgUEAwIBAA==";
        var msg = new repeated_primitive_message_pb_1.RepeatedPrimitiveMessage();
        msg.setMyBytesList([asUint8ArrayOne, asUint8ArrayTwo]);
        chai_1.assert.deepEqual(msg.getMyBytesList_asU8(), [asUint8ArrayOne, asUint8ArrayTwo]);
        chai_1.assert.deepEqual(msg.getMyBytesList_asB64(), [asStringOne, asStringTwo]);
        var myBytesListA = msg.getMyBytesList();
        chai_1.assert.deepEqual(myBytesListA, [asUint8ArrayOne, asUint8ArrayTwo]);
        msg.setMyBytesList([asStringOne, asStringTwo]);
        chai_1.assert.deepEqual(msg.getMyBytesList_asB64(), [asStringOne, asStringTwo]);
        chai_1.assert.deepEqual(msg.getMyBytesList_asU8(), [asUint8ArrayOne, asUint8ArrayTwo]);
        var myBytesListB = msg.getMyBytesList();
        chai_1.assert.deepEqual(myBytesListB, [asStringOne, asStringTwo]);
    });
});
//# sourceMappingURL=repeatedPrimitives.js.map