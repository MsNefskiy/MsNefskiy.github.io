export enum scrollTo {
    HOME = 0,
    SKILLS = 700,
    CONTACTS = 1450
}

export const toScroll = (event: any, to: scrollTo) => {
    event.preventDefault();
    window.scrollTo({
        top: to,
        behavior: 'smooth'
    });
};
