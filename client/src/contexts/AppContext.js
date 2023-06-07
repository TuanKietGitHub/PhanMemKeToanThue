import { createContext , useReducer , useState } from "react";
import { appReducer } from '../reducers/appReducer';
import axios from 'axios';

import {
            apiUrl ,
            GET_HH ,
            ADD_HH ,
            DELETE_HH ,
            FIND_HH ,
            UPDATE_HH ,
            FIND_HH_FULL ,

            GET_DVT ,
            DELETE_DVT ,
            FIND_DVT ,
            UPDATE_DVT ,
            FIND_DVT_FULL, 
            ADD_DVT,

            GET_NHVT ,
            DELETE_NHVT ,
            FIND_NHVT ,
            UPDATE_NHVT ,
            FIND_NHVT_FULL, 
            ADD_NHVT ,

            GET_TK ,
            DELETE_TK ,
            FIND_TK ,
            UPDATE_TK ,
            FIND_TK_FULL, 
            ADD_TK ,

            GET_NHDT ,
            DELETE_NHDT ,
            FIND_NHDT ,
            UPDATE_NHDT ,
            FIND_NHDT_FULL, 
            ADD_NHDT ,

            GET_DT ,
            DELETE_DT ,
            FIND_DT , 
            UPDATE_DT ,
            FIND_DT_FULL ,
            ADD_DT

        } from './constants';

export const AppContext = createContext()

