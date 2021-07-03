Guest=[]

function submit()
{
    var Guest1 = document.getElementById("Guest1").value;
    var Guest2 = document.getElementById("Guest2").value;
    var Guest3= document.getElementById("Guest3").value;
    var Guest4 = document.getElementById("Guest4").value;

    Guest.push(Guest1);
    Guest.push(Guest2);
    Guest.push(Guest3);
    Guest.push(Guest4);

    document.getElementById("guest_display").innerHTML=Guest;
    document.getElementById("subb").style.display= "none";
    document.getElementById("sobb").style.display= "inline-block";
}

function sort()
{
    Guest.sort();
    document.getElementById("guest_display").innerHTML=Guest;


}

function searching()

{
    var s = document.getElementById("search_value").value;
    var found = 0;
    for(var j=0; j<Guest.length; j++){
        if(s== Guest[j])
       {
           found=found+1;

       }
    }
    document.getElementById("result").innerHTML= "name found"   +found+   "time/s";


}


