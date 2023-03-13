export enum LoginTypes {
  TOKEN = 'TOKEN',
}

export function tokenStorage(data: any) {
  return (dispatch: any) => {
    dispatch({
      type: LoginTypes.TOKEN,
      payload: data,
    });
  };
}