const AppContextProvider = ({children}) => {

    // state 
    const [appState , dispatch] = useReducer(appReducer , {
        find_VatTu: null ,
        List_HH: [] ,
        Find_HH: [] ,

        find_DonViTinh: null ,
        List_DVT: [] ,
        Find_DVT: [] ,

        find_NhomVatTu: null ,
        List_NHVT: [] ,
        Find_NHVT: [] ,

        find_TaiKhoan: null ,
        List_TK: [] ,
        Find_TK: [] ,

        find_NhomDoiTuong: null ,
        List_NHDT: [] ,
        Find_NHDT: [] , 

        find_DoiTuong: null ,
        List_DT : [] ,
        Find_DT : []
    })

    // Set show HH
    const [ showAddHHModal , setShowAddHHModal ] = useState(false);
    const [ showUpdateHHModal , setShowUpdateHHModal ] = useState(false);
    const [ showDeleteHHModal , setShowDeleteHHModal ] = useState(false);
    const [showTableSearch , setShowTableSearch] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [sizePage , setSizePage] = useState(10);
    const [pageNumberLimit , setPageNumberLimit] = useState(5);
    const [maxPageNumerLimit , setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit , setMinPageNumberLimit] = useState(0); 

    // Set show Modal NHDT
    const [ showAddNHDTModal , setShowAddNHDTModal ] = useState(false);
    const [ showUpdateNHDTModal , setShowUpdateNHDTModal ] = useState(false);
    const [ showDeleteNHDTModal , setShowDeleteNHDTModal ] = useState(false);
    const [showTableSearchNHDT , setShowTableSearchNHDT] = useState(false);
    const [currentPageNHDT , setCurrentPageNHDT] = useState(1);
    const [sizePageNHDT , setSizePageNHDT] = useState(5);
    const [pageNumberLimitNHDT , setPageNumberLimitNHDT] = useState(5);
    const [maxPageNumerLimitNHDT , setMaxPageNumberLimitNHDT] = useState(5);
    const [minPageNumberLimitNHDT , setMinPageNumberLimitNHDT] = useState(0); 

    // Set show Modal DVT
    const [sizePageModal , setSizePageModal] = useState(5);
    const [currentPageModal , setCurrentPageModal] = useState(1);
    const [pageNumberLimitModal , setPageNumberLimitModal] = useState(5);
    const [maxPageNumerLimitModal , setMaxPageNumberLimitModal] = useState(5);
    const [minPageNumberLimitModal , setMinPageNumberLimitModal] = useState(0);

    const [showModalDvt , setShowModalDvt] = useState(false);
    const [showAddDVTModal , setShowAddDVTModal ] = useState(false);
    const [showUpdateDVTModal , setShowUpdateDVTModal ] = useState(false);
    const [showTableSearchDVT , setShowTableSearchDVT] = useState(false);

    // Set show Modal NHOM VAT TU
    const [showModalNhvt , setShowModalNhvt] = useState(false);
    const [ShowAddNHVTModal , setShowAddNHVTModal ] = useState(false);
    const [ShowUpdateNHVTModal , setShowUpdateNHVTModal ] = useState(false);
    const [showTableSearchNHVT , setShowTableSearchNHVT] = useState(false);

    // SET SHOW MODAL TAI KHOAN
    const [showModalTK , setShowModalTK] = useState(false);
    const [ShowAddTKModal , setShowAddTKModal ] = useState(false);
    const [ShowUpdateTKModal , setShowUpdateTKModal ] = useState(false);
    const [showTableSearchTK , setShowTableSearchTK] = useState(false);

     // Set show Modal DT
    const [ showAddDTModal , setShowAddDTModal ] = useState(false);
    const [ showUpdateDTModal , setShowUpdateDTModal ] = useState(false);
    const [ showDeleteDTModal , setShowDeleteDTModal ] = useState(false);
    const [showTableSearchDT , setShowTableSearchDT] = useState(false);

    const [currentPageDT , setCurrentPageDT] = useState(1);
    const [sizePageDT , setSizePageDT] = useState(5);
    const [pageNumberLimitDT , setPageNumberLimitDT] = useState(5);
    const [maxPageNumerLimitDT , setMaxPageNumberLimitDT] = useState(5);
    const [minPageNumberLimitDT , setMinPageNumberLimitDT] = useState(0);

    // SET KEY SEARCH 
    const [keySearch , setKeySearch] = useState({
        search: ''
    })

    // Total
    const [ TypeDelete , setTypeDelete] = useState(null);

    // SET DATA ADD HH BUTTON
    const [DataAdd_DVT , setDataAdd_DVT ] = useState({
        Dvt: '' 
    })

    const [DataAdd_NHHH , setDataAdd_NHHH ] = useState({
        Ma_nh: 'HH' ,
        Ten_nh: 'Hàng hóa' 
    })

    const [Status_TKVT , setStatus_TKVT] = useState(false)
    const [DataAdd_TKVT , setDataAdd_TKVT ] = useState({
        Tk_vt: '1222' ,
        Ten_Tkvt: 'Hàng hóa' 
    })

    const [Status_TKGV , setStatus_TKGV] = useState(false)
    const [DataAdd_TKGV , setDataAdd_TKGV ] = useState({
        Tk_gv: '666' ,
        Ten_Tkgv: 'Giá vốn bán hàng' 
    })

    const [Status_TKDT , setStatus_TKDT] = useState(false)
    const [DataAdd_TKDT , setDataAdd_TKDT ] = useState({
        Tk_dt: '555' ,
        Ten_Tkdt: 'Doanh thu bán hàng hóa' 
    })


    // SET DATA UPDATE HH BUTTON
    const [DataUpdate_DVT , setDataUpdate_DVT ] = useState({
        Dvt: ''
    })

    const [DataUpdate_NHHH , setDataUpdate_NHHH ] = useState({
        Ma_nh: '' ,
        Ten_nh: '' 
    })

    const [DataUpdate_TKVT , setDataUpdate_TKVT ] = useState({
        Tk_vt: '' ,
        Ten_Tkvt: '' 
    })

    const [DataUpdate_TKGV , setDataUpdate_TKGV ] = useState({
        Tk_gv: '' ,
        Ten_Tkgv: '' 
    })

    const [DataUpdate_TKDT , setDataUpdate_TKDT ] = useState({
        Tk_dt: '' ,
        Ten_Tkdt: '' 
    })


    //Set show Toast
    const [alert , setAlert] = useState({
        type: null ,
        message: ''
    })

    const [alertHH , setAlertHH] = useState({
        type: null ,
        message: ''
    })

    //// DM HH ////
    // GET ALL HH 
    const get_HH = async () => {
        try {
            const response = await axios.get(`${apiUrl}/dm/dmhh`)
            if(response.data.success) {
                dispatch({
                    type: GET_HH ,
                    payload: response.data.listDmhh
                })
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // Handle Number 

    const change_number = (arr) => {
        let str = arr.replace(/,/g, '')
        return str;
    }

    const change_Number = (obj) => {
        let data = Object.fromEntries(
            Object.entries(obj).map(([key , value]) => 
                [key , change_number(String(value))]
            )
        );
        return data
    }

    // ADD HH
    const add_HH = async newHH => {
        try {
            const {Ma_vt , Ten_vt , Dvt , Ma_nh , Gia_mua , Gia_ban , Gia_ban4 , Ts , Loai_vt , Sl_ton_min , Sl_ton_max , Tk_vt , Tk_gv , Tk_dt} = newHH
            const handle_number = change_Number({Gia_mua , Gia_ban , Gia_ban4})

            const dataNewHH = {
                                    Ma_vt , 
                                    Ten_vt , 
                                    Dvt , 
                                    Ma_nh , 
                                    Gia_mua: handle_number.Gia_mua , 
                                    Gia_ban: handle_number.Gia_ban , 
                                    Gia_ban4: handle_number.Gia_ban4 , 
                                    Ts , 
                                    Loai_vt , 
                                    Sl_ton_min , 
                                    Sl_ton_max ,
                                    Tk_vt , 
                                    Tk_gv , 
                                    Tk_dt
                                }

            const response = await axios.post(`${apiUrl}/dm/dmhh`, dataNewHH)
            if(response.data.success) {
                dispatch({
                    type: ADD_HH ,
                    payload: response.data.addDmhh
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // DELETE HH
    const detele_HH = async (Ma_vt) => {
        try {
            const response = await axios.delete(`${apiUrl}/dm/dmhh/${Ma_vt}`)
            if(response.data.success) {
                dispatch({
                    type: DELETE_HH ,
                    payload: Ma_vt
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // Find vt when user is updating HH
    const find_VT = Ma => {
        const vatTu = appState.List_HH.find( vt => vt.Ma_vt === Ma)
        const nhomVatTu = appState.List_NHVT.find( nhvt => nhvt.Ma_nh === vatTu.Ma_nh)
        const tkVT = appState.List_TK.find( tk => tk.Tk === vatTu.Tk_vt )
        const tkGV = appState.List_TK.find( tk => tk.Tk === vatTu.Tk_gv )
        const tkDT = appState.List_TK.find( tk => tk.Tk === vatTu.Tk_dt )

        const {Ma_vt , Ten_vt , Dvt , Gia_mua , Gia_ban , Gia_ban4 , Ts , Loai_vt , Sl_ton_min , Sl_ton_max } = vatTu
        const { Ma_nh , Ten_nh } = nhomVatTu
        const Tk_vt = tkVT.Tk
        const Ten_Tkvt = tkVT.Ten_tk

        const Tk_gv = tkGV.Tk
        const Ten_Tkgv = tkGV.Ten_tk

        const Tk_dt = tkDT.Tk
        const Ten_Tkdt = tkDT.Ten_tk

        const vatTuNew = { Ma_vt , Ten_vt , Dvt , Gia_mua , Gia_ban , Gia_ban4 , Ts , Loai_vt , Sl_ton_min , Sl_ton_max , Ma_nh , Ten_nh , Tk_vt , Ten_Tkvt , Tk_gv , Ten_Tkgv , Tk_dt , Ten_Tkdt}

        dispatch({
            type: FIND_HH ,
            payload: vatTuNew
        })
    }

    // UPDATE HH 
    const update_HH = async HH_Update => {
        try {
            const {Ma_vt , Ten_vt , Dvt , Ma_nh , Gia_mua , Gia_ban , Gia_ban4 , Ts , Loai_vt , Sl_ton_min , Sl_ton_max , Tk_vt , Tk_gv , Tk_dt} = HH_Update
            const handle_number = change_Number({Gia_mua , Gia_ban , Gia_ban4})

            const dataUpdateHH = {
                                    Ma_vt , 
                                    Ten_vt , 
                                    Dvt , 
                                    Ma_nh , 
                                    Gia_mua: handle_number.Gia_mua , 
                                    Gia_ban: handle_number.Gia_ban , 
                                    Gia_ban4: handle_number.Gia_ban4 , 
                                    Ts , 
                                    Loai_vt , 
                                    Sl_ton_min , 
                                    Sl_ton_max ,
                                    Tk_vt , 
                                    Tk_gv , 
                                    Tk_dt
                                }
            
            const response = await axios.put(`${apiUrl}/dm/dmhh` , dataUpdateHH)
            if(response.data.success) {
                dispatch({
                    type: UPDATE_HH ,
                    payload: HH_Update
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // FIND HH 
    const find_HH_Full = async keySearch => {
        const {search} = keySearch
        try {
            const response = await axios.get(`${apiUrl}/dm/dmhh/${search}`)
            if(response.data.success) {
                dispatch({
                    type: FIND_HH_FULL ,
                    payload: response.data.findDmhh
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }


    //// DM DVT ////
    // GET DVT
    const get_DVT = async () => {
        try {
            const response = await axios.get(`${apiUrl}/dm/dmdvt`)
            if(response.data.success) {
                dispatch({
                    type: GET_DVT ,
                    payload: response.data.listDmdvt
                })
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // ADD DVT 
    const add_DVT = async newDVT => {
        try {
            const response = await axios.post(`${apiUrl}/dm/dmdvt` , newDVT)
            if(response.data.success) {
                dispatch({
                    type:  ADD_DVT,
                    payload: response.data.addDmdvt
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // DELETE DVT 
    const delete_DVT = async Dvt => {
        try {
            const response = await axios.delete(`${apiUrl}/dm/dmdvt/${Dvt}`)
            if(response.data.success) {
                dispatch({
                    type: DELETE_DVT ,
                    payload: Dvt
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // Find DVT when user is updating DVT
    const find_DVT = Dvt => {
        const dvt = appState.List_DVT.find( dvt => dvt.Dvt === Dvt)
        dispatch({
            type: FIND_DVT ,
            payload: dvt
        })
    }

    // UPDATE DVT
    const update_DVT = async DVT_Update => {
        try {
            const response = await axios.put(`${apiUrl}/dm/dmdvt` , DVT_Update)
            if(response.data.success) {
                dispatch({
                    type: UPDATE_DVT ,
                    payload: DVT_Update
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // FIND DVT
    const find_DVT_Full = async keySearch => {
        const {search} = keySearch
        try {
            const response = await axios.get(`${apiUrl}/dm/dmdvt/${search}`)
                dispatch({
                    type: FIND_DVT_FULL ,
                    payload: response.data.findDmdvt
                })
                return response.data
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }


    //// NHVT ////
    // GET ALL NHVT 
    const get_NHVT = async () => {
        try {
            const response = await axios.get(`${apiUrl}/dm/dmnhvt`)
            if(response.data.success) {
                dispatch({
                    type: GET_NHVT ,
                    payload: response.data.listDmnhvt
                })
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // ADD NHVT 
    const add_NHVT = async newNHVT => {
        try {
            const response = await axios.post(`${apiUrl}/dm/dmnhvt` , newNHVT)
            if(response.data.success) {
                dispatch({
                    type:  ADD_NHVT,
                    payload: response.data.addDmnhvt
                })
                return response.data
            }  
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // DELETE NHVT
    const delete_NHVT = async Ma_nh => {
        try {
            const response = await axios.delete(`${apiUrl}/dm/dmnhvt/${Ma_nh}`)
            if(response.data.success) {
                dispatch({
                    type: DELETE_NHVT ,
                    payload: Ma_nh
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // Find NHVT when user is updating NHVT
    const find_NHVT = Ma_nh => {
        const Nhvt = appState.List_NHVT.find( nhvt => nhvt.Ma_nh === Ma_nh)
        dispatch({
            type: FIND_NHVT ,
            payload: Nhvt
        })
    }

    // UPDATE NHVT
    const update_NHVT = async NHVT_Update => {
        try {
            const {Ma_nh , Ten_nh , Stt_nh} = NHVT_Update
            const response = await axios.put(`${apiUrl}/dm/dmnhvt` , {Ma_nh , Ten_nh , Stt_nh})
            if(response.data.success) {
                dispatch({
                    type: UPDATE_NHVT ,
                    payload: NHVT_Update
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // FIND NHVT
    const find_NHVT_Full = async keySearch => {
        const {search} = keySearch
        try {
            const response = await axios.get(`${apiUrl}/dm/dmnhvt/${search}`)
                dispatch({
                    type: FIND_NHVT_FULL ,
                    payload: response.data.findDmnhvt
                })
                return response.data
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }


    //// DMTK ////
    // GET ALL TK 
    const get_TK = async () => {
        try {
            const response = await axios.get(`${apiUrl}/dm/dmtk`)
            if(response.data.success) {
                dispatch({
                    type: GET_TK ,
                    payload: response.data.listDmtk
                })
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }
    
    // ADD TK 
    const add_TK = async newTK => {
        try {
            const response = await axios.post(`${apiUrl}/dm/dmtk` , newTK)
            if(response.data.success) {
                dispatch({
                    type:  ADD_TK,
                    payload: response.data.addDmtk
                })
                return response.data
            }  
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }
    
    // DELETE TK
    const delete_TK = async Tk => {
        try {
            const response = await axios.delete(`${apiUrl}/dm/dmtk/${Tk}`)
            if(response.data.success) {
                dispatch({
                    type: DELETE_TK ,
                    payload: Tk
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }
    
    // Find TK when user is updating TK
    const find_TK = Tk => {
        const TK = appState.List_TK.find( TK => TK.Tk === Tk)
        dispatch({
            type: FIND_TK ,
            payload: TK
        })
    }
    
    // UPDATE TK
    const update_TK = async TK_Update => {
        try {
            const response = await axios.put(`${apiUrl}/dm/dmtk` , TK_Update)
            if(response.data.success) {
                dispatch({
                    type: UPDATE_TK ,
                    payload: TK_Update
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }
    
    // FIND TK
    const find_TK_Full = async keySearch => {
        const {search} = keySearch
        try {
            const response = await axios.get(`${apiUrl}/dm/dmtk/${search}`)
                dispatch({
                    type: FIND_TK_FULL ,
                    payload: response.data.findDmtk
                })
                return response.data
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }


    //// NHOM DOI TUONG ////
    // GET ALL NHOM DOI TUONG
    const get_NHDT = async () => {
        try {
            const response = await axios.get(`${apiUrl}/dm/dmnhdt`)
            if(response.data.success) {
                dispatch({
                    type: GET_NHDT ,
                    payload: response.data.list_Dmnhdt
                })
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // ADD NHOM DOI TUONG
    const add_NHDT = async newNHDT => {
        try {
            const response = await axios.post(`${apiUrl}/dm/dmnhdt` , newNHDT)
            if(response.data.success) {
                dispatch({
                    type: ADD_NHDT ,
                    payload: response.data.addDmnhdt
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // DELETE NHDT 
    const delete_NHDT = async Ma_nh_dt => {
        try {
            const response = await axios.delete(`${apiUrl}/dm/dmnhdt/${Ma_nh_dt}`)
            if(response.data.success) {
                dispatch({
                    type: DELETE_NHDT ,
                    payload: Ma_nh_dt
                })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // Find NHDT when user is updating NHDT
    const find_NHDT = Ma_nh_dt => {
        const NHDT = appState.List_NHDT.find( nhdt => nhdt.Ma_nh_dt === Ma_nh_dt)
        dispatch({
            type: FIND_NHDT ,
            payload: NHDT
        })
    }

    // UPDATE NHOM DOI TUONG 
    const update_NHDT = async updateNHDT => {
        try {
            const response = await axios.put(`${apiUrl}/dm/dmnhdt` , updateNHDT)
            if(response.data.success) {
                dispatch({
                    type: UPDATE_NHDT ,
                    payload: updateNHDT
                })  
                return response.data
            }   
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }

    // FIND NHDT
    const find_NHDT_Full = async keySearch => {
        const {search} = keySearch
        try {
            const response = await axios.get(`${apiUrl}/dm/dmnhdt/${search}`)
                dispatch({
                    type: FIND_NHDT_FULL ,
                    payload: response.data.findDmnhdt
                })
                return response.data
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    } 

     //// DOI TUONG ////
    // GET ALL DOI TUONG
    const get_DT = async () => {
        try {
            const response = await axios.get(`${apiUrl}/dm/dmdt`)
            if(response.data.success) {
                dispatch({
                    type: GET_DT ,
                    payload: response.data.list_Dmdt
                })
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
        }
    }


    // Handle Ma
    const handleMa = (data) => {
        var str = data;
            str = str.toLowerCase();
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
            str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
            str = str.replace(/đ/g,"d");
            str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
            str = str.replace(/\s+/g ,"");
            str = str.toUpperCase();
        return str;
    }

    // Handle Ten
    const handleTen = (data) => {
        var str = data;
            str = str.replace(/!|@|%|\^|\*|\+|\=|\<|\>|\?|\/|\;|\'|\"|\&|\#|\[|\]|~|\$|`|{|}|\||\\/g," ");
            str = str.replace(/\s+/g ," ");
        return str;
    }

    // Handle Gia 
    const handleGia = (gia) => {
        let str = gia.replace(new RegExp(/[^\d]/,'ig'), "");
        const data = str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return data;
    }

    // Handle Number
    const handleNumber = (number) => {
        return number.replace(new RegExp(/[^\d]/,'ig'), "");
    }

    const AppContextData = {
        appState ,

        handleMa ,
        handleGia ,
        handleTen ,
        handleNumber ,

        DataAdd_DVT ,
        setDataAdd_DVT ,

        DataAdd_NHHH , 
        setDataAdd_NHHH ,

        Status_TKVT ,
        setStatus_TKVT ,
        DataAdd_TKVT ,
        setDataAdd_TKVT ,

        Status_TKGV ,
        setStatus_TKGV ,
        DataAdd_TKGV ,
        setDataAdd_TKGV ,

        Status_TKDT ,
        setStatus_TKDT ,
        DataAdd_TKDT ,
        setDataAdd_TKDT ,


        DataUpdate_DVT ,
        setDataUpdate_DVT ,

        DataUpdate_NHHH , 
        setDataUpdate_NHHH ,

        DataUpdate_TKVT ,
        setDataUpdate_TKVT ,

        DataUpdate_TKGV ,
        setDataUpdate_TKGV ,

        DataUpdate_TKDT ,
        setDataUpdate_TKDT ,


        get_HH ,
        add_HH ,
        detele_HH , 
        find_VT ,
        find_HH_Full ,
        update_HH ,
        showAddHHModal ,
        setShowAddHHModal ,
        showUpdateHHModal ,
        setShowUpdateHHModal ,
        showDeleteHHModal ,
        setShowDeleteHHModal ,

        sizePageModal ,
        setSizePageModal ,
        currentPageModal ,
        setCurrentPageModal ,
        pageNumberLimitModal ,
        setPageNumberLimitModal ,
        maxPageNumerLimitModal ,
        setMaxPageNumberLimitModal ,
        minPageNumberLimitModal ,
        setMinPageNumberLimitModal ,

        get_DVT ,
        add_DVT ,
        delete_DVT ,
        find_DVT ,
        update_DVT ,
        find_DVT_Full ,
        showAddDVTModal ,
        setShowAddDVTModal ,
        showUpdateDVTModal ,
        setShowUpdateDVTModal ,
        showTableSearchDVT ,
        setShowTableSearchDVT ,

        get_NHVT ,
        add_NHVT ,
        delete_NHVT ,
        update_NHVT ,
        find_NHVT ,
        find_NHVT_Full ,
        ShowAddNHVTModal ,
        setShowAddNHVTModal ,
        ShowUpdateNHVTModal ,
        setShowUpdateNHVTModal ,
        showTableSearchNHVT ,
        setShowTableSearchNHVT ,

        get_TK ,
        add_TK ,
        delete_TK ,
        find_TK ,
        update_TK ,
        find_TK_Full ,
        ShowAddTKModal ,
        setShowAddTKModal ,
        ShowUpdateTKModal ,
        setShowUpdateTKModal ,
        showTableSearchTK ,
        setShowTableSearchTK ,

        get_NHDT,
        add_NHDT ,
        delete_NHDT ,
        find_NHDT ,
        update_NHDT ,
        find_NHDT_Full ,
        showTableSearchNHDT ,
        setShowTableSearchNHDT ,
        showAddNHDTModal ,
        setShowAddNHDTModal ,
        showDeleteNHDTModal ,
        setShowDeleteNHDTModal ,
        showUpdateNHDTModal ,
        setShowUpdateNHDTModal ,
        currentPageNHDT ,
        setCurrentPageNHDT ,
        sizePageNHDT ,
        setSizePageNHDT ,
        pageNumberLimitNHDT ,
        setPageNumberLimitNHDT ,
        maxPageNumerLimitNHDT ,
        setMaxPageNumberLimitNHDT ,
        minPageNumberLimitNHDT ,
        setMinPageNumberLimitNHDT ,

        get_DT ,

        showTableSearchDT ,
        setShowTableSearchDT ,
        showAddDTModal ,
        setShowAddDTModal ,
        showDeleteDTModal ,
        setShowDeleteDTModal ,
        showUpdateDTModal ,
        setShowUpdateDTModal ,
        currentPageDT ,
        setCurrentPageDT ,
        sizePageDT ,
        setSizePageDT ,
        pageNumberLimitDT ,
        setPageNumberLimitDT ,
        maxPageNumerLimitDT ,
        setMaxPageNumberLimitDT ,
        minPageNumberLimitDT ,
        setMinPageNumberLimitDT ,


        showModalTK ,
        setShowModalTK ,

        showModalNhvt ,
        setShowModalNhvt ,

        showModalDvt ,
        setShowModalDvt ,

        TypeDelete,
        setTypeDelete ,

        currentPage ,
        setCurrentPage ,
        sizePage ,
        setSizePage ,
        pageNumberLimit ,
        setPageNumberLimit ,
        maxPageNumerLimit ,
        setMaxPageNumberLimit ,
        minPageNumberLimit ,
        setMinPageNumberLimit ,
        
        alert ,
        setAlert ,

        alertHH ,
        setAlertHH ,

        showTableSearch ,
        setShowTableSearch ,

        keySearch ,
        setKeySearch
    }

    return (
        <AppContext.Provider value={AppContextData}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider


























