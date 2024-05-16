import Api from '../utils/Api';

const authService = {
  login: async (credentials) => {
    const api = new Api('https://site--apimfu--4nfy6d8474fb.code.run/api/Personas/loginUser', 'POST', credentials);
    const data = await api.call();

    if (data.response && data.result.token) {
      return data.result.token;
    } else {
      throw new Error('Login failed');
    }
  },

  register: async (userInfo) => {
    const api = new Api('https://site--apimfu--4nfy6d8474fb.code.run/api/Personas/registerUser', 'POST', userInfo);
    const data = await api.call();
    return data;
  },
};

export default authService;
