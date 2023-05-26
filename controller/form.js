const form=require("../model/form");
exports.form=async(req,res)=>{
  const {  numOfVisa,
    nationality,
    surname,
    fName,
    gender,
    dob,
    martialStatus,
    countryBirth,

    countryPass,
    passportNum,
    passDateIssue,
    passExpiry,
    visaType,
    purposeOfVisit,
    intArvlDate,
    intDepDate,
    privVisit,
    DateLtVisit,
    DurationLtVisit,
    VisaNoLtVisit,
    province,
    district,
    street,

    fullName,
    idDocNo,
    dateOfIssue,
    dateOfExpiry,
    addressC,
    teliphone,
    emailC,
    dateLastV,
    email,
    mobN,
    address,
    city,
    state,
    countryOfRes,
    pincode,
    hosthotel,
    hostType,
    hostName,
    hostAdd,
    hostEmail,
    phone,
    haveVtLt3month,
    dateOfTravelCountry,
    durationOfOtherCtyVt,
    CountryOfLtOtCtyVt,
    willURYCOResident,
    ProvideRFNRTYCtry,
    HaveUBPDEOCtry,
    HaveUDeniedPDCtry,
    HaveUESystemLaw,
    IDeclare,
    IHaveRead,
  } = req.body;
  try{
   console.log("hiiii")
    const formData = new form({ numOfVisa,
        nationality,
        surname,
        fName,
        gender,
        dob,
        martialStatus,
        countryBirth,
    
        countryPass,
        passportNum,
        passDateIssue,
        passExpiry,
        visaType,
        purposeOfVisit,
        intArvlDate,
        intDepDate,
        privVisit,
        DateLtVisit,
        DurationLtVisit,
        VisaNoLtVisit,
        province,
        district,
        street,
    
        fullName,
        idDocNo,
        dateOfIssue,
        dateOfExpiry,
        addressC,
        teliphone,
        emailC,
        dateLastV,
        email,
        mobN,
        address,
        city,
        state,
        countryOfRes,
        pincode,
        hosthotel,
        hostType,
        hostName,
        hostAdd,
        hostEmail,
        phone,
        haveVtLt3month,
        dateOfTravelCountry,
        durationOfOtherCtyVt,
        CountryOfLtOtCtyVt,
        willURYCOResident,
        ProvideRFNRTYCtry,
        HaveUBPDEOCtry,
        HaveUDeniedPDCtry,
        HaveUESystemLaw,
        IDeclare,
        IHaveRead }
        );
    const data= await formData.save();
    if(data){
      console.log("success")
      res.status(201).json({ message: "form submited successfully " });
    }else{
        res.status(204).json({ message: "something error" });
    }
  }catch(err){
    console.log(err)
  }
 
}

//GET Form Data**************
exports.getForm=async(req,res)=>{
    
    try{
     
        const data=await form.find();
        res.status(200).json(
           
            data
          );
    }catch(err){
        console.log("form error")
    }
}