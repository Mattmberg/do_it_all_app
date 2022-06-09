export type NavCard = {
    id: number;
    title: string;
    description: string;
    image: string;
    navTo: string;
}

export type Card = {
    id: number;
    title: string;
    description: string;
    image: string;
    color?: string | number;
}