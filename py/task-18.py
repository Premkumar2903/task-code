import pandas as pd
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt


from sklearn.datasets import load_wine

df = pd.read_excel('insurance.xlsx')
df.head()

wine = load_wine()
print(wine)
df = pd.DataFrame(wine.data,columns = wine.feature_name)

df['target'] = wine.target
df


#histogram plot plotting No of Age 

plt.figure(figsize=(6,4))
plt.hist(df['age'], bins=10 , color='skyblue', edgecolor = 'black')

plt.title('Age distribution')
plt.xlabel('Age')
plt.ylabel('No of People')
 
plt.grid(True)
plt.show()


#histogram plot plotting bmi count
plt.figure(figsize=(7,4))
plt.hist(df['bmi'],bins=10,color='yellow', edgecolor='black')

plt.title('bmi')
plt.xlabel('bmi')
plt.ylabel('count')

plt.grid(True)
plt.show()



#bar chart groupby age Vs their avg bmi
plt.figure(figsize=(8,4))
df.groupby('age')['bmi'].mean().plot(kind='bar',color ='blue')

plt.title('Avg Bmi by age')
plt.xlabel('Age')
plt.ylabel('Avg Bmi')
plt.show()



#Pie chart counting smoker and non-smokers
plt.figure(figsize=(8,4))
df['smoker'].value_counts().plot(kind='pie',autopct='%1.1f%%',startangle=90)
plt.title('smoker percentage')
plt.ylabel('')
plt.show()


#corelation heatmap
numeric_df = df.select_dtypes(include='number')
plt.figure(figsize=(8,7))
sns.heatmap(numeric_df.corr(),annot=True,cmap='coolwarm',fmt='.2f')
plt.title('correlation heatmap')
plt.show()


# Box plot Charges by Smoker
plt.figure(figsize=(8,7))
sns.boxplot(x='smoker',y='charges', data=df)
plt.xlabel('smoker')
plt.ylabel('charges')
plt.show()


#Scatter plot by Bmi by sex
plt.figure(figsize=(6,4))
sns.scatterplot(x='age',y='bmi', hue='sex', data=df)
plt.title('scatter')
plt.show()