export interface CardProps {
    title: string;
    image: string;
    content: string;
    id: number;
}

export interface functionProps {
    onEvoke: () => void
}


export interface CursorProps {
    x: MouseEvent;
    y: MouseEvent;
    user?:string;
    styles?: string;
}

export interface ButtonProps {
    content?: string
}