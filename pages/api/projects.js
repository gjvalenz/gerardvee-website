//import { connectToDatabase } from "../../lib/mongodb";

import db from '../../projects_db_instance'
import { collection, getDocs, addDoc } from 'firebase/firestore'

export default async function handler(req, res) {
    //let { db } = await connectToDatabase();
    let projects = json.projects
    let s = projects.length
    for(var i = 0; i < s; i++)
    {   
        await addDoc(collection(db, 'projects'), projects[i]);
    }
    const qs = await getDocs(collection(db, 'projects'));
    let dats = [];
    qs.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        dats.push(doc.data());
    })
    res.status(200).json(dats);
    /*onValue(ref, (snapshot) => {
        const val = snapshot.val();
        console.log(val);
        res.status(200).json(val);
    });*/
    //while(true){}
    //const data = await get(ref);
    //console.log(data);

    //const projects = await db.collection("projects").find().toArray();
    
    //res.status(200).json(data);
}