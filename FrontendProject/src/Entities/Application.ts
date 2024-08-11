export type Application = {
    type: string
};

const Test = (type: string, app: Application) => {
    return {...app,
        type: type
    }
};

export const Application = { Test };