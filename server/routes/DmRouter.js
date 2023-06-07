const express = require('express');
const router = express.Router();

const DmhhController = require('../controllers/DmhhController');
const DmnhvtController = require('../controllers/DmnhvtController');
const DmnhdtController = require('../controllers/DmnhdtController');
const DmdvtController = require('../controllers/DmdvtController');
const DmdtController = require('../controllers/DmdtController');
const DmtkController = require('../controllers/DmtkController');

// DM HANG HOA
router.get('/dmhh' , DmhhController.getAllDmhh);
router.post('/dmhh' , DmhhController.addDmhh);
router.delete('/dmhh/:Ma_vt' , DmhhController.deleteDmhh);
router.put('/dmhh' , DmhhController.updateDmhh);
router.get('/dmhh/:find' , DmhhController.findDmhh);

// DM _ NHom Vat tu
router.get('/dmnhvt' , DmnhvtController.getAllDmnhvt);
router.post('/dmnhvt' , DmnhvtController.addDmnhvt);
router.delete('/dmnhvt/:id_Ma_nh' , DmnhvtController.deleteDmnhvt);
router.put('/dmnhvt' , DmnhvtController.updateDmnhvt);
router.get('/dmnhvt/:find' , DmnhvtController.findDmnhvt);

// DM _ Don Vi Tinh
router.get('/dmdvt' , DmdvtController.GetAllDmdvt);
router.post('/dmdvt' , DmdvtController.addDmdvt);
router.delete('/dmdvt/:Dvt' , DmdvtController.deleteDmdvt);
router.put('/dmdvt' , DmdvtController.updateDmdvt);
router.get('/dmdvt/:find' , DmdvtController.findDmdvt);

// DM_Nhom Doi Tuong
router.get('/dmnhdt' , DmnhdtController.getAllDmnhdt);
router.post('/dmnhdt' , DmnhdtController.addDmnhdt);
router.delete('/dmnhdt/:Ma_nh_dt' , DmnhdtController.deleteDmnhdt);
router.put('/dmnhdt' , DmnhdtController.updateDmnhdt);
router.get('/dmnhdt/:find' , DmnhdtController.findDmnhdt);

// DM Doi Tuong
router.get('/dmdt' , DmdtController.getAll_Dmdt);
router.post('/dmdt' , DmdtController.add_Dmdt);
router.delete('/dmdt/:Ma_dt' , DmdtController.delete_Dmdt);
router.put('/dmdt' , DmdtController.update_Dmdt);
router.get('/dmdt/:find' , DmdtController.find_Dmdt);

// DM TAI KHOAN
router.get('/dmtk' , DmtkController.getAllDmtk);
router.post('/dmtk' , DmtkController.addDmtk);
router.delete('/dmtk/:Tk' , DmtkController.deleteDmtk);
router.put('/dmtk' , DmtkController.updateDmtk);
router.get('/dmtk/:find' , DmtkController.findDmtk);



module.exports = router