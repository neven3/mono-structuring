import React from 'react';
import { useRootStore } from '../../Context/RootStateContext';


function MakeSelector() {
    const rootStore = useRootStore();
    const { vehicleMake } = rootStore;

    return (
        <div className="input-container">
            <h2>Select a brand</h2>
            <select
                name="select-make"
                className="text-input"
                onChange={(e) => vehicleMake.listViewStore.selectMake(e.target.value)}
            >
                <option value="">Select brand</option>
                {
                    vehicleMake.listViewStore.allMakes.map(make => {
                        return (
                            <option key={make} value={make}>{make}</option>
                        );
                    })
                }
            </select>
        </div>
    );
}

export default MakeSelector;