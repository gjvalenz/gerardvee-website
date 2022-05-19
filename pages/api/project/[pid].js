import { ObjectId } from 'mongodb'
import jsHttpCookie from 'cookie'
import { connectToDatabase } from '../../../lib/mongodb'

export function filtered(id)
{
    if(!isNaN(id))
    {
        return Number(id);
    }
    return new ObjectId(id);
}

export function checkAuth(req)
{
    const cookies = req.headers.cookie;
    if(cookies != null)
    {
        const cookie = jsHttpCookie.parse(cookies)
        if(cookie.token)
        {
            if(cookie.token != 'DRRJDUOH4FURUF4HRDI3NDE2I3E')
            {
                res.status(200).json({
                    success: false,
                    message: 'User not authenticated'
                });
                return false;
            }
        }
    }
    return true;
}

export default async function handler(req, res) {
    const { pid } = req.query
    switch(req.method)
    {
        case 'GET':
           return getProject(req, res, pid);
        case 'POST':
           return updateProject(req, res, pid);
        case 'DELETE':
           return deleteProject(req, res, pid);
    }
}

async function getProject(req, res, pid)
{
    try {
        let { db } = await connectToDatabase();
        const project = await db.collection("projects").findOne({_id: filtered(pid)});
        res.status(200).json(project);
        return;
    } catch(error)
    {
        return res.status(200).json({
            message: new Error(error).message,
            success: false
        });
    }
}

async function updateProject(req, res, pid)
{
    if(!checkAuth(req)) return;   
    try {
        const project = JSON.parse(req.body)
        let { db } = await connectToDatabase();
        await db.collection("projects").updateOne({_id: filtered(pid)}, { $set: project });
        res.status(200).json({success: true, message: 'Update succeeded.'});
        return;
    } catch(error)
    {
        return res.status(200).json({
            message: new Error(error).message,
            success: false
        });
    }
}

async function deleteProject(req, res, pid)
{
    if(!checkAuth(req)) return;
    try {
        let { db } = await connectToDatabase();
        await db.collection("projects").deleteOne({_id: filtered(pid)});
        res.status(200).json({success: true, message: 'Deletion succeeded.'});
        return;
    } catch(error)
    {
        return res.status(200).json({
            message: new Error(error).message,
            success: false
        });
    }
}