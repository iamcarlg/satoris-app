// This file contains the definition of the Profile interface
export interface Profile{
    name : {
        first: string,
        last: string
    },
    email: String;
    location: {
        city: string,
    }
    picture: {
        medium : string,
    };
}