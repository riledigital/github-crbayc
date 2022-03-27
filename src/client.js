const MY_SERVER_VARIABLE = import.meta.env.MY_SERVER_VARIABLE;
const MY_CLIENT_VARIABLE = import.meta.env.VITE_MY_CLIENT_VARIABLE;

console.log('env variables loading:');
console.log({ MY_SERVER_VARIABLE, MY_CLIENT_VARIABLE });

const dataFetchClient = async function () {
  return new Promise((resolve, reject) => {
    try {
      resolve({ MY_SERVER_VARIABLE, MY_CLIENT_VARIABLE });
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

export default dataFetchClient;
