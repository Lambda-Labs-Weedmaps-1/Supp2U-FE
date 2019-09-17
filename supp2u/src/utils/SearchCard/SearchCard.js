import React, { useState, Suspense } from "react";
import Pagination from "./Pagination";
import filter from './filter';
import './searchCard.sass';
import SearchCardHeader from "./SearchCardHeader";
export default (props) =>{
    const [itemCount, setItemCount] = useState(0);
    const searchBy = useState('recent');

    const search = useState("");
    const [offset, setOffset] = useState(0);
    const {
        user_id,
        title,
        List,
        history,
        match
    } = props;
    const limit = props.limit || 5;
    const pagination = { offset, limit, setMax: setItemCount };
    return(
        <div className={"searchCard"}>
            <SearchCardHeader
                searchByHook={searchBy}
                searchHook={search}
                isSearching={props.isSearching}
                title={title}
            />
            <Suspense fallback={<div />}>
                <List
                    user_id={user_id}
                    getFiltered={items =>
                        filter({ items, pagination, search: search[0].toLowerCase(0), searchBy: searchBy[0] })
                    }
                    history={history}
                    match={match}
                />
            </Suspense>
            <div className="searchCard__footer">
                <Pagination
                    limit={limit}
                    totalList={itemCount}
                    paginate={(newOffset) => setOffset(newOffset)}
                />
            </div>
        </div>
    )

}