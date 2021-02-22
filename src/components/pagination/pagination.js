import React from 'react'
import ReactPaginate from 'react-paginate';
import {useHistory} from 'react-router'
import './pagination.css'

const pagination = ({cardsPerPage,totalCards,paginate,currentPage}) => {

    let  pageNumbers = [];
    

    for(let i = 1; i<=Math.ceil(totalCards/cardsPerPage); i++)
    {
        pageNumbers.push(i);
    }

    // let renderPages = TotalCards?():<h1>No data found</h1>



return (
    <nav>
    <ul className="pagination">
        {pageNumbers.map(number=>(
            <li key={number} className={currentPage == number?'page-item active':'page-item'}>
                <a onClick={()=>paginate(number)} className="page-link">
                {number}    
                </a>   
            </li>
        ))}
    </ul>
</nav>
    )
}

export default pagination
