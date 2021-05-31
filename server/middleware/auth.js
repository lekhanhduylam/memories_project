import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = res.header.authorization.split(' ')[1];
    const isCustomAuth = toke.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'secrethehe');

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.error(error);
  }
};

export default auth;
