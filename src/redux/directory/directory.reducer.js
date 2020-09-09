import { fakeData } from "../../Data/Data";

const INITIAL_STATE = {
    sections: fakeData,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
