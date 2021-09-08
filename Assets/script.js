
// Establishing currentTime in military time using moment.js doc
var currentTime = moment();
$("#currentDay").text(currentTime.format("MMM Do, YYYY HH:mm:ss A"));

// establishing method to get the hours from the current time
var currentHour = moment().hour();
// var to grab textarea in the time blocks
var textAreaElement = $("textarea")
// console.log(textAreaElement);


// -------- ESTABLISHING TIME COMPARISON HERE ------//
// establishing function for each textAreaElement
textAreaElement.each(function() {
    // console.log($(this).attr("id"));
    // establishing var to grab the ids inside textAreaElement
    var timeBlockHour = $(this).attr("id");
    // if the current time is equal to the time in the time block, then....
    if (currentHour==timeBlockHour) {
        // console.log("present", timeBlockHour);
        // ... add style class present
        $(this).addClass("present");
    }
    // if the current time is less than certain block hours, then ...
    else if (currentHour<timeBlockHour) {
        // console.log("future", timeBlockHour);
        // ... those block hours are in the future; add style class for future time
        $(this).addClass("future");
    }
    // if its none of those cases, then its past time ..
    else {
        // console.log("past", timeBlockHour);
        // ... and we add the style class for past
        $(this).addClass("past");
}
})

// -------- ESTABLISHING FUNCTION HERE ------//
// event specified
$(".saveBtn").click(function (event) {
    // prevent default
    event.preventDefault();
    // variables to set up local storage
    // var to grab value of form-control and its siblings
    var formValue = $(this).siblings(".form-control").val();
    var keyId = $(this).siblings(".form-control").attr("id");
    // console.log(keyId);
    // console.log("this works");
     // saving to local storage
    localStorage.setItem(keyId, formValue);    
});

// for loop
for (var i = 9; i < 18; i++){
    console.log("this is i", i);
    // getting from local storage
    console.log(localStorage.getItem(i));
    // calling all ids in the loop
    console.log($("#"+i))
    $("#"+i).val(localStorage.getItem(i));
}


