UPDATE [dbo].[Dmdt]
SET [Ten_dt] = @Ten_dt ,
    [Ma_nh_dt] = @Ma_nh_dt ,
    [Ma_so_thue] = @Ma_so_thue ,
    [Dia_chi] = @Dia_chi ,
    [Tel] = @Tel ,
    [Fax] = @Fax ,
    [Email] = @Email ,
    [Web] = @Web
WHERE [Ma_dt] = @Ma_dt

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
WHERE   [Ma_dt] = @Ma_dt