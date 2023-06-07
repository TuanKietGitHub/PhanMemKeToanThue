SELECT [Ma_nh] , [Ten_nh] , [Stt_nh] 
FROM [dbo].[Dmnhvt] 
WHERE [Ma_nh] = @Ma_nh

DELETE FROM [dbo].[Dmnhvt] WHERE [Ma_nh] = @Ma_nh