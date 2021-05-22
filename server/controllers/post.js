import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body

    const newPost = PostMessage(post)

    try {
        await newPost.save()

        res.status(200).json(newPost)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}