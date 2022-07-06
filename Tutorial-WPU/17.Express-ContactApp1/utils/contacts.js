const fs = require('fs');


//membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}


//membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
}


const loadContact = ()=>{
    const penampung  = fs.readFileSync('data/contacts.json', 'utf-8'); //ini masih berbentuk buffer
    const contacts = JSON.parse(penampung); 
    return contacts

}

const findByName = (namanya)=>{
    const contacts = loadContact();
    const contact = contacts.find((contact)=>contact.nama === namanya); 
    return contact

}


module.exports = {loadContact,findByName};