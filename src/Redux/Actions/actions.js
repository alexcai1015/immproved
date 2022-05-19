import { QA_UPDATE_CODE, QA_RESET } from "./actionTypes";

export const updateAnswer = (obj) => ({
    type: QA_UPDATE_CODE,
    payload: obj
});

export const resetAnswers = () => ({
    type: QA_RESET
});
