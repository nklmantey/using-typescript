interface Fruit {
    id: number;
    name: string;
    price: number;
}

const Fruits: Fruit[] = [
    {
        id: 1,
        name: 'Mango',
        price: 10
    },
    {
        id: 2,
        name: 'Pineapple',
        price: 15
    },
    {
        id: 3,
        name: 'Apple',
        price: 20
    },
    {
        id: 4,
        name: 'Orange',
        price: 25
    },
    {
        id: 5,
        name: 'Banana',
        price: 30
    },
]

export { Fruit, Fruits };