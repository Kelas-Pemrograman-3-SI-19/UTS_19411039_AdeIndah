const siswabaruModel = require('../model/Siswabaru')
const objectId = require('mongoose').Types.ObjectId

//meng create data baru (create)
exports.create= (data) =>
  new Promise((resolve, reject)=> {
    siswabaruModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input Data Siswa Baru'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal Input Data Siswa Baru'
      }))
  })
//menampilkan data seluruh siswa (read)
  exports.showAllData = () =>
    new Promise((resolve, reject) => {
        siswabaruModel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data Siswa',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menapilkan Data Siswa',
            data: []
        }))
    })
// menampilkan data siswa dengan object id (read)
exports.showDataById = (id) =>
    new Promise((resolve, reject) => {
        siswabaruModel.findOne({
        _id: objectId(id)
    }).then(result => {
      resolve({
        status: true,
        pesan: 'Berhasil Menampilkan Data Siswa',
        data: result
      })
    }).catch(() => reject({
      status: false,
      pesan: 'Gagal Menapilkan Data Siswa',
      data: null
  }))
})
// update data siswa dengan object id (update)
exports.update = (id, data) => 
  new Promise ((resolve, reject) => {
    siswabaruModel.updateOne({
      _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Mengubah Data Siswa'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mengubah Data siswa'
    }))
})
//menghapus data siswa dengan object id (delete)
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    siswabaruModel.deleteOne({
      _id: objectId(id)
    }).then(() => resolve ({
      status: true,
      pesan : 'Berhasil Menghapus Data Siswa'
    })).catch(() => reject({
      status: false,
      pesan: 'Gagal Menghapus Data Siswa'
  }))
})
