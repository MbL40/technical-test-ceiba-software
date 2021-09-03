import { UserData } from "./user-data";

export interface ListUser {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: UserData
}