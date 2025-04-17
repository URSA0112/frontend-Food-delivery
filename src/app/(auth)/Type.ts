export type DecodedToken = {
    userObj: {
        id?: string,
        email: string,
        role: string,
        createdAt?: string,
        updatedAt?: string,
    }
    , iat?: number,
    exp?: number,
};