// try{

// var controller = new ScrollMagic.Controller(); // build scenes
// var revealElements = document.getElementsByClassName("digit");
// for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
//     new ScrollMagic.Scene({
//             triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
//             offset: 10, // start a little later
//             triggerHook: 1,
//         })
//         .setClassToggle(revealElements[i], "visible") // add class toggle
//         // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
//         .addTo(controller);
// }
// }catch(error){
//     console.log("could not load scrollmagic");
// }