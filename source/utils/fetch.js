import axios from 'axios';
import { app_local } from './API';
import { endpointWCM } from "./EndPointsReference";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const controller = new AbortController();
/**
 * General API url and check point
 * @param url
 * @since 1.0.0
 * @package mpwr
 * @return {{baseURL: string,appMode:string}}
 */
function generalUrl(url) {
  const apiUrl = app_local;  // UAT

  let baseURL = apiUrl + endpointWCM.routes[url];

  return {
    baseURL,
  };
}

/**
 *

 * @returns
 */
const querystringconvertor = (data) => {
  return Object.keys(data)
    .map(function (k) {
      return k + "=" + data[k];
    })
    .join("&");
};

const responseGeneratorWCM = (resp) => {
  var response = {
    ...resp,
    data:
      resp && resp.statusCode && resp.statusCode == 200
        ? JSON.parse(resp.data)
        : resp.data,
  };
  return response;
};

/**
 *
 * @param {*} url
 * @param {*} data
 * @param {*} method
 * @returns {POST METHOD API CALL}
 */
const post = async (url, data, method = "POST") => {
  return new Promise((resolve, reject) => {
    const { baseURL } = generalUrl(url);
    axios
      .post(baseURL, data, {
        cancelToken: source.token,
        signal: controller.signal
      })
      .then(function (response) {

        resolve(responseGeneratorWCM(response));
      })
      .catch(function (error) {
        if (error?.request.status === 400) {
          const Error = error?.request?._response;
          const ShowError = JSON.parse(Error).errors[0];
          resolve(responseGeneratorWCM(ShowError));
        } else {
          resolve(responseGeneratorWCM({ "msg": "Something wrong in connection!" }));
        }
        return;
      });
  });
};

/**
 * Get method
 * @param url
 * @param options
 * @return {Promise<R>}
 */
const get = (url, data) => {
  return new Promise((resolve, reject) => {
    const { baseURL } = generalUrl(url);
    axios
      .get(baseURL, {
        cancelToken: source.token,
        signal: controller.signal
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        return;
      });
  });
};

/**
 * Get method
 * @param url
 * @param options
 * @return {Promise<R>}
 */
const getQuery = (url, data) => {
  return new Promise((resolve, reject) => {
    const { baseURL } = generalUrl(url);
    axios
      .get(baseURL + "?" + querystringconvertor(data), {
        cancelToken: source.token,
        signal: controller.signal
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        return;
      });
  });
};

export default {
  post,
  get,
  getQuery
};
