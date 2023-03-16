import { useState, useContext } from "react"
import { DataContext } from "../contexts/DataProvider"

export default function PostForm() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const {addPost} = useContext(DataContext)

    async function handleSubmit(e){
        e.preventDefault()
        const newPost = await addPost(title, body)
        setTitle('')
        setBody('')
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
            <input type="text" name="title" id="title" onChange={(e) => {setTitle(e.target.value)}} value={title}/>
            </div>
            <div>
            <textarea name="body" id="body" cols="30" rows="10" onChange={(e) => {setBody(e.target.value)}} value={body}></textarea>
            </div>
            <button>Add Post</button>
        </form>
    )
}