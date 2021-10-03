export interface RespuestaMDB{
    page:number;
    results:Pelicula[];
    total_pages:number;
    total_results:number;
    }

export interface Pelicula {
    adult: boolean;
    backdrop_path: string;
    genre_ids:number[];
    id:number;
    orignal_lenguage:string;
    original_title:string;
    overview:string;
    popularity:number;
    poster_path:string;
    realse_date:string;
    title:string;
    video:boolean;
    voto_average:number;
    vote_count:number;
    }
   

