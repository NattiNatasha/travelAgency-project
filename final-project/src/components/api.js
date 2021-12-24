import {cards} from '../DatabaseTours';

export const getDatabaseWithDelay = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(cards);
    }, 10000);
});
