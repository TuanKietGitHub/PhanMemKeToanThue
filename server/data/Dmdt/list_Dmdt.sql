SELECT  DT.[Ma_dt] , 
        DT.[Ten_dt] , 
        DT.[Ma_nh_dt] , 
        DT.[Ma_so_thue] , 
        DT.[Dia_chi] ,
        NH_DT.[Ten_nh_dt]
FROM [dbo].[Dmdt] DT INNER JOIN [dbo].[Dmnhdt] NH_DT
    ON DT.Ma_nh_dt = NH_DT.Ma_nh_dt
