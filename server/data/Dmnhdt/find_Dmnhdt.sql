SELECT [Ma_nh_dt] , [Ten_nh_dt]
FROM [dbo].[Dmnhdt]
WHERE [Ma_nh_dt] LIKE '%'+@find+'%' OR [Ten_nh_dt] LIKE '%'+@find+'%'