import React from 'react';
import {Link} from "@inertiajs/react";

export default function Videos ({ videos }) {
    return (
        <div>
            {videos.map((video, index) => (
                <div key={index}>
                    {video.title} - <Link href={`/videos/${video.id}`}>詳細へ</Link>
                </div>
            ))}
        <Link href={`/videos/create`}>作成</Link>
        </div>
    )
}
