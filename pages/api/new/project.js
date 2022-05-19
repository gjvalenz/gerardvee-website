import { ObjectId } from 'mongodb';

import { connectToDatabase } from '../../../lib/mongodb'
import { checkAuth, filtered } from '../project/[pid]'

export default async function handler(req, res) {
    switch(req.method)
    {
        case 'POST':
           return createProject(req, res);
    }
}

async function createProject(req, res)
{
    if(!checkAuth(req)) return;
    try {
        const project = JSON.parse(req.body)
        let { db } = await connectToDatabase();
        const {insertedId} = await db.collection("projects").insertOne(project);
        res.status(200).json({success: true, project: {...project, _id: insertedId }});
        return;
    } catch(error)
    {
        return res.status(200).json({
            message: new Error(error).message,
            success: false
        });
    }
}