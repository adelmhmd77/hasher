HASHER 1.0 - Node.js CLI Hashing Tool
=====================================

Description:
------------
Hasher 1.0 is a simple command-line hashing tool built with Node.js.
It allows you to hash any text input using multiple algorithms:
MD5, SHA1, SHA256, SHA512, BLAKE2, SHA3-256, and SHA3-512.

Requirements:
-------------
- Node.js installed (v12 or higher)
- npm (Node package manager)
- Linux or Kali system
- dos2unix (optional, if running on files with Windows line endings)

Installation & Setup:
---------------------
1. Clone the repository:
   git clone https://github.com/adelmhmd77/hasher.git

2. Navigate to the folder:
   cd hasher

3. Install dependencies:
   npm install
   - This installs 'prompt-sync' required for the CLI prompts.

4. If the file has Windows line endings, convert it to Unix line endings:
   dos2unix hasher.js

5. Make the script executable:
   chmod +x hasher.js

Usage:
------
1. Run the script:
   ./hasher.js

2. Follow the menu:
   - Choose a hash algorithm by number:
       1. MD5
       2. SHA1
       3. SHA256
       4. SHA512
       5. BLAKE2
       6. SHA3-256
       7. SHA3-512
       8. Break the hash (brute-force attack, not implemented)
       9. About
       0. Exit
   - Enter the text you want to hash.
   - The hashed output will be displayed in hexadecimal format.

Notes:
------
- The brute-force attack feature is not implemented.
- The tool uses Node.js' built-in crypto module.
- Ensure Node.js and npm are installed. If not:
    sudo apt update
    sudo apt install nodejs npm

Optional:
---------
- You can run it directly with Node if shebang fails:
    node hasher.js
- To make it globally accessible, move it to a PATH directory:
    sudo mv hasher.js /usr/local/bin/hasher
    Then run: hasher

Author:
-------
Adel Mohammed

Version:
--------
1.0
