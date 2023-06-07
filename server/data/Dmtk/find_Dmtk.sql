SELECT  [Tk] , 
        [Ten_tk] ,
        [Loai_tk] ,
        [Bac_tk] ,
        [Tk_me] ,
        [Tk_nt] ,
        [Tk_dt]
FROM [dbo].[Dmtk]
WHERE   [Tk] LIKE '%'+@find+'%'
    OR  [Ten_tk] LIKE '%'+@find+'%'
--     OR  [Loai_tk] LIKE '%'+@find+'%'
--     OR  [Bac_tk] LIKE '%'+@find+'%'
--     OR  [Tk_me] LIKE '%'+@find+'%'
    OR  [Tk_nt] LIKE '%'+@find+'%'
    OR  [Tk_dt] LIKE '%'+@find+'%'