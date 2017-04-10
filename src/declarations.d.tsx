declare const NODE_ENV, module, require: any;


interface Action<T> {
    type: string;
    payload: T;
    error?: boolean;
    meta?: any;
}

type add = {
    title: string;
    price: number;
    description: string;
}
