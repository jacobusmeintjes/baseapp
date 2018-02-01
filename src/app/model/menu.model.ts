export interface MenuItem {
    id: number;
    name: string;
    path: string;
    subMenu: MenuItem[];
}
