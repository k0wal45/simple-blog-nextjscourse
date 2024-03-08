import { MongoClient } from "mongodb"

async function handler(req, res) {

  if(req.method === 'POST') {
    const { email, name, message } = req.body


    if(
      !email || !email.includes('@') ||
      !name || !name.trim() === '' ||
      !message || !message.trim() === '' 
      ) {
        res.status(422).json({message: 'Invalid Input'})
        return
      }

      // store valid data

      const newMessage = {
        email,
        name,
        message
      }

      let client 

      try {
        client = await MongoClient.connect('mongo db connection string')
        
      } catch(error) {
        res.status(500).json({message: 'Could not connect to databse'})
        return
      }

      const db = client.db()

      try {

        const result = await db.collection('messages').insertOne(newMessage)
      } catch(error) {
        client.close()
        res.status(500).json({message: 'Storing message failed'})
        return
      }
      

      res
        .status(201)
        .json({message: 'Successfully stored message!', message: newMessage})
  }
}

export default handler
