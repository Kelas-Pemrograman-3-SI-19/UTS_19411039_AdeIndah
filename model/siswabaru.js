const mongoose = require('mongoose')
const Schema = mongoose.Schema

const siswabaruSchema = new Schema({
  namasiswa: {
    type: String
  },
  nisn: {
    type: Number
  },
  asalsekolah: {
    type: String
  },
  alamatlengkap: {
    type: String
  },
  tahunlulus: {
    type: Number
  },
  agama: {
    type: String
  },
  namaayah: {
    type: String

  },
  nohandphone: {
    type: Number
  }

})
module.exports = mongoose.model('siswabaru', siswabaruSchema)