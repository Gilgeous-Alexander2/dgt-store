'use client'
import React from 'react'
import Link from "next/link"
import { CarPageLayout } from "../../Components/Car_page_layout"
import { CarCardData, CarDataBase } from "../../types"
import { auto } from "../../types"



export default function Many_Cars_page({ params }: {
    params: { Catalog: string,cars: string}
}) {

    
    const auto2: CarCardData[] = []
    auto.map(mark => {mark.name===params.Catalog? mark.models.map(model => model.name===params.cars? model.cars?.map(cars => auto2.push(cars)) : null) : null})
    //auto[0].models[0].cars?.map(item => auto2.push(item))

    return <>
        <CarPageLayout  cards={auto2} path={[params.cars]} rootpath={[params.Catalog]}>

        </CarPageLayout>
    </>
}