import { useState, useEffect, useContext } from "react";
import Post from "../components/Post";
import { DataContext } from "../contexts/DataProvider";
import PostForm from "../components/PostForm";
import { AuthContext } from "../contexts/AuthProvider";

//https://cdn109-fakebook.onrender.com/api/posts
//https://cdn109-fakebook.onrender.com/api/post/<id>
//https://cdn109-fakebook.onrender.com/api/user-posts/<username>

export default function Home() {
    const {posts} = useContext(DataContext)
    const {user} = useContext(AuthContext)

    return (
        <div>
            <h1>Home</h1>
            {
                (user.loggedIn) ?
                <PostForm />
                :
                <></>
            }
            {posts.map((post) => <Post post={post} key={post.id}/>)}
        </div>
    )
}