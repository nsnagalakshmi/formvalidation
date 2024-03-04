const username=document.querySelector("#name")
const email=document.querySelector("#email")

const message=document.querySelector("#message")
const success=document.querySelector("#success")
const error=document.querySelectorAll(".error")

function validateForm()
{
    clearmessage();
    let errorFlag=false;

    if(username.value.length<3 )
    {
        error[0].innerText="Name cannot be blank";
        errorFlag=true;
    }

    if(!emailIsValid(email.value))
    {
        error[1].innerText="Enter Valid email"
        email.classList.add('error-border');
        errorFlag=true;
    }


    if(message.value.length<1)
    {
        error[2].innerText="Message cannot be blank";
        errorFlag=true;
    }
    if(errorFlag==false)
    {
        success.innerText=" Submitted Successfully";
    }
}
function emailIsValid()
{
    let sequence=/\s+\@+\s+\.\s+/;
    return sequence.test(email)
}



function clearmessage()
{

}