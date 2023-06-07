INSERT INTO [dbo].[Dmdvt]
    (
        [Dvt]
    )
VALUES 
    (
        @Dvt
    )

SELECT [Dvt] 
FROM [dbo].[Dmdvt]
WHERE [Dvt] = @Dvt