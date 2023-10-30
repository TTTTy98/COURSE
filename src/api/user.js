import http from '../utils/http/http.js'

const login = (data) => {
    return http.post("/login?password=" + data.password + "&upi=" + data.upi, data);
};
const getUserList = (data) => {
    return http.post("/user/list", data);
};
const saveUser = (data) => {
    return http.post("/user/save", data);
};
const delUser = (data) => {
    return http.del("/user/delete", data);
};
const getUserDetail = (data) => {
    return http.get("/user/get?id=" + data);
};
const getClassList = (data) => {
    return http.post("/class/list", data);
};
const getstageList = (data) => {
    return http.post("/class/stageList?teacherId=", data);
};
const recordSave = (data) => {
    return http.post("/record/save", data);
};
const classSave = (data) => {
    return http.post("/class/save", data);
};
const classDel = (id) => {
    return http.post("/class/delete", id);
};
const getrecordList = (param) => {
    return http.post("/record/list", param);
};

const deleteRecord = (data) => {
    return http.post("/record/delete?id=" + data);
};
const agreeRecord = (data) => {
    return http.post("/record/agree?id=" + data);
};
export default {
    classDel, login, getUserList, saveUser, delUser, getUserDetail, getClassList, getstageList, recordSave, getrecordList, deleteRecord, agreeRecord, classSave
}
