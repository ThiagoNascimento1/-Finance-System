import { Item } from "../types/Item";

// retorna o mês atual
export const getCurrentMonth = () => {
    const d = new Date();
    const month = (d.getMonth() + 1).toString();
    const monthFormatted = month.length > 1 ? month : `0${month}`;
    return monthFormatted;
};

// filtra os items cadastrados com base no mês
export const FilterListByMonth = (list: Item[], data: string): Item[] => {
    const [, month, year] = data.split('-');
    const dataToFilter = `${month}-${year}`;
    const newList = list.filter(item => item.date.includes(dataToFilter));
    return newList;
};