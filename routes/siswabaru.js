const router = require('express').Router()
const siswabaruController = require('../controller/siswabaru')

router.post('/insert', (req, res)=> {
    siswabaruController.create(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getall', (req, res)=> {
    siswabaruController.showAllData()
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res)=> {
    siswabaruController.showDataById(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.put('/update/:id', (req, res)=> {
    siswabaruController.update(req.params.id, req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res)=> {
    siswabaruController.delete(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})
module.exports = router