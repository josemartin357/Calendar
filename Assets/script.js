// LOGIC ROUGH DRAFT
// note from explanation given by TA grace: DOM traversal, local storage 

// WHEN I open the planner ... THEN the current day is displayed at the top of the calendar
// establishing currentTime in military time using moment.js doc
var currentTime = moment();
$("#currentDay").text(currentTime.format("MMM Do, YYYY HH:mm:ss A"));

// WHEN I view the timeblocks for that day ...THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// establishing method to get the hours from the current time
var currentHour = moment().hour();
// 9am block
var textAreaElement = $("textarea")
// console.log(textAreaElement);
textAreaElement.each(function() {
console.log($(this).attr("id"));

var timeBlockHour = $(this).attr("id");
if (currentHour===timeBlockHour) {
    console.log("present", timeBlockHour);
    $(this).addClass("present");
}
else if (currentHour<timeBlockHour) {
    console.log("future", timeBlockHour);
    $(this).addClass("future");
}
else {
    console.log("past", timeBlockHour);
    $(this).addClass("past");
}
})




// WHEN I click into a timeblock... THEN I can enter an event. WHEN I click the save button for that timeblock ...THEN the text for that event is saved in local storage
// !!!need to establish local storage




// WHEN I refresh the page ... // THEN the saved events persist
