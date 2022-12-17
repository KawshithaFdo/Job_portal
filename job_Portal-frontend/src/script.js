const UserPasswordRegEx =/^[A-z0-9]{4,}$/;
const UserNameRegEx =/^[A]?[S]?[E]?[-][0-9]{3,}$/;
const JobIDRegEx =/^[J][-][0-9]{3,}$/;
const NicRegEx = /^[0-9v]{9,}$/;
const AddressRegEx = /^[A-z0-9 ]{3,}$/;
const SkillsRegEx = /^[A-z0-9 ,.]{3,}$/;
const ContactRegEx = /^[0-9]{10,}$/;
const GenderRegEx = /^(male)|(female)|(any)$/;
const EmailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const DateRegEx = /^[0-9]{1,2}(.)[0-9]{2}(-)[0-9]{1,2}(.)[0-9]{2}$/;
const SalaryRegEx = /^[0-9 -]{1,}[< >]?$/;
/*-------------------Validate Login--------------------------------------------*/

$('#txtloginUserid,#txtloginPassword').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});
$("#txtloginUserid").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkValid();
    }

});
$("#txtloginPassword").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkValid();
    }
});
$("#loginbtn").attr('disabled', true);
$("#loginempbtn").attr('disabled', true);
$("#loginadminbtn").attr('disabled', true);
function Valid() {
    var username = $("#txtloginUserid").val();
    $("#txtloginUserid").css('border', '2px solid green');
    if (UserNameRegEx.test(username)) {
        var userpassword = $("#txtloginPassword").val();
        var resp = UserPasswordRegEx.test(userpassword);
        if (resp) {
            $("#txtloginPassword").css('border', '2px solid green');
            return true;
        } else {
            $("#txtloginPassword").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtloginUserid").css('border', '2px solid red');
        return false;
    }
}
function checkValid() {
    var username = $("#txtloginUserid").val();
    if (UserNameRegEx.test(username)) {
        $("#txtloginPassword").focus();
        var userpassword = $("#txtloginPassword").val();
        if (UserPasswordRegEx.test(userpassword)) {
            $("#loginbtn").focus();
        } else {
            $("#txtloginPassword").focus();
        }
    } else {
        $("#txtloginUserid").focus();
    }
}
function setButton() {
    let b = Valid();
    if(b){
        var actor=$("#txtloginUserid").val().split("-")[0];
        if(actor=="S"){
            $("#loginbtn").attr('disabled', false);
            // $("#loginbtn").focus();
            $("#loginempbtn").attr('disabled', true);
            $("#loginadminbtn").attr('disabled', true);
        }else if(actor=="E"){
            $("#loginempbtn").attr('disabled', false);
            // $("#loginempbtn").focus();
            $("#loginbtn").attr('disabled', true);
            $("#loginadminbtn").attr('disabled', true);
        }else if(actor=="A"){
            $("#loginempbtn").attr('disabled', true);
            $("#loginbtn").attr('disabled', true);
            $("#loginadminbtn").attr('disabled', false);
            // $("#loginadminbtn").focus();
        }
    }
}
/*---------------Validate Change St password----------------------------------*/
$('#txtcurrentuserid,#txtcurrentpass,#txtnewpass,#txtconfirmpass').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#txtcurrentuserid").on('keyup', function (eventOb) {
    setButtonstpass();
    if (eventOb.key == "Enter") {
        checkValidstpass();
    }

});
$("#txtcurrentpass").on('keyup', function (eventOb) {
    setButtonstpass();
    if (eventOb.key == "Enter") {
        checkValidstpass();
    }
});
$("#txtnewpass").on('keyup', function (eventOb) {
    setButtonstpass();
    if (eventOb.key == "Enter") {
        checkValidstpass();
    }

});
$("#txtconfirmpass").on('keyup', function (eventOb) {
    setButtonstpass();
    if (eventOb.key == "Enter") {
        checkValidstpass();
    }
});

$("#btnupdatepass").attr('disabled', true);

