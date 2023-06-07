UPDATE [dbo].[Dmdvt]
SET [Dvt_eng] = @Dvt_eng
WHERE [Dvt] = @Dvt

SELECT [Dvt] , [Dvt_eng] FROM [dbo].[Dmdvt] WHERE [Dvt] = @Dvt
