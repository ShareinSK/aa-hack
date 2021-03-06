const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());

const itr3 = {
    "ITR3": {
       "AssessmentYear": "2019",
       "AssessmentDate": "2020-05-04",
       "CreationInfo": {
          "SWVersionNo": "R5",
          "SWCreatedBy": "SK12345678",
          "XMLCreatedBy": "SK12345678",
          "XMLCreationDate": "2018-06-15",
          "IntermediaryCity": "CHENNAI",
          "Digest": "A2n72D0m5WomyXppYOBGqHRkZ9PDZi88p0L1XACBi9s="
       },
       "PersonalInfo": {
          "AssesseeName": {
             "FirstName": "KIRAN",
             "SurNameOrOrgName": "SELVAN"
          },
          "PAN": "ACMEN12345",
          "Address": {
             "ResidenceNo": "HNO 3-5-118/6/2,THIRD FLR",
             "RoadOrStreet": "THIRD FLR,KRISHNA NAGAR ,GANDHI NGR CLNY",
             "LocalityOrArea": "CHROMEPET",
             "CityOrTownOrDistrict": "CHENNAI",
             "StateCode": "33",
             "CountryCode": "91",
             "PinCode": "600058",
             "CountryCodeMobile": "91",
             "MobileNo": "9884518410",
             "EmailAddress": "krisat3003@gmail.com",
             "EmailAddressSec": "finance21consulting@gmail.com"
          },
          "DOB": "1981-07-11",
          "AadhaarCardNo": "50350882045"
       },
       "AuditInfo": {
          "AuditReportFurnishDate": "2018-06-04",
          "AuditorName": "CA SUNDAR K",
          "AuditorMemNo": "023835",
          "AudFrmName": "CA SUNDAR K",
          "AudFrmRegNo": "00012345",
          "AudFrmPAN": "SKBNC54321",
          "AuditDate": "2018-06-04"
       },
       "NatOfBus": {
          "NatureOfBusiness": {
             "Code": "04045",
             "TradeName1": "ACME Nutraceuticals"
          }
       },
       "SummaryFinancials": {
          "BalanceSheet": {
             "StockInTrade": "200000",
             "Recievables": "400000",
             "CashAndBankBalance": "100000",
             "Payables": "200000"
          },
          "ProfitAndLoss": {
             "GrossSales": "2000000",
             "Purchases": "1200000",
             "OtherDirectCosts": "0",
             "GrossProfit": "800000",
             "Expenses": null,
             "NetProfit": null
          }
       }
    }
 };

let billOfLading = {
    "isValid": true,
	"negotiable": false,
	"bittOfLadingNumber": "TestBoL1002CFS",
	"consignor": {
		"name": "Testconsignor1",
		"printedParty": "Test Consignor Printed Party1 STREET ADDRESS City,03039"
	},
	"consignee": {
		"name": "Testconsignee1",
		"registeredForVAT": false
	},
	"notifyParties": [{
		"name": "TestNotifyParty1",
		"registeredForVAT": false
	}],
	"otherParties": [{
		"name": "TestOtherPartyName1",
		"registeredForVAT": false
	}],
	"dec tarationoflnterest": false,
	"particulars": [{
		"grossWeight": {
			"unit": "KG",
			"oceanCarrierCode": "TSTC",
			"freightedAtAd": false
		}
	}]
};

app.post('/verify/billOfLading', (req, res) => {
    console.log(req.body);
    billOfLading.bittOfLadingNumber = req.body.billOfLadingNumber;
    billOfLading.oceanCarrierCode = req.body.oceanCarrierCode;
    billOfLading.consignor.printedParty = req.body.consignorPrintedParty;
    res.send(billOfLading);

})

app.get('/consent/fromDate/:fromDate/toDate/:toDate/pan/:pan', (req, res) => {
    res.send(itr3);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))