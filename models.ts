import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    // version sync
    // const json = jsonfile.readFileSync("./contacts.json");
    // this.data = json;

    // versión async
    return jsonfile.readFile("./contacts.json").then(json => this.data = json);
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // versión sync
    //jsonfile.writeFileSync("./contacts.json", this.data);
    
    // versión async
    return jsonfile.writeFile("./contacts.json", this.data).catch(err => console.log("Error escribiendo el archivo: ",err));
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };
