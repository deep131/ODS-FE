import request from "./fetch";

/**
 * @Register
 */
export const ODSRegisterAPI = (networkrequest) =>
    request.post("ODSRegisterAPI", networkrequest);

/**
 * @Login
 */
export const ODSLoginAPI = (networkrequest) =>
    request.post("ODSLoginAPI", networkrequest);

/**
* @ForgotPassword
*/
export const ODSforgotPassword = (networkrequest) =>
    request.post("ODSforgotPassword", networkrequest)

/**
* @ChangePassword
*/
export const ODSChangePassword = (networkrequest) =>
    request.post("ODSChangePassword", networkrequest)

/**
* @VerifyOtp
*/
export const ODSVerifyOTP = (networkrequest) =>
    request.post("ODSVerifyOTP", networkrequest);

/**
* @ResendOTP
*/
export const ODSResendOTP = (networkrequest) =>
    request.post("ODSResendOTP", networkrequest);

/**
* @ActiveCategories
*/
export const ODSgetActiveCategories = (networkrequest) =>
    request.get("ODSgetActiveCategories", networkrequest);

/**
* @Search
*/
export const ODSsearch = (networkrequest) =>
    request.post("ODSsearch", networkrequest)

/**
* @SubCategories
*/
export const ODSgetSubCategories = (networkrequest) =>
    request.getQuery("ODSgetSubCategories", networkrequest)

/**
* @Services
*/
export const ODSgetServices = (networkrequest) =>
    request.getQuery("ODSgetServices", networkrequest)

/**
* @SubServices
*/
export const ODSgetSubServices = (networkrequest) =>
    request.get("ODSgetSubServices", networkrequest)

export const ODSsubservices = (networkrequest) =>
    request.post("ODSsubservices", networkrequest)

export const ODSprofile = (networkrequest) =>
    request.get("ODSprofile", networkrequest)

export const ODSaddress = (networkrequest) =>
    request.get("ODSaddress", networkrequest)

export const ODSpostaddress = (networkrequest) =>
    request.post("ODSpostaddress", networkrequest)

export const ODSordercreate = (networkrequest) =>
    request.post("ODSordercreate", networkrequest) 

export const Odspayment = (networkrequest) =>
    request.post("Odspayment", networkrequest) 

export const Odspublishablekey = (networkrequest) =>
    request.get("Odspublishablekey", networkrequest) 

export const ODSbooking = (networkrequest) =>
    request.get("ODSbooking", networkrequest) 

export const ODSpostbooking = (networkrequest) =>
    request.post("ODSpostbooking", networkrequest) 