import React from 'react'
import { useState } from 'react';

export const Pagination = ({onPageChange}) => {

const [page, setPage] = useState(1);

    const Nextpage = () => {
        setPage(page + 1);
        onPageChange(page + 1)
    }
    const PreviousPage = () => {
        setPage(page - 1);
        onPageChange(page - 1);
    }

    return (
        <div className="pagination-container">
            <button className="page-item btn btn-dark" onClick={PreviousPage} disabled={page - 1 < 1} type="button">Previous</button>
            <button type="button" class="btn btn-dark">{page}</button>
            <button className="page-item btn btn-dark"  onClick={Nextpage}  type="button">Next</button>
        </div>
    )
}

//ready
