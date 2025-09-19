import type { IShorten } from "./IShorten.js";

export interface IFindDbInMemory {
    FindMemory(NewUrl: string): IShorten | undefined
    create(UrlOrigin: string,
        NewUrl: string,
        Clicks: number,
        atDate: number): IShorten,
    delet(): void | undefined
    
}