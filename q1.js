let rect = document.querySelector('#center');

rect.addEventListener('mousemove',function (details) {
    let reactangleLoaction = rect.getBoundingClientRect();
    let insideRectVal = details.clientX - reactangleLoaction.left;
    
    if (insideRectVal < reactangleLoaction.width / 2){
     let redColor = gsap.utils.mapRange(0, reactangleLoaction.width/2, 255, 0, insideRectVal);
     gsap.to(rect, {
        backgroundColor: `rgb(${redColor}, 0, 0)`,
        ease:Power4,
     });
    }
    else{
        let blueColor = gsap.utils.mapRange( reactangleLoaction.width/2, reactangleLoaction.width, 0, 255, insideRectVal);
        gsap.to(rect, {
           backgroundColor: `rgb(0, 0, ${blueColor})`,
           ease:Power4,
        });
    }
    
})

rect.addEventListener('mouseleave', function () {
    gsap.to(rect, {
        backgroundColor: "white",
    });
})