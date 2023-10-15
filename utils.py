import pandas as pd
import numpy as np
import readsheets

dfs = readsheets.readsheets('files/test.xls')


def getTop(n):
    df = dfs[n]
    # df = pd.read_excel('files/test.xlsx')
    gnmk = df["功能模块"][df['功能项'].isna()]
    gnmk = df["功能模块"][df['功能项'] == '']
    gnx = df["功能项"][df['功能模块'] == '']
    mknum = df["数量"][df["功能项"] == ''].astype(str)
    xnum = df["数量"][df["功能模块"] == ''].astype(str)
    return np.array(gnmk), np.array(gnx), np.array(mknum), np.array(xnum)

