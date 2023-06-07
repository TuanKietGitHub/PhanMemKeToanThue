INSERT INTO [dbo].[Dmnhvt]
    (
        [Ma_nh],
        [Ten_nh],
        [Stt_nh]
    )
VALUES
    (
        @Ma_nh,
        @Ten_nh,
        @Stt_nh
    ) 

SELECT [Ma_nh] , [Ten_nh] , [Stt_nh] 
FROM [dbo].[Dmnhvt]
WHERE [Ma_nh] = @Ma_nh