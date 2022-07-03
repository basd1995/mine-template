import { sm2 } from 'sm-crypto'
export const login = (parameter: any) => {
  // 密码采用sm2加密传输密码
  const publicKey
    = '042b830253ff413fd66fb79af14f0aeee932bb81ae1b3649100b785c4d700ef15e99f2f8cf0f96aa939ecc66d8223494db95a1d98162f87e183bd9f8245ddb7c8b'
  const encryptData = sm2.doEncrypt(parameter.password, publicKey, 1)
  parameter.password = encryptData

  return request.post('/login', parameter)
}

export const logout = () => {
  return request.get('/logout')
}
