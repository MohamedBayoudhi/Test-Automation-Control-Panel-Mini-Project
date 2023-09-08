interface Inventorystatus {
    label: string;
    vaule: string;
}

export interface Project {
    
    id?: string;
    name?: string;
    latestTestDate?: string;
    failedTestCases?: number;
    successTestCases?: number;

}