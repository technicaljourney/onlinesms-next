import * as types from "../types";
import axios from "axios";
import { ZIPCODE_CLIENT_KEY } from "../../utilities/constant";

export const validateZipCode = (zipCode) => dispatch => {
    dispatch({
        type: types.ZIP_CODE_VALIDATION_REQUEST,
        payload: null
    });
    axios.get('https://www.zipwise.com/webservices/zipinfo.php', {
        params: {
            key: ZIPCODE_CLIENT_KEY,
            zip: zipCode,
            format: "json"
        }
    })
        .then(res => {
            dispatch({
                type: types.ZIP_CODE_VALIDATION_SUCCESS,
                payload: res.data.results
            });
        })
        .catch(err => {
            dispatch({
                type: types.ZIP_CODE_VALIDATION_FAILURE,
                payload: null
            });
        })
}