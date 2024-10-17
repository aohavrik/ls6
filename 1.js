console.log('лінійний пошук\n', '---------');


let search = prompt(' Введіть наступне з міст: Київ, Херсон, Крим, Запоріжжя, Донецьк, Білгород, Львів')
let found = 0
let linear = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']
for (i = 0; i < linear.length; i++) {
    if (search === linear[i]) {
        console.log('лінійний пошук: масиву [Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів]');
        console.log('Місто:', linear[i], 'під номером', i + 1)
        found = 1;
        break;
    }

}
if (!found) {
    console.log('Помилка запиту: місто в масиві не знайдено');
} 

console.log('бінарний пошук\n', '---------');

let search2 = Number(prompt('введіть число:'))
let linear2 = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]
let StartSearch2 = 0
let EndShearch2 = linear2.length - 1
let found2 = false
let center

while (StartSearch2 <= EndShearch2) {
    center = Math.round((StartSearch2 + EndShearch2) / 2)

    if (linear2[center] === search2) {
        console.log('урааа');
        EndShearch2 = StartSearch2
        found2 = true;
    } else if (linear2[center] > search2) {
        EndShearch2 = center -1
    } else if (linear2[center] < search2) {
        StartSearch2 = center +1
    }
}
if (!found2) {
    console.log('Помилка, такого числа в масиві не має');
} 

