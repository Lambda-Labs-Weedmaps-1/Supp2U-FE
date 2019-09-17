export const getCategory = items =>{
    let category = {};
    items.forEach(item => category[item.category] = true);
    return Object.keys(category);
};