import React from 'react';
import { useRootStore } from '../../Context/RootStateContext';
import './styles.css';
import { observer } from 'mobx-react';

function Pagination() {
    const rootStore = useRootStore();
    
    return (
        <div>
            {
                rootStore.pageNumbersArray.map(pageNum => {
                    return (
                        <button
                            className="page-button"
                            key={pageNum}
                            id={pageNum}
                            onClick={rootStore.setCurrentPage}
                        >
                            {pageNum}
                        </button>
                    );
                })
            }
        </div>
    );
}

export default observer(Pagination);
