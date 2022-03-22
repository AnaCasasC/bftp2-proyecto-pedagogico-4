import "../Styles/App.css";
import "../Styles/PageHeaderStyle.css";
import "../Styles/FiltersStyle.css";
import Filters from "./Filters";
import useCollapse from 'react-collapsed';
import {useState} from "react";

function PageHeader(props){


    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return(
    <header  className="page-header">
        <div className="page-name">
            {props.keyword !== undefined ? <h1 className="h1">Experiencias encontradas con "{props.keyword}"</h1> :
                <h1 className="h1">Experiencias</h1>   }
        </div>
        <button className="align-right btn btn-filters"
            {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
        >
            {isExpanded ? 'Contraer filtros' : 'Expandir filtros'}
        </button>
        <section {...getCollapseProps()}>
            <Filters />
        </section>
    </header>
    );
}

export default PageHeader