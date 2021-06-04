import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'secrethehe');

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );

    next();
  } catch (error) {
    console.error(error);
  }
};

export default auth;
