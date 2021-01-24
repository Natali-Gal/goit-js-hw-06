// Получить массив всех умений 
// всех пользователей (поле skills), при этом не должно 
// быть повторяющихся умений и они должны быть отсортированы 
// в алфавитном порядке.
import users from "./users.js"
const getSortedUniqueSkills = users => {
        return [...new Set( users.reduce((unique, user) => {
            unique.push(...user.skills);
              
         return unique;
            }, []).sort()),
        ];
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 
// 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident',
//  'tempor', 'velit', 'veniam' ]