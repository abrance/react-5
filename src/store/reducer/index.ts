/*
*   AnyAction 重要
*
*/


import {AnyAction} from "redux";

interface IState {
    app: string,
    log: {
        is_log: boolean,
        success: boolean,
        logging: boolean,
        user_info: object
    },
    dir: {
        realpath: object,
        path: object
    }
}

const initState: IState = {
    app: 'upload',
    log: {
        is_log: false,
        success: false,
        logging: false,
        user_info: {}
    },
    dir: {
        realpath: {},
        path: {}
    }
}

export function appReducer(state = initState, action: AnyAction) {
    switch (action.type) {
        case "app":
            return {
                ...state,
                app: action.current
            }
        case "log":
            console.log(action)
            return {
                ...state,
                log: action.log
            }
        case "dir":
            console.log(action)
            return {
                ...state,
                dir: action.dir
            }

        default:
            return state;
    }
}