import xlrd
import pandas as pd


def readsheets(xlsfile):
    workbook = xlrd.open_workbook(xlsfile)

    sheet_names = workbook.sheet_names()

    sheet_dataframes = []

    for sheet_name in sheet_names:
        sheet = workbook.sheet_by_name(sheet_name)
        num_rows = sheet.nrows
        num_cols = sheet.ncols

        data = []
        for row_index in range(num_rows):
            row_data = []
            for col_index in range(num_cols):
                cell_value = sheet.cell_value(rowx=row_index, colx=col_index)
                row_data.append(cell_value)
            data.append(row_data)

        df = pd.DataFrame(data[1:], columns=data[0])
        sheet_dataframes.append(df)
    return sheet_dataframes


# f = readsheets('test.xls')
# print(f[1])
