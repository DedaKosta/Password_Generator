const fs = require('fs') //Rad sa fajl sistemom
const path = require('path') // Rad sa putanjama
const os = require('os') // Rad sa operativnim sistemom
const chalk = require('chalk')

const savePassword = (password) => {

    //Prvi parametar predstavlja spajanje trenutnog direktorijuma, putanje od trenutnog direktorijuma do direktorijuma gde
    //treba sacuvati fajl i naziva fajla
    //Drugi parametar mod u kom se fajl otvara za rad
    //Treci parametar su dozvole za rad sa fajlom
    //Cetvrti parametar je callback funkcija
    fs.open(path.join(__dirname, '../', 'generated_password.txt'), 'a', 666, (e, id) => {

        //U fajl se upisuje sifra, dodaje se novi red na kraju i poziva se callback funkcija
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            //fajl se zatvara i poziva se callback funkcija koja ispisuje poruku korisniku
            fs.close(id, () => {
                console.log(chalk.red('Password has been saved successfuly!'))
            })
        })
    })
}

module.exports = savePassword