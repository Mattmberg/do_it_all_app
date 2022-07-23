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

export interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
}

export interface ReviewCards {
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    stars: number;
    comment: string;
    timestamp: number;
}