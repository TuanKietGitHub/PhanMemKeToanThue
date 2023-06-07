import {
            GET_HH ,
            ADD_HH ,
            DELETE_HH ,
            FIND_HH ,
            UPDATE_HH ,
            FIND_HH_FULL ,

            GET_DVT ,
            ADD_DVT ,
            DELETE_DVT ,
            FIND_DVT ,
            UPDATE_DVT ,
            FIND_DVT_FULL ,

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


} from '../contexts/constants';

export const appReducer = (state , action) => {
    const {type , payload} = action

    switch(type) {
        // DM HH
            case GET_HH:
                return {
                    ...state,
                    List_HH: payload
                }
            
            case FIND_HH:
                return {
                    ...state,
                    find_VatTu: payload
                }

            case ADD_HH:
                return {
                    ...state ,
                    List_HH: [...state.List_HH , payload]
                }
            
            case DELETE_HH:
                return {
                    ...state ,
                    List_HH: state.List_HH.filter( post => post.Ma_vt !== payload) ,
                    Find_HH: state.Find_HH.filter( post => post.Ma_vt !== payload)
                }

            case UPDATE_HH:
                const newHH = state.List_HH.map(hh => hh.Ma_vt === payload.Ma_vt ? payload : hh)
                const findHH = state.Find_HH.map(hh => hh.Ma_vt === payload.Ma_vt ? payload : hh)
                return {
                    ...state ,
                    List_HH: newHH ,
                    Find_HH: findHH
                }

            case FIND_HH_FULL:
                return {
                    ...state ,
                    Find_HH: payload
                }

        // DM DVT
            case GET_DVT:
                return {
                    ...state,
                    List_DVT: payload
                }

            case ADD_DVT:
                return {
                    ...state ,
                    List_DVT: [...state.List_DVT , payload]
                }

            case FIND_DVT:
                return {
                    ...state,
                    find_DonViTinh: payload
                }
            
            case DELETE_DVT:
                return {
                    ...state ,
                    List_DVT: state.List_DVT.filter( post => post.Dvt !== payload) ,
                    Find_DVT: state.Find_DVT.filter( post => post.Dvt !== payload)
                }
    
            case UPDATE_DVT:
                const newDVT = state.List_DVT.map(dvt => dvt.Dvt === payload.Dvt ? payload : dvt)
                const findDVT = state.Find_DVT.map(dvt => dvt.Dvt === payload.Dvt ? payload : dvt)
                return {
                    ...state ,
                    List_DVT: newDVT ,
                    Find_DVT: findDVT
                }
    
            case FIND_DVT_FULL:
                return {
                    ...state ,
                    Find_DVT: payload
                }
            
        // DM NHVT
            case GET_NHVT:
                return {
                    ...state,
                    List_NHVT: payload
                }

            case ADD_NHVT:
                return {
                    ...state ,
                    List_NHVT: [...state.List_NHVT , payload]
                }

            case FIND_NHVT:
                return {
                    ...state,
                    find_NhomVatTu: payload
                }
            
            case DELETE_NHVT:
                return {
                    ...state ,
                    List_NHVT: state.List_NHVT.filter( nhvt => nhvt.Ma_nh !== payload) ,
                    Find_NHVT: state.Find_NHVT.filter( nhvt => nhvt.Ma_nh !== payload)
                }

            case UPDATE_NHVT:
                const newNHVT = state.List_NHVT.map(nhvt => nhvt.Ma_nh === payload.Ma_nh ? payload : nhvt)
                const findNHVT = state.Find_NHVT.map(nhvt => nhvt.Ma_nh === payload.Ma_nh ? payload : nhvt)
                return {
                    ...state ,
                    List_NHVT: newNHVT ,
                    Find_NHVT: findNHVT
                }

            case FIND_NHVT_FULL:
                return {
                    ...state ,
                    Find_NHVT: payload
                }

        // DM TK
            case GET_TK:
                return {
                    ...state,
                    List_TK: payload
                }

            case ADD_TK:
                return {
                    ...state ,
                    List_TK: [...state.List_TK , payload]
                }

            case FIND_TK:
                return {
                    ...state,
                    find_TaiKhoan: payload
                }
            
            case DELETE_TK:
                return {
                    ...state ,
                    List_TK: state.List_TK.filter( TK => TK.Tk !== payload) ,
                    Find_TK: state.Find_TK.filter( TK => TK.Tk !== payload)
                }

            case UPDATE_TK:
                const newTK = state.List_TK.map(TK => TK.Tk === payload.Tk ? payload : TK)
                const findTK = state.Find_TK.map(TK => TK.Tk === payload.Tk ? payload : TK)
                return {
                    ...state ,
                    List_TK: newTK ,
                    Find_TK: findTK
                }

            case FIND_TK_FULL:
                return {
                    ...state ,
                    Find_TK: payload
                }

        // DM NHDT
            case GET_NHDT:
                return {
                    ...state,
                    List_NHDT: payload
                }

            case ADD_NHDT:
                return {
                    ...state ,
                    List_NHDT: [...state.List_NHDT , payload]
                }

            case FIND_NHDT:
                return {
                    ...state,
                    find_NhomDoiTuong: payload
                }

            case DELETE_NHDT:
                return {
                    ...state ,
                    List_NHDT: state.List_NHDT.filter( NHDT => NHDT.Ma_nh_dt !== payload) ,
                    Find_NHDT: state.Find_NHDT.filter( NHDT => NHDT.Ma_nh_dt !== payload)
                }

            case UPDATE_NHDT:
                const newNHDT = state.List_NHDT.map(NHDT => NHDT.Ma_nh_dt === payload.Ma_nh_dt ? payload : NHDT)
                const findNHDT = state.Find_NHDT.map(NHDT => NHDT.Ma_nh_dt === payload.Ma_nh_dt ? payload : NHDT)
                return {
                    ...state ,
                    List_NHDT: newNHDT ,
                    Find_NHDT: findNHDT
                }

            case FIND_NHDT_FULL:
                return {
                    ...state ,
                    Find_NHDT: payload
                }
    
        
        // DM DT
            case GET_DT:
                return {
                    ...state,
                    List_DT: payload
                }


        default: 
            return state
    }
}