function Validstpass() {
    var id = $("#txtcurrentuserid").val();
    $("#txtcurrentuserid").css('border', '2px solid green');
    if (UserNameRegEx.test(id)) {
        var password = $("#txtcurrentpass").val();
        if (UserPasswordRegEx.test(password)) {
            $("#txtcurrentpass").css('border', '2px solid green');
            var newpass = $("#txtnewpass").val();
            if (UserPasswordRegEx.test(newpass)) {
                $("#txtnewpass").css('border', '2px solid green');
                var confirm = $("#txtconfirmpass").val();
                if (UserPasswordRegEx.test(confirm)) {
                    $("#txtconfirmpass").css('border', '2px solid green');
                    return true;
                } else {
                    $("#txtconfirmpass").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#txtnewpass").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtcurrentpass").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtcurrentuserid").css('border', '2px solid red');
        return false;
    }
}
function checkValidstpass() {
    var id = $("#txtcurrentuserid").val();
    if (UserNameRegEx.test(id)) {
        $("#txtcurrentpass").focus();
        var userpassword = $("#txtcurrentpass").val();
        if (UserPasswordRegEx.test(userpassword)) {
            $("#txtnewpass").focus();
            var newpassword = $("#txtnewpass").val();
            if (UserPasswordRegEx.test(newpassword)) {
                $("#txtconfirmpass").focus();
                var password = $("#txtconfirmpass").val();
                if (UserPasswordRegEx.test(password)) {
                    $("#btnupdatepass").focus();
                } else {
                    $("#txtconfirmpass").focus();
                }
            } else {
                $("#txtnewpass").focus();
            }
        } else {
            $("#txtcurrentpass").focus();
        }
    } else {
        $("#txtcurrentuserid").focus();
    }
}
function setButtonstpass() {
    let b = Validstpass();
    if (b) {
        $("#btnupdatepass").attr('disabled', false);
    } else {
        $("#btnupdatepass").attr('disabled', true);
    }
}
/*---------------Validate Change Emp password----------------------------------*/
$('#txtcurrentid,#txtcurrentemppass,#txtnewemppass,#txtconfirmemppass').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#txtcurrentid").on('keyup', function (eventOb) {
    setButtonemppass();
    if (eventOb.key == "Enter") {
        checkValidemppass();
    }

});
$("#txtcurrentemppass").on('keyup', function (eventOb) {
    setButtonemppass();
    if (eventOb.key == "Enter") {
        checkValidemppass();
    }
});
$("#txtnewemppass").on('keyup', function (eventOb) {
    setButtonemppass();
    if (eventOb.key == "Enter") {
        checkValidemppass();
    }

});
$("#txtconfirmemppass").on('keyup', function (eventOb) {
    setButtonemppass();
    if (eventOb.key == "Enter") {
        checkValidemppass();
    }
});

$("#btnupdateemppass").attr('disabled', true);

function Validemppass() {
    var id = $("#txtcurrentid").val();
    $("#txtcurrentid").css('border', '2px solid green');
    if (UserNameRegEx.test(id)) {
        var password = $("#txtcurrentemppass").val();
        if (UserPasswordRegEx.test(password)) {
            $("#txtcurrentemppass").css('border', '2px solid green');
            var newpass = $("#txtnewemppass").val();
            if (UserPasswordRegEx.test(newpass)) {
                $("#txtnewemppass").css('border', '2px solid green');
                var confirm = $("#txtconfirmemppass").val();
                if (UserPasswordRegEx.test(confirm)) {
                    $("#txtconfirmemppass").css('border', '2px solid green');
                    return true;
                } else {
                    $("#txtconfirmemppass").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#txtnewemppass").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtcurrentemppass").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtcurrentid").css('border', '2px solid red');
        return false;
    }
}
function checkValidemppass() {
    var id = $("#txtcurrentid").val();
    if (UserNameRegEx.test(id)) {
        $("#txtcurrentemppass").focus();
        var userpassword = $("#txtcurrentemppass").val();
        if (UserPasswordRegEx.test(userpassword)) {
            $("#txtnewemppass").focus();
            var newpassword = $("#txtnewemppass").val();
            if (UserPasswordRegEx.test(newpassword)) {
                $("#txtconfirmemppass").focus();
                var password = $("#txtconfirmemppass").val();
                if (UserPasswordRegEx.test(password)) {
                    $("#btnupdateemppass").focus();
                } else {
                    $("#txtconfirmemppass").focus();
                }
            } else {
                $("#txtnewemppass").focus();
            }
        } else {
            $("#txtcurrentemppass").focus();
        }
    } else {
        $("#txtcurrentid").focus();
    }
}
function setButtonemppass() {
    let b = Validemppass();
    if (b) {
        $("#btnupdateemppass").attr('disabled', false);
    } else {
        $("#btnupdateemppass").attr('disabled', true);
    }
}

/*---------------Validate Emp Acc----------------------------------*/
$('#txtempaccname,#txtempaccnic,#txtempacccompany,#txtempacccontact,#txtempaccaddress,#txtempaccposition,#txtempaccemail,#txtempaccgender').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#txtempaccname").on('keyup', function (eventOb) {
    setupdateemp();
    if (eventOb.key == "Enter") {
        checkupdateemp();
    }
});
$("#txtempaccnic").on('keyup', function (eventOb) {
    setupdateemp();
    if (eventOb.key == "Enter") {
        checkupdateemp();
    }
});
$("#txtempacccompany").on('keyup', function (eventOb) {
    setupdateemp();
    if (eventOb.key == "Enter") {
        checkupdateemp();
    }
});
$("#txtempacccontact").on('keyup', function (eventOb) {
    setupdateemp();
    if (eventOb.key == "Enter") {
        checkupdateemp();
    }
});
$("#txtempaccaddress").on('keyup', function (eventOb) {
    setupdateemp();
    if (eventOb.key == "Enter") {
        checkupdateemp();
    }
});
$("#txtempaccposition").on('keyup', function (eventOb) {
    setupdateemp();
    if (eventOb.key == "Enter") {
        checkupdateemp();
    }
});
$("#txtempaccemail").on('keyup', function (eventOb) {
    setupdateemp();
    if (eventOb.key == "Enter") {
        checkupdateemp();
    }
});
$("#txtempaccgender").on('keyup', function (eventOb) {
    setupdateemp();
    if (eventOb.key == "Enter") {
        checkupdateemp();
    }
});

$("#btnupdateempacc").attr('disabled', true);
function Validupdateemp() {
    var name = $("#txtempaccname").val();
    $("#txtempaccname").css('border', '2px solid green');
    if (AddressRegEx.test(name)) {
        var nic = $("#txtempaccnic").val();
        if (NicRegEx.test(nic)) {
            $("#txtempaccnic").css('border', '2px solid green');
            var company = $("#txtempacccompany").val();
            if (AddressRegEx.test(company)) {
                $("#txtempacccompany").css('border', '2px solid green');
                var contact = $("#txtempacccontact").val();
                if (ContactRegEx.test(contact)) {
                    $("#txtempacccontact").css('border', '2px solid green');
                    var address = $("#txtempaccaddress").val();
                    if (AddressRegEx.test(address)) {
                        $("#txtempaccaddress").css('border', '2px solid green');
                        var position = $("#txtempaccposition").val();
                        if (AddressRegEx.test(position)) {
                            $("#txtempaccposition").css('border', '2px solid green');
                            var email = $("#txtempaccemail").val();
                            if (EmailRegEx.test(email)) {
                                $("#txtempaccemail").css('border', '2px solid green');
                                var gender = $("#txtempaccgender").val();
                                if (GenderRegEx.test(gender)) {
                                    $("#txtempaccgender").css('border', '2px solid green');
                                    return true;
                                } else {
                                    $("#txtempaccgender").css('border', '2px solid red');
                                    return false;
                                }
                            } else {
                                $("#txtempaccemail").css('border', '2px solid red');
                                return false;
                            }
                        } else {
                            $("#txtempaccposition").css('border', '2px solid red');
                            return false;
                        }
                    } else {
                        $("#txtempaccaddress").css('border', '2px solid red');
                        return false;
                    }
                } else {
                    $("#txtempacccontact").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#txtempacccompany").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtempaccnic").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtempaccname").css('border', '2px solid red');
        return false;
    }
}
function checkupdateemp() {
    var name = $("#txtempaccname").val();
    if (AddressRegEx.test(name)) {
        $("#txtempaccnic").focus();
        var nic = $("#txtempaccnic").val();
        if (NicRegEx.test(nic)) {
            $("#txtempacccompany").focus();
            var company = $("#txtempacccompany").val();
            if (AddressRegEx.test(company)) {
                $("#txtempacccontact").focus();
                var contact = $("#txtempacccontact").val();
                if (ContactRegEx.test(contact)) {
                    $("#txtempaccaddress").focus();
                    var address = $("#txtempaccaddress").val();
                    if (AddressRegEx.test(address)) {
                        $("#txtempaccposition").focus();
                        var position = $("#txtempaccposition").val();
                        if (AddressRegEx.test(position)) {
                            $("#txtempaccemail").focus();
                            var email = $("#txtempaccemail").val();
                            if (EmailRegEx.test(email)) {
                                $("#txtempaccgender").focus();
                                var gender = $("#txtempaccgender").val();
                                if (GenderRegEx.test(gender)) {
                                    $("#btnupdateempacc").focus();
                                }else {
                                    $("#txtempaccgender").focus();
                                }
                            }else {
                                $("#txtempaccemail").focus();
                            }
                        } else {
                            $("#txtempaccposition").focus();
                        }
                    } else {
                        $("#txtempaccaddress").focus();
                    }
                } else {
                    $("#txtempacccontact").focus();
                }
            } else {
                $("#txtempacccompany").focus();
            }
        } else {
            $("#txtempaccnic").focus();
        }
    } else {
        $("#txtempaccname").focus();
    }
}
function setupdateemp() {
    let b = Validupdateemp();
    if (b) {
        $("#btnupdateempacc").attr('disabled', false);
    } else {
        $("#btnupdateempacc").attr('disabled', true);
    }
}
/*-------------Validate Job-----------------------------------------*/
$('#txtcompanyname,#txtjobid,#txtjobtitle,#txtjoblocation,#txtjobtime,#txtjobsalary,#txtjobgender,#txtjobskills,#txtaboutjob').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#txtcompanyname").on('keyup', function (eventOb) {
    setjob();
    if (eventOb.key == "Enter") {
        checkjob();
    }
});
$("#txtjobid").on('keyup', function (eventOb) {
    setjob();
    if (eventOb.key == "Enter") {
        checkjob();
    }
});
$("#txtjobtitle").on('keyup', function (eventOb) {
    setjob();
    if (eventOb.key == "Enter") {
        checkjob();
    }
});
$("#txtjoblocation").on('keyup', function (eventOb) {
    setjob();
    if (eventOb.key == "Enter") {
        checkjob();
    }
});
$("#txtjobtime").on('keyup', function (eventOb) {
    setjob();
    if (eventOb.key == "Enter") {
        checkjob();
    }
});
$("#txtjobsalary").on('keyup', function (eventOb) {
    setjob();
    if (eventOb.key == "Enter") {
        checkjob();
    }
});
$("#txtjobgender").on('keyup', function (eventOb) {
    setjob();
    if (eventOb.key == "Enter") {
        checkjob();
    }
});
$("#txtjobskills").on('keyup', function (eventOb) {
    setjob();
    if (eventOb.key == "Enter") {
        checkjob();
    }
});
$("#txtaboutjob").on('keyup', function (eventOb) {
    setjob();
    if (eventOb.key == "Enter") {
        checkjob();
    }
});

$("#btnaddjob").attr('disabled', true);
function Validjob() {
    var name = $("#txtcompanyname").val();
    $("#txtcompanyname").css('border', '2px solid green');
    if (AddressRegEx.test(name)) {
        var id = $("#txtjobid").val();
        if (JobIDRegEx.test(id)) {
            $("#txtjobid").css('border', '2px solid green');
            var title = $("#txtjobtitle").val();
            if (AddressRegEx.test(title)) {
                $("#txtjobtitle").css('border', '2px solid green');
                var location = $("#txtjoblocation").val();
                if (AddressRegEx.test(location)) {
                    $("#txtjoblocation").css('border', '2px solid green');
                    var time = $("#txtjobtime").val();
                    if (DateRegEx.test(time)) {
                        $("#txtjobtime").css('border', '2px solid green');
                        var salary = $("#txtjobsalary").val();
                        if (SalaryRegEx.test(salary)) {
                            $("#txtjobsalary").css('border', '2px solid green');
                            var gender = $("#txtjobgender").val();
                            if (GenderRegEx.test(gender)) {
                                $("#txtjobgender").css('border', '2px solid green');
                                var skills = $("#txtjobskills").val();
                                if (SkillsRegEx.test(skills)) {
                                    $("#txtjobskills").css('border', '2px solid green');
                                    var about = $("#txtaboutjob").val();
                                    if (AddressRegEx.test(about)) {
                                        $("#txtaboutjob").css('border', '2px solid green');
                                        return true;
                                    } else {
                                        $("#txtaboutjob").css('border', '2px solid red');
                                        return false;
                                    }
                                } else {
                                    $("#txtjobskills").css('border', '2px solid red');
                                    return false;
                                }
                            } else {
                                $("#txtjobgender").css('border', '2px solid red');
                                return false;
                            }
                        } else {
                            $("#txtjobsalary").css('border', '2px solid red');
                            return false;
                        }
                    } else {
                        $("#txtjobtime").css('border', '2px solid red');
                        return false;
                    }
                } else {
                    $("#txtjoblocation").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#txtjobtitle").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtjobid").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtcompanyname").css('border', '2px solid red');
        return false;
    }
}
function checkjob() {
    var name = $("#txtcompanyname").val();
    if (AddressRegEx.test(name)) {
        $("#txtjobid").focus();
        var id = $("#txtjobid").val();
        if (JobIDRegEx.test(id)) {
            $("#txtjobtitle").focus();
            var title = $("#txtjobtitle").val();
            if (AddressRegEx.test(title)) {
                $("#txtjoblocation").focus();
                var location = $("#txtjoblocation").val();
                if (AddressRegEx.test(location)) {
                    $("#txtjobtime").focus();
                    var time = $("#txtjobtime").val();
                    if (DateRegEx.test(time)) {
                        $("#txtjobsalary").focus();
                        var salary = $("#txtjobsalary").val();
                        if (SalaryRegEx.test(salary)) {
                            $("#txtjobgender").focus();
                            var gender = $("#txtjobgender").val();
                            if (GenderRegEx.test(gender)) {
                                $("#txtjobskills").focus();
                                var skills = $("#txtjobskills").val();
                                if (SkillsRegEx.test(skills)) {
                                    $("#txtaboutjob").focus();
                                    var about = $("#txtaboutjob").val();
                                    if (AddressRegEx.test(about)) {
                                        $("#btnaddjob").focus();
                                    }else {
                                        $("#txtaboutjob").focus();
                                    }
                                }else {
                                    $("#txtjobskills").focus();
                                }
                            }else {
                                $("#txtjobgender").focus();
                            }
                        } else {
                            $("#txtjobsalary").focus();
                        }
                    } else {
                        $("#txtjobtime").focus();
                    }
                } else {
                    $("#txtjoblocation").focus();
                }
            } else {
                $("#txtjobtitle").focus();
            }
        } else {
            $("#txtjobid").focus();
        }
    } else {
        $("#txtcompanyname").focus();
    }
}
function setjob() {
    let b = Validjob();
    if (b) {
        $("#btnaddjob").attr('disabled', false);
    } else {
        $("#btnaddjob").attr('disabled', true);
    }
}

/*-------------------Validate Feedback--------------------------------------------*/

$('#txtfeedbackstid,#txtfeedback').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});
$("#txtfeedbackstid").on('keyup', function (eventOb) {
    setfeedback();
    if (eventOb.key == "Enter") {
        checkfeedback();
    }

});
$("#txtfeedback").on('keyup', function (eventOb) {
    setfeedback();
    if (eventOb.key == "Enter") {
        checkfeedback();
    }
});
$("#btnfeedback").attr('disabled', true);

function Validfeedback() {
    var username = $("#txtfeedbackstid").val();
    $("#txtfeedbackstid").css('border', '2px solid green');
    if (UserNameRegEx.test(username)) {
        var userpassword = $("#txtfeedback").val();
        var resp = UserPasswordRegEx.test(userpassword);
        if (resp) {
            $("#txtfeedback").css('border', '2px solid green');
            return true;
        } else {
            $("#txtfeedback").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtfeedbackstid").css('border', '2px solid red');
        return false;
    }
}
function checkfeedback() {
    var username = $("#txtfeedbackstid").val();
    if (UserNameRegEx.test(username)) {
        $("#txtfeedback").focus();
        var userpassword = $("#txtfeedback").val();
        if (UserPasswordRegEx.test(userpassword)) {
            $("#btnfeedback").focus();
        } else {
            $("#txtfeedback").focus();
        }
    } else {
        $("#txtfeedbackstid").focus();
    }
}
function setfeedback() {
    let b = Validfeedback();
    if (b) {
        $("#btnfeedback").attr('disabled', false);
    } else {
        $("#btnfeedback").attr('disabled', true);
    }
}


/*---------------Validate Stu Acc----------------------------------*/
$('#txtstname,#txtstnic,#txtstdob,#txtstcontact,#txtstunivercity,#txtstlocation,#txtstemail,#txtstgender').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#txtstname").on('keyup', function (eventOb) {
    setupdatestu();
    if (eventOb.key == "Enter") {
        checkupdatestu();
    }
});
$("#txtstnic").on('keyup', function (eventOb) {
    setupdatestu();
    if (eventOb.key == "Enter") {
        checkupdatestu();
    }
});
$("#txtstdob").on('keyup', function (eventOb) {
    setupdatestu();
    if (eventOb.key == "Enter") {
        checkupdatestu();
    }
});
$("#txtstcontact").on('keyup', function (eventOb) {
    setupdatestu();
    if (eventOb.key == "Enter") {
        checkupdatestu();
    }
});
$("#txtstunivercity").on('keyup', function (eventOb) {
    setupdatestu();
    if (eventOb.key == "Enter") {
        checkupdatestu();
    }
});
$("#txtstlocation").on('keyup', function (eventOb) {
    setupdatestu();
    if (eventOb.key == "Enter") {
        checkupdatestu();
    }
});
$("#txtstemail").on('keyup', function (eventOb) {
    setupdatestu();
    if (eventOb.key == "Enter") {
        checkupdatestu();
    }
});
$("#txtstgender").on('keyup', function (eventOb) {
    setupdatestu();
    if (eventOb.key == "Enter") {
        checkupdatestu();
    }
});

$("#btnupdatestuacc").attr('disabled', true);
function Validupdatestu() {
    var name = $("#txtstname").val();
    $("#txtstname").css('border', '2px solid green');
    if (AddressRegEx.test(name)) {
        var nic = $("#txtstnic").val();
        if (NicRegEx.test(nic)) {
            $("#txtstnic").css('border', '2px solid green');
            var dob = $("#txtstdob").val();
            if (DateRegEx.test(dob)) {
                $("#txtstdob").css('border', '2px solid green');
                var contact = $("#txtstcontact").val();
                if (ContactRegEx.test(contact)) {
                    $("#txtstcontact").css('border', '2px solid green');
                    var address = $("#txtstunivercity").val();
                    if (AddressRegEx.test(address)) {
                        $("#txtstunivercity").css('border', '2px solid green');
                        var position = $("#txtstlocation").val();
                        if (AddressRegEx.test(position)) {
                            $("#txtstlocation").css('border', '2px solid green');
                            var email = $("#txtstemail").val();
                            if (EmailRegEx.test(email)) {
                                $("#txtstemail").css('border', '2px solid green');
                                var gender = $("#txtstgender").val();
                                if (GenderRegEx.test(gender)) {
                                    $("#txtstgender").css('border', '2px solid green');
                                    return true;
                                } else {
                                    $("#txtstgender").css('border', '2px solid red');
                                    return false;
                                }
                            } else {
                                $("#txtstemail").css('border', '2px solid red');
                                return false;
                            }
                        } else {
                            $("#txtstlocation").css('border', '2px solid red');
                            return false;
                        }
                    } else {
                        $("#txtstunivercity").css('border', '2px solid red');
                        return false;
                    }
                } else {
                    $("#txtstcontact").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#txtstdob").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtstnic").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtstname").css('border', '2px solid red');
        return false;
    }
}
function checkupdatestu() {
    var name = $("#txtstname").val();
    if (AddressRegEx.test(name)) {
        $("#txtstnic").focus();
        var nic = $("#txtstnic").val();
        if (NicRegEx.test(nic)) {
            $("#txtstdob").focus();
            var dob = $("#txtstdob").val();
            if (DateRegEx.test(dob)) {
                $("#txtstcontact").focus();
                var contact = $("#txtstcontact").val();
                if (ContactRegEx.test(contact)) {
                    $("#txtstunivercity").focus();
                    var address = $("#txtstunivercity").val();
                    if (AddressRegEx.test(address)) {
                        $("#txtstlocation").focus();
                        var position = $("#txtstlocation").val();
                        if (AddressRegEx.test(position)) {
                            $("#txtstemail").focus();
                            var email = $("#txtstemail").val();
                            if (EmailRegEx.test(email)) {
                                $("#txtstgender").focus();
                                var gender = $("#txtstgender").val();
                                if (GenderRegEx.test(gender)) {
                                    $("#btnupdatestuacc").focus();
                                }else {
                                    $("#txtstgender").focus();
                                }
                            }else {
                                $("#txtstemail").focus();
                            }
                        } else {
                            $("#txtstlocation").focus();
                        }
                    } else {
                        $("#txtstunivercity").focus();
                    }
                } else {
                    $("#txtstcontact").focus();
                }
            } else {
                $("#txtstdob").focus();
            }
        } else {
            $("#txtstnic").focus();
        }
    } else {
        $("#txtstname").focus();
    }
}
function setupdatestu() {
    let b = Validupdatestu();
    if (b) {
        $("#btnupdatestuacc").attr('disabled', false);
    } else {
        $("#btnupdatestuacc").attr('disabled', true);
    }
}

/*---------------Validate New Stu Acc----------------------------------*/
$('#txtstid,#txtname,#txtnic,#txtdob,#txtemail,#txtcontact,#txtunivercity,#txtgender,#txtlocation,#txtskills,#txtpassword').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#txtstid").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtname").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtnic").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtdob").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtemail").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtcontact").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtunivercity").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtgender").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtlocation").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtskills").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});
$("#txtpassword").on('keyup', function (eventOb) {
    setstu();
    if (eventOb.key == "Enter") {
        checkstu();
    }
});

$("#btnupdatestuacc").attr('disabled', true);
function Validstu() {
    var id = $("#txtstid").val();
    $("#txtstid").css('border', '2px solid green');
    if (UserNameRegEx.test(id)) {
        var name = $("#txtname").val();
        if (AddressRegEx.test(name)) {
            $("#txtname").css('border', '2px solid green');
            var nic = $("#txtnic").val();
            if (NicRegEx.test(nic)) {
                $("#txtnic").css('border', '2px solid green');
                var dob = $("#txtdob").val();
                if (DateRegEx.test(dob)) {
                    $("#txtdob").css('border', '2px solid green');
                    var email = $("#txtemail").val();
                    if (EmailRegEx.test(email)) {
                        $("#txtemail").css('border', '2px solid green');
                        var con = $("#txtcontact").val();
                        if (ContactRegEx.test(con)) {
                            $("#txtcontact").css('border', '2px solid green');
                            var uni = $("#txtunivercity").val();
                            if (AddressRegEx.test(uni)) {
                                $("#txtunivercity").css('border', '2px solid green');
                                var gender = $("#txtgender").val();
                                if (GenderRegEx.test(gender)) {
                                    $("#txtgender").css('border', '2px solid green');
                                    var loc = $("#txtlocation").val();
                                    if (AddressRegEx.test(loc)) {
                                        $("#txtlocation").css('border', '2px solid green');
                                        var skill = $("#txtskills").val();
                                        if (SkillsRegEx.test(skill)) {
                                            $("#txtskills").css('border', '2px solid green');
                                            var pass = $("#txtpassword").val();
                                            if (UserPasswordRegEx.test(pass)) {
                                                $("#txtpassword").css('border', '2px solid green');
                                                return true;
                                            } else {
                                                $("#txtpassword").css('border', '2px solid red');
                                                return false;
                                            }
                                        } else {
                                            $("#txtskills").css('border', '2px solid red');
                                            return false;
                                        }
                                    } else {
                                        $("#txtlocation").css('border', '2px solid red');
                                        return false;
                                    }
                                } else {
                                    $("#txtgender").css('border', '2px solid red');
                                    return false;
                                }
                            } else {
                                $("#txtunivercity").css('border', '2px solid red');
                                return false;
                            }
                        } else {
                            $("#txtcontact").css('border', '2px solid red');
                            return false;
                        }
                    } else {
                        $("#txtemail").css('border', '2px solid red');
                        return false;
                    }
                } else {
                    $("#txtdob").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#txtnic").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtname").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtstid").css('border', '2px solid red');
        return false;
    }
}
function checkstu() {
    var id = $("#txtstid").val();
    if (UserNameRegEx.test(id)) {
        $("#txtname").focus();
        var name = $("#txtname").val();
        if (AddressRegEx.test(name)) {
            $("#txtnic").focus();
            var nic = $("#txtnic").val();
            if (NicRegEx.test(nic)) {
                $("#txtdob").focus();
                var dob = $("#txtdob").val();
                if (DateRegEx.test(dob)) {
                    $("#txtemail").focus();
                    var email = $("#txtemail").val();
                    if (EmailRegEx.test(email)) {
                        $("#txtcontact").focus();
                        var cont = $("#txtcontact").val();
                        if (ContactRegEx.test(cont)) {
                            $("#txtunivercity").focus();
                            var uni = $("#txtunivercity").val();
                            if (AddressRegEx.test(uni)) {
                                $("#txtgender").focus();
                                var gender = $("#txtgender").val();
                                if (GenderRegEx.test(gender)) {
                                    $("#txtlocation").focus();
                                    var location = $("#txtlocation").val();
                                    if (AddressRegEx.test(location)) {
                                        $("#txtskills").focus();
                                        var skills = $("#txtskills").val();
                                        if (SkillsRegEx.test(skills)) {
                                            $("#txtpassword").focus();
                                            var pass = $("#txtpassword").val();
                                            if (UserPasswordRegEx.test(pass)) {
                                                $("#btncreate").focus();
                                            }else {
                                                $("#txtpassword").focus();
                                            }
                                        }else {
                                            $("#txtskills").focus();
                                        }
                                    }else {
                                        $("#txtlocation").focus();
                                    }
                                }else {
                                    $("#txtgender").focus();
                                }
                            }else {
                                $("#txtunivercity").focus();
                            }
                        } else {
                            $("#txtcontact").focus();
                        }
                    } else {
                        $("#txtemail").focus();
                    }
                } else {
                    $("#txtdob").focus();
                }
            } else {
                $("#txtnic").focus();
            }
        } else {
            $("#txtname").focus();
        }
    } else {
        $("#txtstid").focus();
    }
}
function setstu() {
    let b = Validstu();
    if (b) {
        $("#btncreate").attr('disabled', false);
    } else {
        $("#btncreate").attr('disabled', true);
    }
}

/*---------------Validate New Emp Acc----------------------------------*/
$('#txtempid,#txtempname,#txtempnic,#txtempcompany,#txtempcontact,#txtempaddress,#txtemppassion,#txtempemail,#txtempgender,#txtemppassword').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#txtempid").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});
$("#txtempname").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});
$("#txtempnic").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});
$("#txtempcompany").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});
$("#txtempcontact").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});
$("#txtempaddress").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});
$("#txtemppassion").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});
$("#txtempemail").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});
$("#txtempgender").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});
$("#txtemppassword").on('keyup', function (eventOb) {
    setemp();
    if (eventOb.key == "Enter") {
        checkemp();
    }
});

