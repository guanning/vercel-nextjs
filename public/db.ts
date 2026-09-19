import {JSONFilePreset} from "lowdb/node";

const defaultData:{Posts: {id: string, title: string, content: string}[]} =  {Posts: []}
const db = await JSONFilePreset("db.json", defaultData);

export default db;