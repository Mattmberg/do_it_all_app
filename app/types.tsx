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
    timestamp: string;
}

export interface ItemCards {
    id: number;
    name: string;
    image?: string;
    description: string;
    department: string;
    subDepartment?: string;
    brand?: string;
    ageRange?: string;
    material?: string;
    yearOfRelease: string;
    price: number;
    rating: number;
    sale?: boolean;
}

export interface Questions {
    id: number;
    question: string;
    validationType: string;
    options?: string;
}

export interface QuestionsList {
    list: string[];
}

export interface BlogPost {
    userId?: number;
    id?: number;
    title: string;
    content: string;
}