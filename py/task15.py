import pandas as pd

bike = pd.read_excel('bike.xlsx')
bike[bike['cc'] >150]

car = pd.read_excel('car.xlsx')
car[car['size']>5]

pd.merge(car,bike,how='left',on='name')


pd.merge(car,bike,how='right',on='name')


pd.merge(car,bike,how='inner',on='name')


pd.merge(car,bike,how='outer',on='name')


pd.merge(car,bike,how='cross')