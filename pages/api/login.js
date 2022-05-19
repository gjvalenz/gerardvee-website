import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
    switch(req.method)
    {
        case 'POST':
            return login(req, res);
        default:
            return;
    }
   
}

async function login(req, res)
{
    try
    {
        const {username, password} = JSON.parse(req.body)
        let { db } = await connectToDatabase()
        const user = await db.collection("users").findOne({username, password})
        if(user == null)
        {
            res.status(200).json({ message: 'Login failed', success: false, token: ''})
        }
        else
        {
            res.status(200).json({ message: 'Login succeeded', success: true, token: 'DRRJDUOH4FURUF4HRDI3NDE2I3E'})   
        }
    } catch (error)
    {
        return res.status(200).json({
            message: new Error(error).message,
            success: false,
            token: ''
        });
    }
}