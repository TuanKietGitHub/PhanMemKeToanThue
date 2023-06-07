UPDATE [dbo].[Dmvt]
SET [Ten_vt] = @Ten_vt ,
    [Dvt] = @Dvt ,
    [Ma_nh] = @Ma_nh ,
    [Gia_mua] = @Gia_mua ,
    [Gia_ban] = @Gia_ban ,
    [Gia_ban4] = @Gia_ban4 ,
    [Ts] = @Ts ,
    [Sl_ton_min] = @Sl_ton_min ,
    [Sl_ton_max] = @Sl_ton_max ,
    [Loai_vt] = @Loai_vt ,
    [Tk_vt] = @Tk_vt ,
    [Tk_gv] = @Tk_gv ,
    [Tk_dt] = @Tk_dt
WHERE [Ma_vt] = @Ma_vt

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