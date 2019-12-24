const User = require("../User/model")
const bcrypt = require("bcryptjs")

const superAdmin = process.env.SUPERADMIN || "your@email.com"
const saPassword = process.env.SAPASSWORD || "secret"

const checkSuperAdmin = async () => {
  const encryptedPassword = await bcrypt
    .hashSync(saPassword, 10)
  User.findOrCreate({
    where: { email: superAdmin },
    defaults: {
      name: "Super Admin",
      password: encryptedPassword,
    }
  })
}

module.exports = { superAdmin, checkSuperAdmin }