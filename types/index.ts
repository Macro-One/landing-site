export interface ChatMessage {
    id?: string;
    role: 'user' | 'assistant' | 'system' | 'model';
    text: string;
    content?: string;
    timestamp?: Date;
    createdAt?: Date;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    image: string;
    link?: string;
}
