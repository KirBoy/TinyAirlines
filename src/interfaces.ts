import { Dispatch, SetStateAction } from "react";

export interface FlightProps {
    id: number;
    fromCity: string;
    fromTime: string;
    fromDate: string
    toCity: string;
    toTime: string;
    toDate: string;
    transfers: number;
    price: number;
    currency: string;

}

export interface AppState {
    currency: string;
    transfers: number[];
}

export interface IFilters {
    currency: string;
    transfers: number[];
   setFilters: Dispatch<SetStateAction<AppState>>;
}

