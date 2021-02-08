import { axios } from '@/util/request'

export function login(parameter) {
    return axios({
        url: '/auth/login',
        method: 'post',
        data: parameter,
    })
}

