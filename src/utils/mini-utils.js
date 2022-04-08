export const formatDate = (unformattedDate) => {
    const date = new Date(unformattedDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const m = !(month > 9);
    const d = !(day > 9);
    return (`${(m ? '0' : '') + month}/${(d ? '0' : '') + day}/${year}`);
}