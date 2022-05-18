import { connectToDatabase } from '../../../lib/mongodb'

export default async function handler(req, res) {
    const { pid } = req.query
    let { db } = await connectToDatabase();

    const project = await db.collection("projects").findOne({_id: Number(pid)});
    
    res.status(200).json(project);
}