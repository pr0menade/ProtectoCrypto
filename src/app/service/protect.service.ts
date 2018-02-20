import { Injectable } from '@angular/core';
import * as Aes from 'aes-js';

@Injectable()
export class ProtectService {
  testValue;

  constructor() {
    var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

    var iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ];

    var text = 'This is some text that will be encrypted or something';
    var textBytes = Aes.utils.utf8.toBytes(text);

    var aesOfb = new Aes.ModeOfOperation.ofb(key, iv);
    var encryptedBytes = aesOfb.encrypt(textBytes);

    this.testValue = Aes.utils.hex.fromBytes(encryptedBytes);
  }

}