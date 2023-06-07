UPDATE [dbo].[Dmtk]
SET [Ten_tk] = @Ten_tk ,
    [Loai_tk] = @Loai_tk ,
    [Bac_tk] = @Bac_tk ,
    [Tk_me] = @Tk_me ,
    [Tk_nt] = @Tk_nt ,
    [Tk_dt] = @Tk_dt 
WHERE [Tk] = @Tk

SELECT  [Tk] , 
        [Ten_tk] ,
        [Loai_tk] ,
        [Bac_tk] ,
        [Tk_me] ,
        [Tk_nt] ,
        [Tk_dt]
FROM [dbo].[Dmtk]
WHERE [Tk] = @Tk