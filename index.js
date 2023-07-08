import yargs from "yargs";
import contactsServices from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contactsServices.getListContacts();
      return console.log(contactsList);
    case "get":
      const foundContact = await contactsServices.getContactById(id);
      return console.log(foundContact);
    case "add":
      const newContact = await contactsServices.addContact(name, email, phone);
      return console.log(newContact);
    case "remove":
      const removedContact = await contactsServices.removeContact(id);
      return console.log(removedContact);
    case "update":
      const updatedContact = await contactsServices.updateContactById(
        id,
        name,
        email,
        phone
      );
      return console.log(updatedContact);
    default:
      return console.log("Unknown action");
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
