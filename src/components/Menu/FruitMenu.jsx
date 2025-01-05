import React from 'react'

const FruitsData = [
    {
        id: 1,
        title: 'Apple',
        link:'/',
        price: '£1.59'
    },
    {
        id: 1,
        title: 'Kiw',
        link:'/',
        price: '£2.59'
    },
    {
        id: 1,
        title: 'Raspberries',
        link:'/',
        price: '£4.00'
    },
    {
        id: 1,
        title: 'Oranges',
        link:'/',
        price: '£2.99'
    }
]

const FruitMenu = () => {
  return (
    <div className='h-auto w-full text-blue-800'>
         <ul>
        {FruitsData.map((fruit) => {
            return (
                 
                <li key={fruit.id}>
                 <a href="/">{fruit.title}</a>    
                </li>
                      
            )
         
        })}
         </ul> 
    </div>
  )
}

export default FruitMenu

