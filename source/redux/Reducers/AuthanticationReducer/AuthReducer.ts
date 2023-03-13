import { LoginTypes } from '../../Actions/AuthanticationAction/AuthAction';

const initialState: any =  {
    token:''
};

function authReducers(state = initialState, action: any) {
  switch (action.type) {
    case LoginTypes.TOKEN:
      return {...state.token,token : action.payload};
    default:
      return state;
  }
}

export default authReducers;
