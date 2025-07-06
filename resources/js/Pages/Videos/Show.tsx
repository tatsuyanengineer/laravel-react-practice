import React from 'react';
import { Link }from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';
import { Button } from '@headlessui/react';
export default function Show ({ video }) {

    const handleDelete = () => {
        if(window.confirm('削除しますか？')){
            Inertia.delete(`/videos/destroy/${video.id}`)
        }
    }
    return (
        <div>
            <div>
                <p>{video.title}</p>
                <p>{video.description}</p>
                <p>{video.url}</p>
                <p>{video.created_at}</p>
            </div>
            <p><Link href={`/videos/`}>一覧へ戻る</Link></p>
            <p><Link href={`/videos/edit/${video.id}`}>編集する</Link></p>
            <button onClick={handleDelete}>削除する</button>
        </div>

    )
}