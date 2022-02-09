import { useState, useEffect } from "react";
import { RESPONSES } from "../../../lib/config";
import PropTypes from 'prop-types';
import ReactPaginate from "react-paginate";
import TableWrapper from './TableWrapper';

const Table = ({ count, users }) => {
    const [userTable, setUserTable] = useState(<></>);
    const [paginationSettings, setPaginationSettings] = useState({
        page: 0,
        pageOffset: 0,
        pageCount: 0,
        pageMax: count
    });

    const formTable = () => {
        if (!users) {
            return <h4 className='text-center'>{RESPONSES.NO_LOAD}</h4>;
        }
        const usersSlice = users.slice(
            paginationSettings.pageOffset,
            paginationSettings.pageOffset + paginationSettings.pageMax
        );
        setPaginationSettings({
            ...paginationSettings,
            pageCount: Math.ceil(count / paginationSettings.pageMax)
        });

        return <TableWrapper users={usersSlice} />;
    };

    const handlePageChange = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * paginationSettings.pageMax;

        setPaginationSettings({
            ...paginationSettings,
            page: selectedPage,
            pageOffset: offset
        });
        setUserTable(formTable());
    };

    useEffect(() => {
        setUserTable(formTable());
    }, [users]);

    return (
        <div className='table'>
            {userTable}
            <ReactPaginate
                previousLabel="<<"
                nextLabel=">>"
                breakLabel="..."
                pageCount={paginationSettings.pageCount}
                onPageChange={handlePageChange}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link no-dis"}
                nextLinkClassName={"page-link no-dis"}
                disabledClassName={"page-item disabled"}
                activeClassName={"page-item active"}
            />
        </div>
    );
};

Table.propTypes = {
    count: PropTypes.number.isRequired
};

export default Table;