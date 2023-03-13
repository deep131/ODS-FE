export enum itemTypes {
    GET_ALL_DATA = 'GET_ALL_DATA',
    INCREMENT_ITEM = 'INCREMENT_ITEM',
    DECREMENT_ITEM = 'DECREMENT_ITEM',
    CONFIRM_ORDER = 'CONFIRM_ORDER'
}

export function getItemData() {
    return (dispatch: any) => {
        dispatch({
            type: itemTypes.GET_ALL_DATA
        })
    }
}

export function incremetItem(id: any,index:any) {
    return (dispatch: any) => {
        dispatch({
            type: itemTypes.INCREMENT_ITEM,
            payload:[id,index]
        })
    }
}

export function decrementItem(id: any,index:any) {
    return (dispatch: any) => {
        dispatch({
            type: itemTypes.DECREMENT_ITEM,
            payload:[id,index]
        })
    }
}

export function confirmOrder(data:any) {
    return (dispatch: any) => {
        dispatch({
            type: itemTypes.CONFIRM_ORDER,
            payload: data
        })
    }
}
