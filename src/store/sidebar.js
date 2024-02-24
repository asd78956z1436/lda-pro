// store\sidebar.js
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isOpen: false,
        menuItems: [
            { name: 'Home', icon: 'las la-home', link: 'home' },
            { name: 'About', icon: 'lar la-user', link: 'about' },
            { name: 'Resume', icon: 'las la-briefcase', link: 'resume' },
            { name: 'Services', icon: 'las la-stream', link: 'services' },
            { name: 'Skills', icon: 'las la-shapes', link: 'skills' },
            { name: 'Portfolios', icon: 'las la-grip-vertical', link: 'portfolio' },
            { name: 'Testimonial', icon: 'lar la-comment', link: 'testimonial' },
            { name: 'Pricing', icon: 'las la-dollar-sign', link: 'pricing' },
            { name: 'Contact', icon: 'las la-envelope', link: 'contact' },
        ],
        activeSection: 0
    }),
    actions: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
        open() {
            this.isOpen = true;
        },
        close() {
            this.isOpen = false;
        },
        setActiveSection(sectionId) {
            this.activeSection = sectionId;
        },
        print() {
            console.log(this.activeSection)
        }
    },
});