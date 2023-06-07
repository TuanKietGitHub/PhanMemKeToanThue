INSERT INTO [dbo].[Dmnhdt]
(
    [Ma_nh_dt] ,
    [Ten_nh_dt]
)
VALUES 
(
    @Ma_nh_dt ,
    @Ten_nh_dt 
)

SELECT [Ma_nh_dt] , [Ten_nh_dt] 
FROM [dbo].[Dmnhdt]
WHERE [Ma_nh_dt] = @Ma_nh_dt