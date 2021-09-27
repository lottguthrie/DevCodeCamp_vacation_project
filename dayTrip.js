function getDestination()
{
    userInput = prompt("Press enter to see your destination pick.")
        let destinationChoice = ["Miami", "Seattle",  "New York", "San Diego"];
            let place = destinationChoice [Math.floor(Math.random() * destinationChoice.length)];    
            console.log(place);
            const key = "place";
}

function getRestaraunt()
{
    userInput = prompt("Press enter to see your restaraunt pick.")
        let restarauntChoice = ["Italian", "French",  "Japanese", "Spanish"];
            let restaraunt = restarauntChoice [Math.floor(Math.random() * restarauntChoice.length)];
                console.log(restaraunt);
                const key = "restaraunt";

}

function getTransport()
{
    userInput = prompt("Press enter to see your mode of transportation.")
        let transportationChoice= ["Drive your car", "Fly on an airplane",  "Float on a boat", "ride the choo choo train"];
            let transport = transportationChoice [Math.floor(Math.random() * transportationChoice.length)];
                 console.log(transport);
                 const key = "transport";
}

function getallWorkAndNoPlay()
{
    userInput = prompt("Press enter to see the Entertainment scheduled for your trip.")
        let entertainmentChoice = ["Skydive", "Bunjee Jump",  "Visit a famous landmark", "Camp in nature", "Netflix and chill"];
            let allWorkAndNoPlay = entertainmentChoice [Math.floor(Math.random() * entertainmentChoice.length)];
                console.log(allWorkAndNoPlay);
                const key = "allWorkandNoPlay";
}


function repickItem()
{
    userInput = prompt("Do you like your current choices? If not, enter No, If Yes, enter Yes.")
        let decision = ["No", "yes"];
    if(userInput == "No"){
        choicesChoices()
    } 
    else if(userInput == "Yes"){
        vacationApproval()
    }
} 


function choicesChoices()
{
    userInput = prompt("Select which part of the day trip you would like to Change.Type Destination, Restaraunt, Transportation, or Entertainment into the box below to change your pick for that particular part of your trip.")
        let selectItem = ["Destination", "Restaraunt", "Transportation", "Entertainment"];
            if(userInput == "Destination"){
                getDestination()
            }
            else if(userInput == "Restaraunt"){
                getRestaraunt()
            }
            else if(userInput == "Transportation"){
                getTransport()
            }
            else if(userInput == "Entertainment"){
                getallWorkAndNoPlay()
            }
            userInput;}
            
    


    function vacationApproval()
    {
    userInput = prompt("Would you like to confirm the provided travel plans? Please type Yes or No in the text box below.");
    let decision = ["No", "yes"];
            if(userInput == "No"){
                choicesChoices()
           }
            else if(userInput == "Yes"){
                tripConformation()
           }
        }


function tripConformation()
{
userInput = prompt("Would you like to see an itenarary of your scheduled plans? If so, enter Yes into the text box below. If not, enter No into the box below to exit the program.");
let decision = ["No", "Yes"];
            if(userInput == "Yes"){
                        itenararyDisplay()
                }
                    else if(userInput == "No"){
                        alert("Thank you for choosing devCodeCamp Travel Services! Goodbye! ;-)")
                }
            }
        


function itenararyDisplay()
{
   alert("This is your current scheduled trip selection");
      console.log(getDestination["place"]);
      console.log(getRestaraunt["restaraunt"]);
      console.log(getTransport["transport"]);
      console.log(getallWorkAndNoPlay["allWorkAndNoPlay"]);
}
     
getDestination();
getRestaraunt();
getTransport();
getallWorkAndNoPlay();
repickItem();
choicesChoices();
