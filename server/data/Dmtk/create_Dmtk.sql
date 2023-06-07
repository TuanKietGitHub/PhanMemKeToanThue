INSERT INTO [dbo].[Dmtk]
(
    [Tk] , 
    [Ten_tk] ,
    [Loai_tk] ,
    [Bac_tk] ,
    [Tk_me] ,
    [Tk_nt] ,
    [Tk_dt]
)
VALUES  
(
    @Tk ,
    @Ten_tk ,
    @Loai_tk ,
    @Bac_tk ,
    @Tk_me ,
    @Tk_nt ,
    @Tk_dt
)

SELECT  [Tk] , 
        [Ten_tk] ,
        [Loai_tk] ,
        [Bac_tk] ,
        [Tk_me] ,
        [Tk_nt] ,
        [Tk_dt]
FROM [dbo].[Dmtk]
WHERE [Tk] = @Tk