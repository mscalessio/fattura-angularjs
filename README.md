# fattura AngularJS

This is my personal invoicing system app build in AngularJS.
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.


## Before you start
This build make use of [JSON Server](https://github.com/typicode/json-server#json-server---) so before you run the app, open a new terminal window and run install JSON Server module

`$ npm install -g json-server`

then go in the `api` folder, open `db.json` and edit your company information and some options

`"company": {
  "id": 0,
  "name": "Your Co.",
  "address": "Address",
  "cap": "ZIP",
  "city": "City",
  "state": "State",
  "vat_id": "VAT_ID_NUMBER",
  "tax_code": "TAX_CODE_NUMBER"
},
"options": {
  "tax": 0,
  "inps": 0,
  "ritenuta": 0,
  "banca": {
    "nome": "Your Bank",
    "iban": "YOUR_IBAN"
  }
}`

than you can start the server with

`$ json-server --watch db.json`

## Usage
Run `grunt serve:dist` to start the server and run the app.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
