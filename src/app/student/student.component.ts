import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentServiceService, Student } from '../student-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  students:string[];

 student='';
 numeric:number=0;
 mean:number=0;
 sum : number=0;
 sd:number=0;
 value:String;
 data:String[];
 id:String;
 name:String;
studentDetails:Student;
 scheduleForm: FormGroup;
 stdArray:Array<String>=[];
 showSimpleAcknowledgement:boolean = false;
 showWinnerAcknowledgement:boolean = false;
 




 showSuccess = true;

  constructor(private http:HttpClient,private myService:StudentServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.scheduleForm = this.fb.group({
      sid: ['', Validators.required],
      sname:['',Validators.required],
      raffle:[],
      saddress:['',Validators.required],
      szip:['',Validators.required],
      scity:['',Validators.required],
      sstate:['',Validators.required],
      semail:['',Validators.required],
      stel:['',Validators.required],
      sdate:['',Validators.required],
      surl:['',Validators.required],
      sgradmonth:[],
      sgradyear:[],
 radioBtn:[],
 likeliness:[],
 comments:[]
    });

    console.log("get students"+this.myService.getStudents());

    this.myService.getStudents().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response)
  {
      this.students=response;
      console.log("student ids retrieving "+this.students);
  }
  

  submit():void{

  this.showSuccess = false;
  this.value = this.scheduleForm.get("raffle").value;
  this.data = this.value.split(",")
  for(let i=0;i<this.data.length;i++){
    this.numeric= this.numeric + (+this.data[i]);
    
  }

  this.mean = this.numeric/(this.data.length)
  console.log("mean is "+this.mean);


  for(let i=0;i<this.data.length;i++){
    this.numeric = +this.data[i] - this.mean;
    this.numeric = this.numeric * this.numeric;
    this.sum = this.sum + this.numeric;
  }

  this.sd = Math.sqrt(this.sum/(this.data.length))
  console.log("standard deviation "+this.sd);

  
if(this.mean<90){
  this.showSuccess = false;
  this.showSimpleAcknowledgement = true;
}
else{
  this.showSuccess = false;
  this.showWinnerAcknowledgement = true;
}

 console.log("radio"+this.scheduleForm.get("radioBtn").value);
 console.log("likeliness"+this.scheduleForm.get("likeliness").value)

   this.studentDetails = {
     stdid : this.scheduleForm.get("sid").value,
     stdname : this.scheduleForm.get("sname").value,
    stdadd:this.scheduleForm.get("saddress").value,
    stdcity:this.scheduleForm.get("scity").value,
    stdstate:this.scheduleForm.get("sstate").value,
    stdzip:this.scheduleForm.get("szip").value,
    stdtel:this.scheduleForm.get("stel").value,
    stdemail:this.scheduleForm.get("semail").value,
    stddate:this.scheduleForm.get("sdate").value,
    stdurl:this.scheduleForm.get("surl").value,
    stdmonth:this.scheduleForm.get("sgradmonth").value,
    stdyear:this.scheduleForm.get("sgradyear").value,
    stdradio:this.scheduleForm.get("radioBtn").value,
    stdlike:this.scheduleForm.get("likeliness").value,
    stddata:this.scheduleForm.get("raffle").value
   }
  console.log(this.studentDetails);
  this.myService.setStudent(this.studentDetails);
  this.myService.setStudent(this.studentDetails).subscribe(
  response => alert("student added successfully")
  );
    }



  onSubmit(): void {
  };


}
