let sortBy = (value, list) => {
    switch (value) {
        case "old":
            return list.sort((a,b) => {
                let startDate1 = new Date(a.updated_at);
                let startDate2 = new Date(b.updated_at);
                if(startDate1.getTime() - startDate2.getTime()) return 1;
                if(startDate2.getTime() - startDate1.getTime()) return -1;
                return 0;
            });
        case "recent":
            return list.sort((a,b) => {
                let startDate1 = new Date(a.updated_at);
                let startDate2 = new Date(b.updated_at);
                if(startDate1.getTime() - startDate2.getTime()) return -1;
                if(startDate2.getTime() - startDate1.getTime()) return 1;
                return 0;
            });
        case "highest rating":
            return list.sort((a,b) => (b.rating) - (a.rating));
        case "lowest rating":
            return list.sort((a,b) => (a.rating) - (b.rating));
        default:
            return list;
    }
};


let property = null;
let el = null;

export default ({items, pagination, search, searchBy}) =>{
    const { offset, limit, setMax} = pagination;
    console.log({items});
    const filteredResults = items.filter (item =>{
        for( property in item){
            const noSearch = {"id": true, "user_id":true, "customer_id": true, "business_id": true,
                "update_at": true, "updated_at": true, 'price': true,
                };
            if(!noSearch[property] && item[property] && typeof item[property] === 'object' && item[property].length > 0){
                for(let i = 0; i < item[property].length; i++){
                    let element = item[property][i];
                    for( el in element){
                        if(!noSearch[el] && typeof element[el] !== "number" && element[el].toString().toLowerCase().includes(search)){
                            return true;
                        }
                    }
                }
            } else {
                const string = item[property] ?
                    item[property].toString().toLowerCase()
                    : "";

                if(!noSearch[property] && string.includes(search)){
                    return true;
                }

                if(property.toString().toLowerCase() === 'customer' && item[property].custname.toString().toLowerCase().includes(search)){

                    return true;
                }
            }

        }
        return false
    });
    setMax(filteredResults.length);

    const sortedFilteredResults = sortBy(searchBy, filteredResults);
    return sortedFilteredResults.filter((_, i) => i >= offset * parseInt(limit, 10) && i < (offset * parseInt(limit, 10)) + 3)
}