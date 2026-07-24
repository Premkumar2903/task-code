
import pandas as pd

sale=pd.read_excel('pizza_sales.xlsx')

s=pd.DataFrame(sale)

#ckecks any null value
print(s.isnull().sum())

#quantity greater than 0
print(s[s['quantity']<=0])

#checking duplicate values
print(s.duplicated().sum())

#printing summary
print(s.describe())

