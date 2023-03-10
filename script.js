var heading=document.createElement("h1");
    heading.innerHTML="Form Using DOM"
    // document.body.append(heading)

    var form=document.createElement("form");

    var maindiv=document.createElement("div")
        maindiv.classList.add("maindiv")


    var firstdiv=document.createElement("div")
    firstdiv.className="divs";
    var seconddiv=document.createElement("div")
            seconddiv.className="divs"
    var thirddiv=document.createElement("div")
             thirddiv.className="divs"
    var fourthdiv=document.createElement("div")
        fourthdiv.className="divs"
    var fifthdiv=document.createElement("div")
        fifthdiv.className="divs"
    var sixthdiv=document.createElement("div")
    sixthdiv.className="divs"
    var seventhdiv=document.createElement("div")
        seventhdiv.className="divs"
    var eigthdiv=document.createElement("div")
   eigthdiv.className="divs"
    var ninthdiv=document.createElement("div")
        ninthdiv.className="divs"
    var firstname=document.createElement("label");
        firstname.setAttribute("for","fname");
        firstname.innerHTML="First name"
        

    var firstnameInput=document.createElement("input");
        firstnameInput.setAttribute("type","text");
        firstnameInput.setAttribute("id","fname"); 

        firstdiv.append(firstname,firstnameInput)

    var lastname=document.createElement("label");
        lastname.setAttribute("for","lname");
        lastname.innerHTML="Last name"

    var lastnameInput=document.createElement("input");
        lastnameInput.setAttribute("type","text");
        lastnameInput.setAttribute("id","lname");

        seconddiv.append(lastname,lastnameInput)

    var address=document.createElement("label");
        address.setAttribute("for","addr");
        address.innerHTML="Address"

    var addressInput=document.createElement("input");
        addressInput.setAttribute("type","text");
        addressInput.setAttribute("id","addr");

        thirddiv.append(address,addressInput)

    var pincode=document.createElement("label");
        pincode.setAttribute("for","pin");
        pincode.innerHTML="Pincode"

    var pincodeInput=document.createElement("input");
        pincodeInput.setAttribute("type","text");
        pincodeInput.setAttribute("id","pin");

        fourthdiv.append(pincode,pincodeInput)

    var gender=document.createElement("label");
        gender.setAttribute("for","gndr");
        gender.innerHTML="Gender"

    var genderInput=document.createElement("input");
        genderInput.setAttribute("type","radio");
        genderInput.setAttribute("id","male")
        genderInput.setAttribute("name","gender")

        


    var gendermale=document.createElement("label");
        gendermale.setAttribute("for","male");
        gendermale.innerHTML="Male"
        
    var genderInput2=document.createElement("input");
        genderInput2.setAttribute("type","radio");
        genderInput2.setAttribute("id","female")
        genderInput2.setAttribute("name","gender")

    var genderfemale=document.createElement("label");
        genderfemale.setAttribute("for","female");
        genderfemale.innerHTML="Female"

        fifthdiv.append(gender,genderInput,gendermale,genderInput2,genderfemale)

    var food=document.createElement("label")
        food.innerHTML="Food(choose any two)"

    var foodoption1=document.createElement("input")
        foodoption1.setAttribute("type","checkbox")
        foodoption1.setAttribute("id","option1")
        var foodoptionname1=document.createElement("label")
        foodoptionname1.setAttribute("for","option1")
        foodoptionname1.innerHTML="Biriyani"
        
    var foodoption2=document.createElement("input")
        foodoption2.setAttribute("type","checkbox")
        foodoption2.setAttribute("id","option2")
        var foodoptionname2=document.createElement("label")
        foodoptionname2.setAttribute("for","option2")
        foodoptionname2.innerHTML="Meals"

    var foodoption3=document.createElement("input")
        foodoption3.setAttribute("type","checkbox")
        foodoption3.setAttribute("id","option3")
        var foodoptionname3=document.createElement("label")
        foodoptionname3.setAttribute("for","option3")
        foodoptionname3.innerHTML="Chola puri"


    var foodoption4=document.createElement("input")
        foodoption4.setAttribute("type","checkbox")
        foodoption4.setAttribute("id","option4")
        var foodoptionname4=document.createElement("label")
        foodoptionname4.setAttribute("for","option4")
        foodoptionname4.innerHTML="Curd rice"

    var foodoption5=document.createElement("input")
        foodoption5.setAttribute("type","checkbox")
        foodoption5.setAttribute("id","option5")
        var foodoptionname5=document.createElement("label")
        foodoptionname5.setAttribute("for","option5")
        foodoptionname5.innerHTML="idly"

        sixthdiv.append(food,foodoption1,foodoptionname1,
            foodoption2,foodoptionname2,foodoption3,foodoptionname3,foodoption4,foodoptionname4,
            foodoption5,foodoptionname5)

    var state1=document.createElement("label")
        state1.setAttribute("for","state")
        
        state1.innerHTML="State"
        var state2=document.createElement("input")
        state2.setAttribute("id","state")

        seventhdiv.append(state1,state2)

    var country1=document.createElement("label")
        country1.setAttribute("for","coun")
        country1.innerHTML="Country"

    var country2=document.createElement("input")     
        country2.setAttribute("id","coun")

        eigthdiv.append(country1,country2)

    var final=document.createElement("input")
        final.setAttribute("type","submit")
         final.addEventListener("click",foo)
         final.className="button"

          //   The default behaviour of the input is to refresh the page once the function has passed. 
        //   All you need to do is to add this to the top of your function:  
        //  The Event interface's preventDefault() method tells the user agent that if the 
        //  event does not get explicitly handled, 
        //  its default action should not be taken as it normally would be.
        // SYNTAX:Function(event){
        //     event.preventDefault();
        //   })
       


 function foo(event){
    event.preventDefault()
    var a=document.getElementById("fname");
    var b=document.getElementById("lname");
    var c=document.getElementById("addr");
    var d=document.getElementById("pin");
    var e=document.getElementById("male");
    var f=document.getElementById("option1");
    var g=document.getElementById("state");   
    var h=document.getElementById("coun");

     tabdata1.innerHTML=a.value
     tabdata2.innerHTML=b.value
     tabdata3.innerHTML=c.value
     tabdata4.innerHTML=d.value
     tabdata5.innerHTML=e.value
     tabdata6.innerHTML=f.value
     tabdata7.innerHTML=g.value
     tabdata8.innerHTML=h.value
          

      
 }

        ninthdiv.append(final)

    maindiv.append(firstdiv,seconddiv,thirddiv,fourthdiv,fifthdiv,sixthdiv,seventhdiv,eigthdiv,ninthdiv)
        
   
    

            form.append(maindiv)
        
        

        document.body.append(heading,form)


    var tab=document.createElement("table")
        
    var tabrow1=document.createElement("tr")

    var tabhead1=document.createElement("th")
        tabhead1.innerHTML="Firstname"
        
        var tabhead2=document.createElement("th")
        tabhead2.innerHTML="Lastname"

        var tabhead3=document.createElement("th")
        tabhead3.innerHTML="Address"

        var tabhead4=document.createElement("th")
        tabhead4.innerHTML="Pincode     "

        var tabhead5=document.createElement("th")
        tabhead5.innerHTML="Gender"

        var tabhead6=document.createElement("th")
        tabhead6.innerHTML="food"

        var tabhead7=document.createElement("th")
        tabhead7.innerHTML="State"

        var tabhead8=document.createElement("th")
        tabhead8.innerHTML="Country"

