import Raspberries from '../assets/raspberries.png'
import Oranges from '../assets/orange.png'
import Lemon from '../assets/lemons.png'
import Kiwi from '../assets/kiwi.png'
import Strawberries from '../assets/strawberries.png'
import { nanoid } from 'nanoid'

export const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'Products',
        link: '#'
    },
    {
        id: 3,
        title: 'About',
        link: '#'
    },
    {
        id: 4,
        title: 'Shop',
        link: '#'
    },
    {
        id: 5,
        title: 'Contacts',
        link: '#'
    },
]
export const FruitsData = [
    {
        id: nanoid(),
        title: 'Strawberries',
        image: Strawberries,
        link:'/',
        price: '£1.59'
    },
    {
        id: nanoid(),
        title: 'Kiwi',
        image: Kiwi,
        link:'/',
        price: '£2.59'
    },
    {
        id: nanoid(),
        title: 'Lemon',
        image: Lemon,
        link:'/',
        price: '£2.79'
    },
    {
        id: nanoid(),
        title: 'Raspberries',
        image: Raspberries,
        link:'/',
        price: '£4.00'
    },
    {
        id: nanoid(),
        title: 'Oranges',
        image: Oranges,
        link:'/',
        price: '£2.99'
    }
]