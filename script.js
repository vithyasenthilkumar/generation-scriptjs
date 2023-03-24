let varnum=0;
let vartype="female";

function generation(year,gender)
{
    if(year>0)
    {
        if(type="male")
        {
            if(year==1)
            {
              console.log("son");
            }
            else if(year==2)
            {
                console.log("grandson");
            }
            else
            {
                console.log("great grandson");
            }
        }
       else if(type=="female")
       {
        if(year==1)
        {
            console.log("daughter");
        }
        else if(year==2)
        {
            console.log("granddaughter");
        }
        else{
            console.log("great granddaughter");
        }
       }
       else if(year<0)
       {
        if(type=="male")
        {
            if(year==-1)
            {
                console.log("father");
            }
            else if(year==-2)
            {
                console.log("grandfather");
            }
            else{
                console.log("great grandfather");
            }
        }
        else if(type=="female")
        {
            if(year==-1)
            {
             console.log("mother");
            }
            else if(year==-2)
            {
                console.log("grand mother");
            }
            else{
                console.log("great grandmother");
            }
        }
       }
       else if(year==0)
       {
        console.log("Me!")
       }
    }
}