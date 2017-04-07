export const tag = document.getElementById("container");

export const isServer = () => !(typeof window !== "undefined" && window.document);


export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCR1eRcu-FHxG6Yp1RarrBq1wKWWi8Ha2k",
    authDomain: "craigs-8e724.firebaseapp.com",
    databaseURL: "https://craigs-8e724.firebaseio.com",
    storageBucket: "craigs-8e724.appspot.com",
    messagingSenderId: "794041684762",
    enableRedirectHandling: false
};

export const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
