// src\utils\scrollAnimations.js
import gsap from 'gsap';


export const initScrollAnimations = () => {

    const defaults = {
        duration: 1.2,
        ease: "power4.out",
        animation: "fade_from_bottom",
        once: false,
    };

    gsap.utils.toArray(".scroll-animation").forEach((box) => {
        const settings = {
            duration: box.dataset.animationDuration || defaults.duration,
        };

        const animations = {
            fade_from_bottom: {
                y: 180,
                opacity: 0,
            },
            fade_from_top: {
                y: -180,
                opacity: 0,
            },
            fade_from_left: {
                x: -180,
                opacity: 0,
            },
            fade_from_right: {
                x: 180,
                opacity: 0,
            },
            fade_in: {
                opacity: 0,
            },
            rotate_up: {
                y: 180,
                rotation: 10,
                opacity: 0,
            },
        };

        const gsapObj = {
            ...settings,
            ...animations[box.dataset.animation || defaults.animation],
            scrollTrigger: {
                trigger: box,
                once: defaults.once,
                start: "top bottom+=20%",
                toggleActions: "play none none reverse",
            },
        };

        gsap.from(box, gsapObj);
    });


}