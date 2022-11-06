import { useState } from "react"

export interface Currency {
  exchange_id: string;
  name: string;
}

export const GetCurrencies = async() => {

    const currencies = (await (await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')).json())

    return currencies as Currency[];
}