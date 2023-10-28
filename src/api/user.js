import http from '../utils/http/http.js'

const login = (data) => {
    return http.post("/login?password="+data.password+"&upi="+data.upi, data);
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
    return http.get("/user/get?id="+data);
};
const getClassList = (data) => {
    return http.post("/class/list", {});
};
const getstageList = (data) => {
    return http.post("/class/stageList?teacherId=", data);
};
const recordSave = (data) => {
    return http.post("/record/save", data);
};
const getrecordList = (data) => {
    return http.get("/record/list");
};
export default {
    login, getUserList, saveUser, delUser, getUserDetail,getClassList,getstageList,recordSave,getrecordList
}