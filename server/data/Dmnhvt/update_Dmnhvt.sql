UPDATE [dbo].[Dmnhvt]
SET [Ten_nh] = @Ten_nh , [Stt_nh] = @Stt_nh
WHERE [Ma_nh] = @Ma_nh

SELECT [Ma_nh] , [Ten_nh] , [Stt_nh] 
FROM [dbo].[Dmnhvt]
WHERE [Ma_nh] = @Ma_nh