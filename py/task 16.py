import pandas as pd

data = pd.read_excel('insurance.xlsx')

data.groupby('sex')['charges'].agg(['sum','max','count','min','mean'])
data.groupby(['smoker','sex'])['charges'].agg(['sum','max','count','min','mean'])



data.groupby('region')['charges'].agg(['sum'])
data.sort_values(by='age',ascending=False)

emp=pd.read_excel('emp_table_sql.xlsx')


emp.groupby('deptno')['sal'].agg(['sum'])

emp.groupby(['deptno','job'])['sal'].agg(['sum','count','mean','max','min'])