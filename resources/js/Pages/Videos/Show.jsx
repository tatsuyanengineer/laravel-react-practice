import React from 'react';
import {Link} from "@inertiajs/react";
export default function Videos ({ video_id }) {
    return (
        <div>
            <div>
                <p>{video_id.title}</p>
                <p>{video_id.description}</p>
                <p>{video_id.url}</p>
                <p>{video_id.created_at}</p>
            </div>
            <Link href={`/videos/`}>一覧へ戻る</Link>
        </div>

    )
}