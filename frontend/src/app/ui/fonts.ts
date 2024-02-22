// @ts-ignore
import { Oswald } from "next/font/google";
import { Lato } from "next/font/google";

export const oswald = Oswald({
    subsets: ['latin'],
  });

  export const lato = Lato({
    weight: ['100','300','400','700','900'],
    subsets: ['latin-ext']
});

