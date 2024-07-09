import React from 'react'
import Link from "next/link"

import { CarPageLayout } from "../Components/Car_page_layout"
import { CarCardData, CarDataBase, CarModel } from "../types"
import { auto } from "../types"



export default function Many_Cars_page({ params }: {
    params: { Catalog: string }
}) {

    // const res = await fetch('http://localhost:1337/api/auto-marks?populate=*')
    // const res2 = await res.json()


    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data')
    // }

    // console.log(res2.data)
    // const autodata =res2.data
    const models: CarCardData[] = []
    console.log(auto)
    
    // autodata.map((item: any) => {item.attributes.Mark===params.Catalog? item.attribute.auto_models.data.map((item: any) => models.push(item)) : null})
    auto.map((item: any) => {item.name===params.Catalog? item.models.map((item: any) => models.push(item)) : null})


    return <>
        <CarPageLayout cards={models}  path={[params.Catalog]}>
        </CarPageLayout>
    </>
}