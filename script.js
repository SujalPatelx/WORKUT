gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".body"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".body", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".body").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


const tlm = gsap.timeline();

tlm.to(".loading", {
    position: 'fixed',
    display: 'flex'
})

tlm.to("#icon_dumble", {
    rotate: (360 * 2),
    duration: "3",
}, "-=1")
tlm.to(".loading", {
    opacity: "0",
    display: 'none'
})

tlm.to("#icon_dumble", {
    opacity: "0"
}, "-=1")

tlm.to(".main", {
    opacity: 1,
    duration: "2",
})

tlm.to(".about_us", {
    display: 'block'
})

tlm.from(".nav_continer", {
    y: -200,
    duration: 1.5
}, "-=2")

tlm.from(".workut_hd", {
    x: -200,
    duration: 1.5
}, "-=1.5")

tlm.from(".nav_icon", {
    x: 200,
    duration: 1.5
}, "-=2")

tlm.from(".button", {
    y: 500,
    duration: 1.5
}, "-=2")

tlm.from(".lan_text_main", {
    opacity: "0",
    duration: "2"
}, "-=1")



gsap.to(".span_1", {
    scrollTrigger: {
        trigger: ".span_1",
        scrub: 2,
        start: 'top bottom',
        end: 'bottom top'
    },
    x: "-1000"
})

gsap.to(".lets_start", {
    scrollTrigger: {
        trigger: ".lets_start",
        scrub: 1,
        start: 'bottom center',
        end: 'bottom top'
    },
    fontSize: "10vw",
    opacity: "0",
    marginTop: "80px"
})

gsap.from(".about_main_txt", {
    scrollTrigger: {
        trigger: ".about_us",
        scroll: ".about_us",
        start: '30% bottom',
    },
    y: "-100",
    duration: "1",
    opacity: "0"
})

gsap.from(".partner_text_main_01", {
    scrollTrigger: {
        trigger:".partner_text",
    },
    y: 200,
    duration:1
})
gsap.from(".partner_text_main_02", {
    scrollTrigger: {
        trigger:".partner_text",
    },
    y: 200,
    duration:1,
    delay:0.2
})
gsap.from(".partner_text_main_03", {
    scrollTrigger: {
        trigger:".partner_text",    
    },
    y: 200,
    duration:1,
    delay:0.4
})