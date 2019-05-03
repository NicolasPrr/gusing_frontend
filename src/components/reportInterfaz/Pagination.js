import React, { Component } from 'react';

function ItemPage(props) {
    let select = null;
    if(props.page === props.nowPage) select = "is-current"; 
    return (
        <div>
            <li>
                <a className={"pagination-link " + select }  onClick = {props.action.bind(this, props.page)} >{props.page}</a>
            </li>
        </div>
    )
};

class Pagination extends Component {
    disableButton = (type) =>{
        if (this.props.currentPage === 1 &&  type === 0)
             return true
        if (this.props.currentPage === this.props.pages &&  type === 1)
            return true
    }
    render() {
        const numberPages = this.props.pages;
        let allItems = [];
        for(var i = 0; i < numberPages; i++) allItems.push(<ItemPage page = { i +1 } nowPage = {this.props.currentPage} action = {this.props.changePage} key = {i}/>)
        return (
            <div>
                <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
                    <a className=  "pagination-previous " disabled = {this.disableButton(0)} onClick ={this.props.changePage.bind( this, this.props.currentPage - 1)}  >Anterior</a>
                    <a className="pagination-next" disabled = {this.disableButton(1) } onClick ={this.props.changePage.bind( this, this.props.currentPage + 1)}>Siguiente</a>
                    <ul className="pagination-list">
                        {allItems}
                     </ul>
                </nav>



            </div>
        );
    }
}

export default Pagination;
