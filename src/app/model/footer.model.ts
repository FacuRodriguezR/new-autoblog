export interface Branch {
    name: string;
    address: string;
    phones: string[];
    schedule: string;
    isNew?: boolean;
    link: string
}

export interface CityGroup {
    city: string;
    branches: Branch[];
}