import type { IShorten } from "./IShorten.js";

export interface IFindDbInMemory {
    FindMemory(NewUrl: string): IShorten | undefined
    create(UrlOrigin: string,
        NewUrl: string,
        Clicks: number,
        atDate: Date): IShorten,
    delet(): void | undefined
    
}