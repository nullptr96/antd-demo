import { login} from '@/api/user'
const user = {
    state: {
        name: ''
    },

    mutations: {
    SET_NAME: (state, { name, welcome }) => {
        state.name = name
        state.welcome = welcome
      }
    },

    actions: {
        Login(userInfo) {
            return new Promise((resolve, reject) => {
              login(userInfo)
                .then(resolve())
                .catch((error) => {
                  reject(error)
                })
            })
        },
    }
}

export default user
