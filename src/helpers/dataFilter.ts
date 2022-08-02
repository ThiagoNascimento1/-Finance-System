// retorna o mês atual
export const getCurrentMonth = () => {
    const d = new Date();
    const month = (d.getMonth() + 1).toString();
    const monthFormatted = month.length > 1 ? month : `0${month}`;
    return monthFormatted;
};
