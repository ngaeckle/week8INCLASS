import { useFetcher, useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import Post from "../components/Post"
import { DataContext } from "../contexts/DataProvider"

export default function PostSingle() {
    const {id, uid} = useParams()
    const [post, setPost] = useState({})
    const [Error, setError] = useState(false)
    const {getPost} = useContext(DataContext)

    useEffect(() => {
        async function handleLoad(){
            try {
                const data = await getPost(uid, id)
                setPost(data)
            } catch(err){
                setError(true)
            }
        }
        handleLoad()
    }, [])

    return (
        <div>
            {
                (!Error) ?
                <div>
                <h1>Post Single: {id}</h1>
                <Post post={post} hideLink={true}/>
                </div>
                : 
                <h1>Error</h1>
            }
        </div>
    )
}