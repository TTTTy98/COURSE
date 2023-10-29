// user.js
const user = {
    state: {
        isStudent: false,
        isTeacher: false,
        isAdmin: false,
        userInfo: null,
    },
    mutations: {
        SET_USER_INFO(state, data) {
            state.userInfo = data;
            this.commit('SET_ROLE')
        },
        SET_ROLE(state) {
            if (!state.userInfo || !state.userInfo.userType) return
            state.isStudent = state.userInfo.userType == 2 //student 
            state.isTeacher = state.userInfo.userType == 1 //teacher 
            state.isAdmin = state.userInfo.userType == 0 // admin
        }
    },
    actions: {},
    getters: {
        roleObj(state) {
            return {
                isStudent: state.isStudent,
                isTeacher: state.isTeacher,
                isAdmin: state.isAdmin,
            }
        }
    }
}

export default user