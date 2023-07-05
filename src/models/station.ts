export type station = {
    name: string;
    code: string;
    latitude: number;
    longitude: number;
}

export type stationAPI = {
    aliases: any[];
    crs: string;
    id: number;
    isGroupStation: boolean;
    isSilverSeekStation: boolean;
    latitude: number;
    longitude: number;
    name: string;
    nlc: string;
}