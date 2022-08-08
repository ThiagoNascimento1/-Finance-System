import { Item } from "../types/Item";
import { useEffect } from 'react';

// retornar o mês atual
export const getCurrentMonth = () => {
    const d = new Date();
    const month = (d.getMonth() + 1).toString();
    const year = d.getFullYear().toString();
    const monthFormatted = month.length > 1 ? month : `0${month}`;
    return `${monthFormatted}/${year}`;
};

// retornar o ano atual
export const getCurrentYear = (date: string) => {
    const [, year] = date.split("/");
    return year;
};

// formatar o mês em string
export const formatMonth = (data: string): string => {
    const [ month, year ] = data.split("/");
    const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    
    return `${months[parseInt(month) - 1]} de ${year}`;
};

// tratar objeto Date
export const returnMonthFormatted = (date: Date) => {
    const month = (date.getMonth() + 1).toString();
    const year = date.getFullYear().toString();
    return `${month.length > 1 ? month : `0${month}`}/${year}`;
};

// formatando valor recebido do input
export const handleDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
};

// ordernar lista filtrada
export const orderList = (list: Item[]) => {

    let newList: Item[] = [];

    if (list) {
        let arrayDays: string[] = []

        list.map(item => {
            const [d] = item.date.split("/");
            arrayDays.push(d);
        })

        arrayDays = arrayDays.sort().reverse();

        arrayDays.map(item => {
            list.map(i => {
                const [d] = i.date.split("/");
                if (item == d) {
                    newList.push(i);
                }
            })
        })
    }
    return newList;
}