import { Image } from "./image";

export interface Room {
    id: number;
    name: string;
    code: string;
    capacity: string;
    description: string;
    price: number;
    apartId: number;
    images: Image[];
}
