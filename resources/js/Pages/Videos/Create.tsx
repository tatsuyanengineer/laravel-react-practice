import React from 'react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { StatusProps } from '@/types/videos';

export default function Create({statuses: StatusProps}: StatusProps) {

    const handleBack = () => {
        window.history.back();
    }

    const [formData , setFormData] = useState({
        title: '',
        description: '',
        url: '',
        thumbnail: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/videos/store',formData)
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
            <div>リンク
                <input
                    type="text"
                    id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                />
            </div>
            <div>サムネイル画像
                <input
                    type="text"
                    id="thumbnail"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                />
            </div>
                <button type="submit">保存</button>
            </form>
            <button onClick={handleBack}>一覧へ戻る</button>
        </div>

    )
}