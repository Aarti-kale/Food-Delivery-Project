import Salad from './Salad.jpg';
import Pasta from './Pasta.jpg';
import Pizza from './Pizza.jpg';
// import NoodleSoup from './Noodle soup.jpg';
import NoodleSoup from './NoodleSoup.jpg'
import Burger from './Burger.jpg';
import Sandwitche from './Sandwitche.jpg';
import CaesarSalad from './CaesarSalad.jpg';
import Cheeseburger from './Cheeseburger.jpg';
import GreekSalad from './GreekSalad.jpg';
import GardenSalad from './GardenSalad.jpg';
import PastaPrimavera from './PastaPrimavera.jpg'
import PotatoFries from './PotatoFries.jpg'
import RiceNoodles from './RiceNoodles.jpg'
import FriedEgg from './FriedEgg.jpg'
import SpaghettiPasta from './SpaghettiPasta.jpg'
import PepperoniPizza from './PepperoniPizza.jpg'
import BakedPasta from './BakedPasta.jpg'
import HamBurger from './HamBurger.jpg'
import GulabJamun from './GulabJamun.jpg'


export const menu_list=[
    {
        name: 'Salad',
        image:Salad,
        description:'Fresh and healthy salad ',
        price:20,
        
    },
    {
        name: 'Pasta',
        image:Pasta,
        description:'Delicious Italian pasta',
        price:40
    },
    {
        name: 'Pizza',
        image:Pizza,
        description:'Cheesy and tasty pizza',
        price:90
    },
    {
        name: 'Noodle Soup',
        image:NoodleSoup,
        description:'Healthy Noodle soup ',
        price:70
    },
    {
        name: 'Burger',
        image:Burger,
        description:'Juicy and satisfying burger',
        price:50
    },
    {
        name:'Sandwitche',
        image:Sandwitche,
    },
    {
        name:'Other',
        image:GulabJamun,
    }
];



export const food_list = [
    {
       _id:'1',
       name:'Greek Salad',
       price:5,
       description:'tasty',
       category: 'Salad',
       image:GreekSalad,
    },
    {
        _id:'2',
        name:'Garden Salad',
        price:6,
        description:'Delicious and healthy',
        category:'Salad',
        image:GardenSalad,
    },
    {
        _id:'3',
        name:'CheeseBurger',
        price:8,
        description:'Delicious',
        category:'Burger',
        image:Cheeseburger,
    },
    {
        _id:'4',
        name:'Caesar Salad',
        price:8,
        description:'Delicious and tasty',
        category:'Salad',
        image:CaesarSalad
    },
    {
        _id:'5',
        name:'Pasta Primavera',
        price:9,
        description:'Delicous and tasty',
        category:'Pasta',
        image:PastaPrimavera,
    },
    {
        _id:'6',
        name:'Caesar Salad',
        price:8,
        description:'Delicious and tasty',
        category:'Salad',
        image:CaesarSalad
    },
    {
        _id:'7',
        name: 'Potato Fries',
        price:4,
        description:'Tasty Chips',
        category:'Potato',
        image:PotatoFries
    },
    {
        _id:'8',
        name:'Rice Noodles',
        price:3,
        description:'Tasty Rice Noodles',
        category:'Noodle Soup',
        image:RiceNoodles
    },
    {
        _id:'9',
        name:'Sphaghetti Pasta',
        price:5,
        description:'Tasty pasta',
        category:'Pasta',
        image:SpaghettiPasta
    },{
        _id:'10',
        name:'Pepperoni Pizza',
        price:6,
        description:'Tasty Peperoni pizza',
        category:'Pizza',
        image:PepperoniPizza
    },{
        _id:'11',
        name:'Baked Pasta',
        price:4,
        description:'Tasty Baked pasta',
        category:'Pasta',
        image:BakedPasta
    },{
        _id:'12',
        name:'Fried Egg',
        price:6,
        description:'Tasty Fried egg',
        category:'Egg',
        image:FriedEgg
    },
    {
        _id:'13',
        name:'Ham Burger',
        price:3,
        description:'Tasty Ham Burger',
        category:'Burger',
        image:HamBurger
    },
    {
        _id:'14',
        name:'Gulab Jamun',
        price:5,
        description:'Tasty sweet Gulab Jamun',
        category:'Other',
        image:GulabJamun
    },

]