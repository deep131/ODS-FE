import AsyncStorage from "@react-native-async-storage/async-storage";
import { itemTypes } from "../../Actions/CategoryTypeActions/CategoryTypeAction";

const initialState: any = {
    data: [],
};

const itemData: any = [
]

export default function itemReducer(state = initialState, action: any) {

    const countTotal = (items: any, index: any, id: any, type: any) => {
        let ab = items;
        items.filter((it: any, i: any) => {
            if (it.id == id)
                if (ab[index].qty >= 0) {
                    ab[index].total = ab[index].qty * ab[index].price;
                    if (type == "inc") {
                        if (ab[index].totaltime >= 0) {
                            ab[index].totaltime = ab[index].totaltime + ab[index].time;
                        }
                    }
                    else {
                        if (ab[index].totaltime > 0) {
                            ab[index].totaltime = ab[index].totaltime - ab[index].time;
                        }
                    }
                }
        });
        return ab;
    }

    switch (action.type) {
        case itemTypes.GET_ALL_DATA: {
            state.data.length = 0;
            let data = [...state.data, ...itemData];
            return { ...state, data: data }
        }
        case itemTypes.INCREMENT_ITEM: {
            let a = itemData;
            let type = "inc"
            itemData.filter((item: any, i: any) => {
                if (item.id == action.payload[0]) {
                    if (a[action.payload[1]].qty >= 0) {
                        a[action.payload[1]].qty = a[action.payload[1]].qty + 1;
                    }
                }
            });
            let data = [...a];
            let inc = countTotal(data, action.payload[1], action.payload[0], type);
            return { ...state, data: inc }
        }
        case itemTypes.DECREMENT_ITEM: {
            let b = itemData;
            let type = "dec";
            itemData.filter((item: any, i: any) => {
                if (item.id == action.payload[0]) {
                    if (b[action.payload[1]].qty > 0) {
                        b[action.payload[1]].qty = b[action.payload[1]].qty - 1;
                    }
                }
            });
            let data = [...b];
            let dec = countTotal(data, action.payload[1], action.payload[0], type);
            return { ...state, data: dec }
        }
        case itemTypes.CONFIRM_ORDER: {
            state.data.length = 0;
            AsyncStorage.getItem("OrderData").then((res:any)=>{
                let previousData = res;
                let newData:any = [];
                newData.push(action.payload);
                const mergedArray = previousData.concat(newData);
                setTimeout(()=>{
                    AsyncStorage.setItem("OrderData",JSON.stringify(mergedArray))
                },1000);

            })
        }

        default: {
            return state;
        }
    }
}
