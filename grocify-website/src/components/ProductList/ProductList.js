import Butter from "../../assets/butter.png"
import Strawbarry from "../../assets/strawberry.png"
import Eggs from "../../assets/eggs.png"
import Cabbage from "../../assets/cabbage.png"
import Eggplant from "../../assets/eggplant.png"
import Shrimp from "../../assets/shrimp.png"
import Kiwi from "../../assets/kiwi.png"
import Capsicum from "../../assets/capsicum.png"
import Broccoli from "../../assets/broccoli.png"
import Yogurt from "../../assets/yogurt.png"
import Beef from "../../assets/beef.png"
import ChickenBreast from "../../assets/chicken-breast.png"
import Kale from "../../assets/kale.png"
import Cheese from "../../assets/cheese.png"
import CondensedMilk from "../../assets/condensed-milk.png"
import Salmon from "../../assets/salmon.png"
import Banana from "../../assets/banana.png"
import Milk from "../../assets/milk.png"
import Pineapple from "../../assets/pineapple.png"
import Tofu from "../../assets/tofu.png"
import Tilapia from "../../assets/tilapia.png"
import SliceCheese from "../../assets/slice-cheese.png"
import RecottaCheese from "../../assets/ricotta-cheese.png"
import Grapes from "../../assets/grapes.png"
import Lettuce from "../../assets/lettuce.png"
import Mango from "../../assets/mango.png"
import DragonFruit from "../../assets/dragon-fruit.png"
import Watermelon from "../../assets/watermelon.png"
import Apple from "../../assets/apple.png"
import Orange from "../../assets/orange.png"


const products = [
    {
        id: 1,
        name: 'Strawaberry',
        price: 35,
        category: 'Fruits',
        image: Strawbarry,
        quantity: '250 g'
    },
    {
        id: 2,
        name: 'Butter',
        price: 125,
        category: 'Dairy',
        image: Butter,
        quantity: '200 g'
    },
    {
        id: 3,
        name: 'Eggs',
        price: 20,
        category: 'Dairy',
        image: Eggs,
        quantity: '6 pcs'
    },
    {
        id: 4,
        name: 'Cabbage',
        price: 30,
        category: 'Vegetables',
        image: Cabbage,
        quantity: '1 kg'
    },
    {
        id: 5,
        name: 'Eggplant',
        price: 45,
        category: 'Vegetables',
        image: Eggplant,
        quantity: '1 kg'
    },
    {
        id: 6,
        name: 'Shrimp',
        price: 85,
        category: 'SeaFood',
        image: Shrimp,
        quantity: '250 g'
    },
    {
        id: 7,
        name: 'Kiwi',
        price: 100,
        category: 'Fruits',
        image: Kiwi,
        quantity: '3 pcs'
    },
    {
        id: 8,
        name: 'Green Capsicum',
        price: 30,
        category: 'Vegetables',
        image: Capsicum,
        quantity: '500 g'
    },
    {
        id: 9,
        name: 'Broccoli',
        price: 65,
        category: 'Vegetables',
        image: Broccoli,
        quantity: '500 g'
    },
    {
        id: 10,
        name: 'Yougrt',
        price: 80,
        category: 'Dairy',
        image: Yogurt,
        quantity: '400 g'
    },
    {
        id: 11,
        name: 'Beef',
        price: 200,
        category: 'SeaFood',
        image: Beef,
        quantity: '1 kg'
    },
    {
        id: 12,
        name: 'Chiken Breast',
        price: 300,
        category: 'SeaFood',
        image: ChickenBreast,
        quantity: '1 kg'
    },
    {
        id: 13,
        name: 'Kale Leaves',
        price: 30,
        category: 'Vegetables',
        image: Kale,
        quantity: '200 g'
    },
    {
        id: 14,
        name: 'Mozzarella Cheese',
        price: 105,
        category: 'Dairy',
        image: Cheese,
        quantity: '200 g'
    },
    {
        id: 15,
        name: 'Condensed-Milk',
        price: 55,
        category: 'Dairy',
        image: CondensedMilk,
        quantity: '250 g'
    },
    {
        id: 16,
        name: 'Salmon Filet',
        price: 95,
        category: 'SeaFood',
        image: Salmon,
        quantity: '250 g'
    },
    {
        id: 17,
        name: 'Banana',
        price: 40,
        category: 'Fruits',
        image: Banana,
        quantity: '1 dozen'
    }, {
        id: 18,
        name: 'Milk Bottle(3)',
        price: 70,
        category: 'Dairy',
        image: Milk,
        quantity: '1 L'
    }, {
        id: 19,
        name: 'PineApple',
        price: 80,
        category: 'Fruits',
        image: Pineapple,
        quantity: '1 pc'
    },
    {
        id: 20,
        name: 'Tofu Cubes',
        price: 90,
        category: 'Dairy',
        image: Tofu,
        quantity: '250 g'
    },
    {
        id: 21,
        name: 'Tilapia Fish',
        price: 400,
        category: 'SeaFood',
        image: Tilapia,
        quantity: '1 kg'
    },
    {
        id: 22,
        name: 'Slice Cheese',
        price: 120,
        category: 'Dairy',
        image: SliceCheese,
        quantity: '200 g'
    },
    {
        id: 23,
        name: 'Recotta-Cheese',
        price: 145,
        category: 'Dairy',
        image: RecottaCheese,
        quantity: '250 g'
    },
    {
        id: 24,
        name: 'Grapes',
        price: 45,
        category: 'Fruits',
        image: Grapes,
        quantity: '500 g'
    },
    {
        id: 25,
        name: 'Lettuce Leaf',
        price: 30,
        category: 'Vegetables',
        image: Lettuce,
        quantity: '200 g'
    },
    {
        id: 26,
        name: 'Mango',
        price: 90,
        category: 'Fruits',
        image: Mango,
        quantity: '1 kg'
    },
    {
        id: 27,
        name: 'Dragon Fruit',
        price: 140,
        category: 'Fruits',
        image: DragonFruit,
        quantity: '1 pc'
    },
    {
        id: 28,
        name: 'Watermelon',
        price: 110,
        category: 'Fruits',
        image: Watermelon,
        quantity: '1 pc'
    },
    {
        id: 29,
        name: 'Apple',
        price: 75,
        category: 'Fruits',
        image: Apple,
        quantity: '1 kg'
    },
    {
        id: 30,
        name: 'Orange',
        price: 65,
        category: 'Fruits',
        image: Orange,
        quantity: '1 kg'
    },
];

export default products