SELECT  DT.[Ma_dt] , 
        DT.[Ten_dt] , 
        DT.[Ma_nh_dt] , 
        DT.[Ma_so_thue] , 
        DT.[Dia_chi] ,
        NH_DT.[Ten_nh_dt] , 
        DT.[Tel] ,
        DT.[Fax] ,
        DT.[Email] ,
        DT.[Web]
FROM [dbo].[Dmdt] DT INNER JOIN [dbo].[Dmnhdt] NH_DT
    ON DT.Ma_nh_dt = NH_DT.Ma_nh_dt
WHERE   DT.[Ma_dt] LIKE '%'+@find+'%'
    OR  DT.[Ten_dt] LIKE '%'+@find+'%'
    OR  DT.[Ma_nh_dt] LIKE '%'+@find+'%'
    OR  DT.[Ma_so_thue] LIKE '%'+@find+'%'
    OR  DT.[Dia_chi] LIKE '%'+@find+'%'
    OR  DT.[Tel] LIKE '%'+@find+'%'
    OR  DT.[Fax] LIKE '%'+@find+'%'
    OR  DT.[Email] LIKE '%'+@find+'%'
    OR  DT.[Web] LIKE '%'+@find+'%'