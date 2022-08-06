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