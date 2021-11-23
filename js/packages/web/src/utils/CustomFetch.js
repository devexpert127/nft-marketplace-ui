const CustomFetch = async (route, body, method = false) => {
  // console.log(route, method, body);

  const headers = {
    'Content-Type': 'application/json',
  };

  // if (authHeader) {
  //   let token = await SecureStorage.getItem('token');

  //   // console.log('token => ', token);

  //   if (token) {
  //     headers['Authorization'] = `Bearer ${token}`;
  //   }

  //   console.log('Headers => ', headers, route);
  // }

  const response = await fetch(`${route}`, {
    method: method ? method : 'post',
    headers,
    body: body && JSON.stringify(body),
  });

  const responseJSON = await response.json();

  return { payload: responseJSON, status: response.status };
};

export default CustomFetch;
