import "../Styles/SearchBarStyle.css";

function SearchBar({filter}) {


    return (
        <div className="search-bar">
            <form className="form">
                <i className="fa fa-search gray"/>
                <input type="search"
                       className="form-control form-input" placeholder="Busca tu experiencia" onChange={filter}/>
                </form>
        </div>
    )
}


export default SearchBar