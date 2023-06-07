SELECT  [Tk] , 
        [Ten_tk] ,
        [Loai_tk] ,
        [Bac_tk] ,
        [Tk_me] ,
        [Tk_nt] ,
        [Tk_dt]
FROM [dbo].[Dmtk]
WHERE [Tk] = @Tk

DELETE FROM [dbo].[Dmtk] WHERE [Tk] = @Tk