tabrow1.append(tabhead1,tabhead2,tabhead3,tabhead4,tabhead5,tabhead6,tabhead7,tabhead8)


var tabrow2=document.createElement("tr")


    var tabdata1=document.createElement("td")
        tabdata1.innerHTML=""
        
    var tabdata2=document.createElement("td")
        tabdata2.innerHTML=""
       

    var tabdata3=document.createElement("td")
        tabdata3.innerHTML=""
       

    var tabdata4=document.createElement("td")
        tabdata4.innerHTML=""
       

    var tabdata5=document.createElement("td")
        tabdata5.innerHTML=""
       
   var tabdata6=document.createElement("td")
        tabdata6.innerHTML=""

    var tabdata7=document.createElement("td")
        tabdata7.innerHTML=""
       
    var tabdata8=document.createElement("td")
        tabdata8.innerHTML=""
        tabrow2.append(tabdata1,tabdata2,tabdata3,tabdata4,tabdata5,tabdata6,tabdata7,tabdata8)

        var tabrow3=document.createElement("tr")

        var tabdata21=document.createElement("td")
        tabdata21.innerHTML=""
        
    var tabdata22=document.createElement("td")
        tabdata22.innerHTML=""
       

    var tabdata23=document.createElement("td")
        tabdata23.innerHTML=""
       

    var tabdata24=document.createElement("td")
        tabdata24.innerHTML=""
       

    var tabdata25=document.createElement("td")
        tabdata25.innerHTML=""
       
   var tabdata26=document.createElement("td")
        tabdata26.innerHTML=""

    var tabdata27=document.createElement("td")
        tabdata27.innerHTML=""
       
    var tabdata28=document.createElement("td")
        tabdata28.innerHTML=""
       
 

        

tabrow3.append(tabdata21,tabdata22,tabdata23,tabdata24,tabdata25,tabdata26,tabdata27,tabdata28)
document.body .append(tab,tabrow1,tabrow2,tabrow3)
 



