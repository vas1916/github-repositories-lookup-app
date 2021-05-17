export interface User{
    user:string
}
export interface ListLink{
    href:string,
    target:string,
    align?:string
}
export interface RepositoryListProps{
    repositories: Repository[],
}
export interface Repository{
    id:string,
    full_name:string,
    name:string,
    description:string,
    stargazers_count:string,
    language:string                                      
}
export interface ScrollType{
    children:JSX.Element,
    window?: Function 
}
