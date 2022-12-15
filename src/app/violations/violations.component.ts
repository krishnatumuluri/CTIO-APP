import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/ApiService';

@Component({
  selector: 'app-violations',
  templateUrl: './violations.component.html',
  styleUrls: ['./violations.component.scss']
})
export class ViolationsComponent implements OnInit {
  paymentText = "Pay $0.00 for all outstanding Civil Penalties";
  disputeLinkText = "Or dispute one or more Civil Penalties";
  violations: any = [];
  totalAmount = 450;
  caluculationAmount:number = 0;
  showModal: boolean = false;
  constructor(private apiService: ApiService) { }
  postformData = {
    'NoticeNumber': "S910000705453",
    'LicensePlate': "JDV4001",
    'LP_State': "TX"
  };


  ngOnInit(): void {

    this.apiService.AuthRequest(this.postformData).subscribe((response) => {

      this.apiService.setAuth(response);
      let accountId = this.apiService.authData.AccountGuid;
    this.apiService.getViolationsByAccountGuid(accountId).subscribe( (response) => {
      this.violations = response.Violations;

      if(this.violations.Violations) {
         for (let index = 0; index < this.violations.Violations.length; index++) {
          this.violations.Violations[index].noticeDetailData = [];
          this.violations.Violations[index].noticeDetailToggle = false;
         }
      }

      console.log(response);
    });

    });

    
    
   // this.violations = data;
  }

  navigateBack() {

  }
  openModal(violation: any) {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }

  Show(violation: any) {
    violation.noticeDetailToggle = violation?.noticeDetailToggle ? false : true;
    violation.noticeDetailData = noticeDetails;
  }

  public expandDetails(violation:any) {
    if(violation.noticeDetailToggle) {
      violation.noticeDetailToggle = false;
    } else {
      violation.noticeDetailToggle = true;
      let accountgid = this.apiService.authData.AccountGuid;
      this.apiService.getTransactionsByAccountGuidAndTVNID(accountgid,violation.TVNID).subscribe( (details) => {
        violation.noticeDetailData = details;
      });

    }
}

onChange(Amount:number, isChecked: any){
  
  }
  PaymentSubmit(){
   
  }
  
}



let data: any[] = [
  {
    noticeNumber: "110 000 406 360",
    dateTime: "10/23/2023 12:07 AM",
    violationType: "Unauthorized vehicle on I-70 Mountain Ex press Lanes (trailer)",
    amount: "$150.00"
  },
  {
    noticeNumber: "450 890 482 893",
    dateTime: "10/23/2023 12:12 AM",
    violationType: "Exiting Express Lane outside authorized egress zone",
    amount: "$150.00",
    discount: "50% discount"
  },
  {
    noticeNumber: "865 299 788 332",
    dateTime: "11/25/2023 01:09 PM",
    violationType: "Using the I-70 Mountain Express Lanes o utside operating hours",
    amount: "$75.00",
    discount: "50% discount"
  },
  {
    noticeNumber: "948 411 060 492",
    dateTime: "11/29/2023 07:25 PM",
    violationType: "Entering Express Lane outside authorized ingress zone",
    amount: "$75.00",
    discount: "50% discount"
  }
]

let noticeDetails = [{
  Lane: "Lane",
  TransactionDate: "10/23/2023",
  TrxnNum: "1219828998129812",
  Status: 'Done',
  TollAmount: 124,
  ImageName_IR: "ImageName_IR",
  ROI_ImageName_IR: "ROI_ImageName_IR"
},
{
  Lane: "Lane 2",
  TransactionDate: "10/23/2023",
  TrxnNum: "1219828998129812",
  Status: 'Done',
  TollAmount: 124,
  ImageName_IR: "ImageName_IR",
  ROI_ImageName_IR: "ROI_ImageName_IR"
}
]