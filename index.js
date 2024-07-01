
const events= ["Hackathon","Live Coding","Tech Talk","Workshop"];
const participateEvents=prompt("Enter the event you like to join: ");
const individualFeesForEvents= [150,120,180,300];
let payAmount=0;
let numberOfTeamMembers=0;

if (participateEvents==events[0] || participateEvents==events[-1]){
    const members= prompt("Enter 'team' or 'individual': ");
    if (members=="team"){
        numberOfTeamMembers=prompt("Enter number of Team Members: ");
    }
    if (participateEvents==events[0]){
        payAmount=numberOfTeamMembers*individualFeesForEvents[0];
    }else{
        payAmount=numberOfTeamMembers*individualFeesForEvents[-1];
    }
}
if (participateEvents==events[1]){
    payAmount=individualFeesForEvents[1];
}else if (participateEvents==events[2]){
    payAmount=individualFeesForEvents[2]
}
console.log(`Thank you for participating in ${participateEvents}`);
console.log(`Please pay the amount for participation ${payAmount}`);