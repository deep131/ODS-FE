export const endpointWCM = {
    "routes": {
        "ODSRegisterAPI": "auth/register",
        "ODSLoginAPI": "auth/login",
        "ODSVerifyOTP": "auth/verifyotp",
        "ODSResendOTP": "auth/resendotp",
        "ODSgetActiveCategories": "category/list",
        "ODSgetSubCategories": "subcategory/list",
        "ODSgetServices": "service/list",
        "ODSgetSubServices": "subservice/list",
        "ODSforgotPassword": "auth/forgotpassword",
        "ODSChangePassword": "auth/changepassword",
        "ODSsearch": "service/find",
        "ODSsubservices": "vendorsubservice/getservices",
        "ODSprofile":"profile/detail",
        "ODSaddress":"profile/address/getAll",
        "ODSpostaddress":"profile/address/add",
        "ODSordercreate":"order/create",
        "Odspayment":"order/create-payint",
        "Odspublishablekey":'payment/getPK',
        "ODSbooking":'order/history',
        "ODSpostbooking":'order/orderdetails'
    }
}