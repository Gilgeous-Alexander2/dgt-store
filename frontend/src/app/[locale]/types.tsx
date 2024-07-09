
import React from "react"

export type CarPageLayout = {
   cards: CarDataBase[]
   path: string[]
}

export type CarCardData = {
   img?: string
   name: string
   year: string
}

export type CarModel = {
   name: string
   cars?: CarCardData[]
   year: string
}

export type CarDataBase = {
   img: string
   name: string
   models: CarModel[]
}

export const auto: CarDataBase[] = [
{
   name: 'Alfa-Romero',img: "http://dgt-store.com/wp-content/uploads/2019/08/icon-menu-13.png",models: [{ name: 'cx', cars: [{ img: 'ddd', name: 'cx1', year: '2023' }, { img: 'ddd', name: 'cx2', year: '2023' }, { img: 'ddd', name: 'cx3', year: '2023' }], year: '2022' },


   { name: 'ff', cars: [{ img: 'ddd', name: 'ff1', year: '2023' }, { img: 'ddd', name: 'ff2', year: '2023' },], year: '2022' },

   { name: 'fa', cars: [{ img: 'ddd', name: 'ff1', year: '2023' }, { img: 'ddd', name: 'ff2', year: '2023' },], year: '2022' },
   { name: 'fb', cars: [{ img: 'ddd', name: 'ff1', year: '2023' }, { img: 'ddd', name: 'ff2', year: '2023' },], year: '2022' },
   { name: 'fc', cars: [{ img: 'ddd', name: 'ff1', year: '2023' }, { img: 'ddd', name: 'ff2', year: '2023' },], year: '2022' },
   { name: 'fd', cars: [{ img: 'ddd', name: 'ff1', year: '2023' }, { img: 'ddd', name: 'ff2', year: '2023' },], year: '2022' },
   { name: 'fe', cars: [{ img: 'ddd', name: 'ff1', year: '2023' }, { img: 'ddd', name: 'ff2', year: '2023' },], year: '2022' }
   ]
},
{
   name: 'Audi', img: "http://dgt-store.com/wp-content/uploads/2019/08/icon-menu-5.png", models: [{ name: 'a3', cars: [{ img: 'ddd', name: 'a31', year: '2023' }, { img: 'ddd', name: 'a32', year: '2023' }, { img: 'ddd', name: 'a33', year: '2023' }], year: '2023' },

   { name: 'a4', cars: [{ img: 'ddd', name: 'a41', year: '2023' }, { img: 'ddd', name: 'a42', year: '2023' },], year: '2022' }]
}
]

export type Videot = {
   classname: string
   img: string
   video: string
}

export type Newt ={
   img: string;
   text: {
      t1?: string;
      t2?: string;
      t3?: string;
      t4?: string;
      t5?: string;
      t6?: string;
      t7?: string;
      t8?: string;
      t9?: string;
      t10?: string;
   }
}

//export const [state,setState] = React.useState<number>()
