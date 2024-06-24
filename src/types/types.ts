export interface Project {
    id: number,
    image: string,
    link: string,
    type: string
  }

export type PageChangeEvent = {
  onClick: string,
  text: string
}
  
  export type NewProject = Omit<Project, 'id'>