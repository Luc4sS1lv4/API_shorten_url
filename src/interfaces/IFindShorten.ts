import type { IShorten } from "./IShorten.js";

export interface IFindDbInMemory{
    FindMemory(newUrl: string): IShorten | undefined
    create(UrlOriginal: string, NewUrl: string, Clciks: number): IShorten
}