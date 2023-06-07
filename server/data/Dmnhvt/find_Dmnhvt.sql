SELECT [Ma_nh] , [Ten_nh] , [Stt_nh]
FROM [dbo].[Dmnhvt]
WHERE [Ma_nh] LIKE '%'+@find+'%' OR [Ten_nh] LIKE '%'+@find+'%' OR [Stt_nh] LIKE '%'+@find+'%'