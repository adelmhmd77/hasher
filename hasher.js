#!/usr/bin/env node
const crypto = require('crypto');
const prompt = require('prompt-sync')();

function hasher(str, alg, inputEncoding = 'utf8', outputEncoding = 'hex') {

    console.log(`

    ######################################################

    WELCOME TO HASHER 1.0

    ######################################################

    ------------------------------------------------------
    Start By Choosing A Hash Algorithm
    ------------------------------------------------------

    1. MD5           6. SHA3-256
    2. SHA1          7. SHA3-512
    3. SHA256        8. Break the hash (brute-force attack)
    4. SHA512        9. About
    5. BLAKE2        0. Exit
    `)

    let userAlg = prompt('Please Choose A Hash Algorithm: ');
    
    alg = userAlg;
   
   


    if (userAlg === '1') {
        alg = 'md5';
    } else if (userAlg === '2') {
        alg = 'sha1';
    } else if (userAlg === '3') {
        alg = 'sha256';
    } else if (userAlg === '4') {
        alg = 'sha512';
    } else if (userAlg === '5') {
        alg = 'blake2b512';
    } else if (userAlg === '6') {
        alg = 'sha3-256';
    } else if (userAlg === '7') {
        alg = 'sha3-512';
    } else if (userAlg === '8') {
        console.log('Brute-force attack is not implemented yet.');
        process.exit(0);
    } else if (userAlg === '9') {
        console.log('Hasher 1.0 is a simple hashing tool that allows you to hash your input using various algorithms. It supports MD5, SHA1, SHA256, SHA512, BLAKE2, SHA3-256, and SHA3-512. You can also attempt a brute-force attack on a hash, although this feature is not implemented yet.');
        process.exit(0);
    } else if (userAlg === '0') {
        process.exit(0);
    } else {
        console.log('Invalid choice. Please select a valid option.');
    }

    let userInput = prompt('Give Me Text You Want To Hash: ');

    str = userInput;

    let hashedContent = crypto.createHash(alg)
        .update(str, inputEncoding)
        .digest(outputEncoding);

    console.log(`Your Hashed Content: ${hashedContent}`);
}

hasher(); 