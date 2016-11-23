package api

import "github.com/gin-gonic/gin"

func RegisterControllers(r *gin.RouterGroup)  {
	registerCoporateApi(r)
	registerMerchantApi(r)
	registerItemApi(r)
	registerPaymentCardApi(r)
	registerBinGatewayApi(r)
	registerCampaignApi(r)
	registerPoolApi(r)
	registerElectronicCouponApi(r)
	registerItemCouponApi(r)
	registerPaperCouponApi(r)
	registerBarcodeCouponApi(r)
	registerCustomerApi(r)
	registerReportApi(r)
	registerUserGroupApi(r)
	registerUserApi(r)
	registerKeysApi(r)
	registerConfigApi(r)
	registerDashboardApi(r)
	registerUtilsApi(r)
}
