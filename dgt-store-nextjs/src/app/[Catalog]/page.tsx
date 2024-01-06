'use client'
import React from 'react'
import Link from "next/link"
import { CarPageLayout } from "../Components/Car_page_layout"
import { CarCardData, CarDataBase, CarModel } from "../types"
import { auto } from "../types"



export default function Many_Cars_page({ params }: {
    params: { Catalog: string }
}) {

    const models: CarCardData[] = []
    auto.map(item => {item.name===params.Catalog? item.models.map(item => models.push(item)) : null})

    return <>
        <CarPageLayout cards={models} path={[params.Catalog]}>
            
        </CarPageLayout>
    </>
}