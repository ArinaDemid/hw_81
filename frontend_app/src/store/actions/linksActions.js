import axiosApi from "../../axiosApi";

export const CREATE_LINK_REQUEST = "CREATE_LINK_REQUEST";
export const CREATE_LINK_SUCCESS = "CREATE_LINK_SUCCESS";
export const CREATE_LINK_ERROR = "CREATE_LINK_ERROR";

export const createLinkReguest = () => ({ type: CREATE_LINK_REQUEST });
export const createLinkSuccess = data => ({ type: CREATE_LINK_SUCCESS, data });
export const createLinkError = error => ({ type: CREATE_LINK_ERROR, error });

export const onSubmitLink = link => {
  return async dispatch => {
    dispatch(createLinkReguest());
    try {
      const result = await axiosApi.post("/links", link);
      dispatch(createLinkSuccess(result.data));
    } catch (error) {
      dispatch(createLinkError(error));
    }
  };
};
