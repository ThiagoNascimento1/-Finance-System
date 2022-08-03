import { Item } from "../types/Item";

// retorna o mês atual
export const getCurrentMonth = () => {
    const d = new Date();
    const month = (d.getMonth() + 1).toString();
    const year = d.getFullYear().toString();
    const monthFormatted = month.length > 1 ? month : `0${month}`;
    return `${monthFormatted}/${year}`;
};

// filtra os items cadastrados com base no mês
export const FilterListByMonth = (list: Item[], data: string): Item[] => {
    const newList = list.filter(item => item.date.includes(data));
    return newList;
};