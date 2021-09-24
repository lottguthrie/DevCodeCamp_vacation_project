function getdestination()
{
    userInput = prompt("Press enter to see your destination pick.")
        let destinationChoice = ["Miami", "Seattle",  "New York", "San Diego"];
            let place = destinationChoice [Math.floor(Math.random() * destinationChoice.length)];
                console.log(place);
}

function getrestaraunt()
{
    userInput = prompt("Press enter to see your restaraunt pick.")
        let restarauntChoice = ["Italian", "French",  "Japanese", "Spanish"];
            let restaraunt = restarauntChoice [Math.floor(Math.random() * restarauntChoice.length)];
                console.log(restaraunt);
}

function gettransport()
{
    userInput = prompt("Press enter to see your mode of transportation.")
        let transportationChoice= ["Drive your car", "Fly on an airplane",  "Float on a boat", "ride the choo choo train"];
            let transport = transportationChoice [Math.floor(Math.random() * transportationChoice.length)];
                 console.log(transport);
}

function getallWorkAndNoPlay()
{
    userInput = prompt("Press enter to see the Entertainment scheduled for your trip.")
        let EntertainmentChoice = ["Skydive", "Bunjee Jump",  "Visit a famous landmark", "Camp in nature", "Netflix and chill"];
            let allWorkAndNoPlay = EntertainmentChoice [Math.floor(Math.random() * EntertainmentChoice.length)];
                console.log(allWorkAndNoPlay);
}



function repickItem()
{
    userInput = prompt("Do you like your current choices? If not, enter No, If Yes, enter Yes.")
        let decision = ["No", "yes"];
            for(let i= 0; i < 1; i++){
                console.log(i);
                while(decision === 0){
                    choicesChoices()
                }
    }

}        


function choicesChoices()
{
    userInput = prompt("Select which part of the day trip you would like to Change.")
        let selectItem = ["Destination", "Restaraunt", "Transportation", "Entertainment"]
            for(let i = 0; i < 3; i++);
                while(selectItem === i){
                    getdestination
                };
                while(selectItem === i + 1){
                    getrestaraunt
                };
                while(selectItem === i + 2){
                    gettransport
                };
                while(selectItem === i + 3)
                {
                    getallWorkAndNoPlay
                };
            
        }

{
getdestination();
getrestaraunt();
gettransport();
getallWorkAndNoPlay();
repickItem();
}
