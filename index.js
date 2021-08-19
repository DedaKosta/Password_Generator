//Importovanje funkcija iz foldera sa funkcionalnostima
const createPassword = require('./Functions/createPassword')
const savePassword = require('./Functions/savePassword')



//Chalk se koristi za lepse prikazivanje poruka
const chalk = require('chalk')

//Clipboardy sluzi da se nesto iskopira na clipboard
const clipboardy = require('clipboardy')

//Commander program - Koristi se za lakse prosledjivanje argumenata prilikom poziva ovog fajla
const program = require('commander')
program.version('1.0.0').description('Password Generator')

//Generisanje komandi i opcija
//<length> sluzi da programu stavi do znanja da se preko navedene opcije prenosi vrednost
//.options - Prvi parametar je nayiv opcije, skraceni i puni naziv sa neobaveznim delom za prosledjivanje vrednosti
//.options - Drugi parametar je opis kreirane opcije
//.options - Treci parametar, koji nije obavezan, predstavlja default vrednost opcije ukoliko je korisnik ne navede
program
    .option('-l, --length <length>', 'length of generated password', '10') //Duzina kreirane sifre
    .option('-s, --save', 'Save the password into a file generated_password.txt') //Snimanje sifre u fajl
    .option('-nn, --no-numbers', 'Remove numbers from generated password') //Generisanje sifre bez brojeva
    .option('-ns, --no-symbols', 'Remove special symbols from generated password') //Generisanje sifre bez specijalnih znakova
    .parse()

//Stampanje svih prosledjenih opcija
//console.log(program.opts())

const {length, save, numbers, symbols} = program.opts()

//Funkcija za generisanje sifre
const generated_password = createPassword(length, numbers, symbols)

//Upis sifre u fajl

if(save)
    savePassword(generated_password)

//kopiranje generisane sifre u clipboard
clipboardy.writeSync(generated_password)

//Stampanje generisane sifre na izlaz
console.log(chalk.red('Generated password: ') + chalk.bold(generated_password))
console.log(chalk.green('Password has been copied to clipboard!'))
