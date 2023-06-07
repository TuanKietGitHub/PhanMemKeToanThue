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
WHERE   [Ma_vt] LIKE '%'+@find+'%'
    OR  [Ten_vt] LIKE '%'+@find+'%'
    OR  [Dvt] LIKE '%'+@find+'%'
    OR  [Ma_nh] LIKE '%'+@find+'%'
    OR  [Gia_mua] LIKE '%'+@find+'%'
    OR  [Gia_ban] LIKE '%'+@find+'%'
    OR  [Gia_ban4] LIKE '%'+@find+'%'
    OR  [Ts] LIKE '%'+@find+'%'