$("#btncreatenewemployee").attr('disabled', true);
function Validemp() {
    var id = $("#txtempid").val();
    $("#txtempid").css('border', '2px solid green');
    if (UserNameRegEx.test(id)) {
        var name = $("#txtempname").val();
        if (AddressRegEx.test(name)) {
            $("#txtempname").css('border', '2px solid green');
            var nic = $("#txtempnic").val();
            if (NicRegEx.test(nic)) {
                $("#txtempnic").css('border', '2px solid green');
                var comp = $("#txtempcompany").val();
                if (AddressRegEx.test(comp)) {
                    $("#txtempcompany").css('border', '2px solid green');
                    var cont = $("#txtempcontact").val();
                    if (ContactRegEx.test(cont)) {
                        $("#txtempcontact").css('border', '2px solid green');
                        var add = $("#txtempaddress").val();
                        if (AddressRegEx.test(add)) {
                            $("#txtempaddress").css('border', '2px solid green');
                            var pas = $("#txtemppassion").val();
                            if (AddressRegEx.test(pas)) {
                                $("#txtemppassion").css('border', '2px solid green');
                                var email = $("#txtempemail").val();
                                if (EmailRegEx.test(email)) {
                                    $("#txtempemail").css('border', '2px solid green');
                                    var gend = $("#txtempgender").val();
                                    if (GenderRegEx.test(gend)) {
                                        $("#txtempgender").css('border', '2px solid green');
                                        var pass = $("#txtemppassword").val();
                                        if (UserPasswordRegEx.test(pass)) {
                                            $("#txtemppassword").css('border', '2px solid green');
                                            return true;
                                        } else {
                                            $("#txtemppassword").css('border', '2px solid red');
                                            return false;
                                        }
                                    } else {
                                        $("#txtempgender").css('border', '2px solid red');
                                        return false;
                                    }
                                } else {
                                    $("#txtempemail").css('border', '2px solid red');
                                    return false;
                                }
                            } else {
                                $("#txtemppassion").css('border', '2px solid red');
                                return false;
                            }
                        } else {
                            $("#txtempaddress").css('border', '2px solid red');
                            return false;
                        }
                    } else {
                        $("#txtempcontact").css('border', '2px solid red');
                        return false;
                    }
                } else {
                    $("#txtempcompany").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#txtempnic").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtempname").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtempid").css('border', '2px solid red');
        return false;
    }
}
function checkemp() {
    var id = $("#txtempid").val();
    if (UserNameRegEx.test(id)) {
        $("#txtempname").focus();
        var name = $("#txtempname").val();
        if (AddressRegEx.test(name)) {
            $("#txtempnic").focus();
            var nic = $("#txtempnic").val();
            if (NicRegEx.test(nic)) {
                $("#txtempcompany").focus();
                var comp = $("#txtempcompany").val();
                if (AddressRegEx.test(comp)) {
                    $("#txtempcontact").focus();
                    var con = $("#txtempcontact").val();
                    if (ContactRegEx.test(con)) {
                        $("#txtempaddress").focus();
                        var add = $("#txtempaddress").val();
                        if (AddressRegEx.test(add)) {
                            $("#txtemppassion").focus();
                            var uni = $("#txtemppassion").val();
                            if (AddressRegEx.test(uni)) {
                                $("#txtempemail").focus();
                                var email = $("#txtempemail").val();
                                if (EmailRegEx.test(email)) {
                                    $("#txtempgender").focus();
                                    var gender = $("#txtempgender").val();
                                    if (GenderRegEx.test(gender)) {
                                            $("#txtemppassword").focus();
                                            var pass = $("#txtemppassword").val();
                                            if (UserPasswordRegEx.test(pass)) {
                                                $("#btncreatenewemployee").focus();
                                            }else {
                                                $("#txtemppassword").focus();
                                            }
                                    }else {
                                        $("#txtempgender").focus();
                                    }
                                }else {
                                    $("#txtempemail").focus();
                                }
                            }else {
                                $("#txtemppassion").focus();
                            }
                        } else {
                            $("#txtempaddress").focus();
                        }
                    } else {
                        $("#txtempcontact").focus();
                    }
                } else {
                    $("#txtempcompany").focus();
                }
            } else {
                $("#txtempnic").focus();
            }
        } else {
            $("#txtempname").focus();
        }
    } else {
        $("#txtempid").focus();
    }
}
function setemp() {
    let b = Validemp();
    if (b) {
        $("#btncreatenewemployee").attr('disabled', false);
    } else {
        $("#btncreatenewemployee").attr('disabled', true);
    }
}