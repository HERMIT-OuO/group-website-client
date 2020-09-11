import Cookies from "js-cookie";
import { login } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const getDefaultState = () => {
    return {
        token: "",
        name: "",
        avatar: "",
    };
};

const state = getDefaultState();

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar;
    },
};

const action = {
    // user login
    login({ commit }, userInfo) {
        const data = {
            userName: userInfo.userName,
            userpass: userInfo.userpass,
        };
        return new Promise((resolve, reject) => {
            login(data)
                .then((res) => {
                    if (res.state === 0) {
                        reject(res);
                    } else {
                        commit("SET_TOKEN", res.token);
                        setToken(res.token);
                        resolve();
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};
