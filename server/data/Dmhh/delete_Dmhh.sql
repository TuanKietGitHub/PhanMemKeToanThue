SELECT  [Ma_vt] ,
        [Ten_vt] ,
        [Dvt] ,
        [Ma_nh] ,
        [Gia_mua] ,
        [Gia_ban] ,
        [Gia_ban4] ,
        [Ts] ,
        [Sl_ton_min] ,
        [Sl_ton_max] ,
        [Loai_vt] ,
        [Tk_vt] ,
        [Tk_gv] ,
        [Tk_dt]
FROM [dbo].[Dmvt]
WHERE [Ma_vt] = @Ma_vt

DELETE FROM [dbo].[Dmvt]
WHERE [Ma_vt] = @Ma_vt