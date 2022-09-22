 const crypto = require("crypto");
 const slugCreater = (Text) => {
    return Text.toLowerCase()
               .replace(/ /g, '-').replace(/\+/g,'-plus-')
               .replace(/[^\w-]+/g, '');
  };

  const hashString = (str) =>{
    const hashKey = crypto.createHash('md5');
    return hashKey.update(str);
  }
  module.exports = {
      slugCreater,
      hashString
  }
