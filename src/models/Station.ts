export type Station = {
    name: string;
    code: string;
    latitude: number;
    longitude: number;
}

export type StationAPI = {
    id: number;
    name: string;
    aliases: string[];
    crs: string;
    nlc: string;
    latitude: number;
    longitude: number;
    isGroupStation: boolean;
    isSilverSeekStation: boolean;
}