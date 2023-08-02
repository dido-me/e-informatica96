export interface Collection {
    href: string;
}

export interface Links {
    self: Collection[];
    collection: Collection[];
}

export interface TagsModel {
    id: number;
    name: string;
    slug: string;
    description: string;
    count: number;
    _links: Links;
}
