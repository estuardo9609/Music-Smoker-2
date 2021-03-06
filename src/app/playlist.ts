
/*export class Playlist {
    name: string;
    description: string;
    genre: string;
    rate: number;
}*/

export interface Playlist{
    _id: number;
    name: string;
    description: string;
    genre: string;
    rate: number;
    author: string;
    hide: boolean;
}

/*export const Playlists : Playlist[] = [
    {   name: 'Radio-Music', 
        description: 'List of our favorites from the radio 2018' ,
        genre: 'Pop', rate: 4.5, hide: false },
    {   name: '90s Rock Anthems', 
        description: 'These songs rocked the 90s' ,
        genre: 'Rock', rate: 5, hide: false },
    {   name: 'Covers', 
        description: 'Popular songs covers by different artists.' ,
        genre: 'Other', rate: 3.8 , hide: false} 
];*/
