
export interface IBranch {
    uuid: string,
    name: string,
}
export interface ISkill {
    uuid: string,
    name: string,
    branches: IBranch[]
}
export interface IProject {
    uuid: string,
    img: string,
    name: string,
    github: string,
    link: string
}

export interface IUser {
    name: string,
    position: string,
    experience: string,
    skills: ISkill[],
    services: string[],
    projects: IProject[],
    socials: {
        email: { name: string, link: string },
        whatsapp: { name: string, link: string },
        messenger: { name: string, link: string },
        facebook: { name: string, link: string },
    }
}