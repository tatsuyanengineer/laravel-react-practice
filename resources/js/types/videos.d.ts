export interface VideoObject {
    id: string
    title: string
    description: string
    url: string
    thumbnail: string
    user_id: number
    created_at: Date
    updated_at: Date
}

export interface VideoProps {
    video: VideoObject;
}

export interface VideoProps {
    videos: VideoObject[];
}

export interface StatusesBase {
    statuses: string[];
}

export interface UpdateProps extends VideoProps, StatusesBase {}


export interface StatusProps extends StatusesBase {}
