import type { IFindDbInMemory } from "../interfaces/IFindShorten.js";
import type { IShorten } from "../interfaces/IShorten.js";


const db: Array<IShorten> = []

export class RepositoLink implements IFindDbInMemory {

    create(UrlOrigin: string, NewUrl: string, Clicks: number, atDate: Date): IShorten {
        const Link = { UrlOrigin, NewUrl, Clicks, atDate }
        db.push(Link)
        return Link
    }

    FindMemory(NewUrl: string): IShorten | undefined {
        const Link = db.find(e => e.NewUrl == NewUrl)
        return Link
    }

    delet():void | undefined{
        db.pop()
        return
    }
}

