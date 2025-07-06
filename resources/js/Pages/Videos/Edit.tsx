import React from 'react';
import {Inertia} from '@inertiajs/inertia';
import { Link } from "@inertiajs/react";
import { useState , useEffect } from 'react';

export default function Edit ({video}) {

    const [formData , setFormData] = useState({
        title: '',
        description: '',
        url: '',
        thumbnail: '',
    })

    useEffect( () => {
        if(video) {
            setFormData({
                title: video.title,
                description: video.description,
                url: video.url,
                thumbnail: video.thumbnail
            })
        }
    },[video])

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/videos/update/${video.id}`,formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>タイトル：
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>詳細：
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">更新</button>
            </form>
            <p><Link href={`/videos/`}>一覧へ戻る</Link></p>
            <p><Link href={`/videos/details/${video.id}`}>詳細へ戻る</Link></p>
        </div>
    )
}