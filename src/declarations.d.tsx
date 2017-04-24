declare const NODE_ENV, module, require: any;


interface Action<T> {
    type: string;
    payload: T;
    error?: boolean;
    meta?: any;
}

interface add {
    title: string;
    author?: string;
    tags?: string[];
    price?: number;
    description: string;
}
